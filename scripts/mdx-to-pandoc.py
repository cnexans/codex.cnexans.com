#!/usr/bin/env python3
"""
Converts MDX files with JSX callout components back to Pandoc markdown
with fenced div syntax for PDF generation via Pandoc + Lua filter.

Usage:
    python scripts/mdx-to-pandoc.py

Discovers files from content/**/*.mdx, reads titles from frontmatter,
writes to build/pdf/codex.md
"""

import re
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
CONTENT_DIR = BASE / "content"
OUTPUT_DIR = BASE / "build" / "pdf"

# JSX component → Quarto callout class mapping
COMPONENT_MAP = {
    "Axiom": "callout-tip",
    "Definition": "callout-important",
    "Theorem": "callout-note",
    "Proof": "callout-caution",
}

# Default labels per component
DEFAULT_LABELS = {
    "Axiom": "Axioma",
    "Definition": "Definición",
    "Theorem": "Teorema",
    "Proof": "Demostración",
}


def parse_frontmatter(content: str) -> dict[str, str]:
    """Parse YAML frontmatter from MDX content (simple key: "value" pairs)."""
    match = re.match(r'^---\r?\n(.*?)\r?\n---', content, re.DOTALL)
    if not match:
        return {}
    result = {}
    for line in match.group(1).split('\n'):
        m = re.match(r'^(\w+):\s*"?(.*?)"?\s*$', line)
        if m:
            result[m.group(1)] = m.group(2)
    return result


def strip_frontmatter(content: str) -> str:
    """Remove YAML frontmatter from content."""
    return re.sub(r'^---\r?\n.*?\r?\n---\r?\n*', '', content, count=1, flags=re.DOTALL)


def convert_jsx_to_fenced(content: str) -> str:
    """Convert JSX callout tags to Pandoc fenced divs."""
    lines = content.split("\n")
    result = []

    in_aside = False
    aside_content = []
    pending_footnote = None  # footnote to place after current callout closes
    callout_depth = 0
    parent_callout_line = None  # line index of the outermost callout opening

    for line in lines:
        # Skip import lines
        if line.startswith("import ") and "from" in line and ("callout" in line or "aside" in line):
            continue

        # Aside → footnote placed after the enclosing callout
        if re.match(r'^\s*<Aside>', line):
            in_aside = True
            aside_content = []
            continue
        if re.match(r'^\s*</Aside>', line):
            in_aside = False
            text = ' '.join(aside_content).strip()
            if callout_depth > 0:
                # Defer footnote to after callout closes
                pending_footnote = text
            else:
                result.append(f'^[{text}]')
            continue
        if in_aside:
            aside_content.append(line.strip())
            continue

        # Opening tag: <Component title="..." label="..." collapsible>
        opening = re.match(
            r'^(\s*)<(Axiom|Definition|Theorem|Proof)'
            r'(?:\s+title="([^"]*)")?'
            r'(?:\s+label="([^"]*)")?'
            r'(\s+collapsible)?'
            r'\s*>',
            line
        )
        if opening:
            callout_depth += 1
            if callout_depth == 1:
                parent_callout_line = len(result)  # next line will be the ::: opener
            indent = opening.group(1)
            component = opening.group(2)
            title = opening.group(3)
            label = opening.group(4)
            collapsible = opening.group(5) is not None

            callout_class = COMPONENT_MAP[component]
            display_label = label or DEFAULT_LABELS[component]

            # Build title string
            if title:
                # Restore single backslashes for LaTeX
                title = title.replace("\\\\", "\\")
                full_title = f'{display_label} — {title}'
            else:
                full_title = display_label

            collapse_attr = ' collapse="true"' if collapsible else ''
            result.append(f'{indent}::: {{.{callout_class} title="{full_title}"{collapse_attr}}}')
            continue

        # Closing tag: </Component>
        closing = re.match(r'^(\s*)</(Axiom|Definition|Theorem|Proof)>', line)
        if closing:
            callout_depth -= 1
            indent = closing.group(1)
            result.append(f'{indent}:::')
            # Emit deferred aside as a paragraph after the callout
            if callout_depth == 0 and pending_footnote:
                result.append('')
                result.append(f'\\footnotetext{{{pending_footnote}}}')
                # Insert \footnotemark in the title of the parent (outermost) callout
                if parent_callout_line is not None and parent_callout_line < len(result):
                    line_i = result[parent_callout_line]
                    if 'title="' in line_i:
                        result[parent_callout_line] = line_i.replace('"}', '\\footnotemark{}"}', 1)
                pending_footnote = None
            continue

        # Image tag: <img src="..." ... />
        img_match = re.match(
            r'<img\s+src="([^"]+)"\s+alt="([^"]*)"\s+className="[^"]*"\s+style=\{\{width:\s*\'([^\']+)\'\}\}\s*/>',
            line
        )
        if img_match:
            src = img_match.group(1)
            # Fix path: /img/... → public/img/...
            if src.startswith("/img/"):
                src = "public" + src
            alt = img_match.group(2)
            width = img_match.group(3)
            result.append(f'![{alt}]({src}){{width={width} fig-align="center"}}')
            continue

        result.append(line)

    return "\n".join(result)


ROMAN_NUMERALS = [
    (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
    (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
    (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I'),
]


def to_roman(n: int) -> str:
    result = ''
    for value, numeral in ROMAN_NUMERALS:
        while n >= value:
            result += numeral
            n -= value
    return result


def discover_parts() -> list[dict]:
    """Discover book structure from content/ directory and frontmatter."""
    parts = []
    part_dirs = sorted(
        d for d in CONTENT_DIR.iterdir() if d.is_dir()
    )

    for part_dir in part_dirs:
        mdx_files = sorted(
            f for f in part_dir.glob("*.mdx") if f.name != "_index.mdx"
        )
        if not mdx_files:
            continue

        chapters = []

        # Read part title and description from _index.mdx
        index_path = part_dir / "_index.mdx"
        part_title = part_dir.name
        part_description = ""
        if index_path.exists():
            index_content = index_path.read_text()
            fm = parse_frontmatter(index_content)
            if fm.get("title"):
                part_title = fm["title"]
            body = strip_frontmatter(index_content).strip()
            if body:
                part_description = body

        for mdx_path in mdx_files:
            content = mdx_path.read_text()
            fm = parse_frontmatter(content)

            chapters.append({
                "file": mdx_path.stem,
                "title": fm.get("title", mdx_path.stem),
                "path": mdx_path,
            })

        parts.append({
            "slug": part_dir.name,
            "title": part_title,
            "description": part_description,
            "roman": to_roman(len(parts) + 1),
            "chapters": chapters,
        })

    return parts


def process_file(mdx_path: Path, title: str) -> str:
    """Read MDX, convert to Pandoc markdown, return content."""
    content = mdx_path.read_text()
    content = strip_frontmatter(content)
    converted = convert_jsx_to_fenced(content)

    # Add chapter title as H1
    header = f"# {title}\n\n"
    return header + converted


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # YAML metadata for Pandoc
    yaml_header = """---
title: "Codex"
author: "Carlos Nexans"
lang: es
toc: true
toc-depth: 2
top-level-division: chapter
---

"""

    all_content = [yaml_header]
    chapter_count = 0

    parts = discover_parts()

    for part_info in parts:
        # Part header (renders as \part{} in LaTeX report class)
        part_block = f"\\part{{{part_info['title']}}}\n"
        if part_info.get("description"):
            part_block += f"\n{part_info['description']}\n"
        all_content.append(part_block)

        for ch in part_info["chapters"]:
            content = process_file(ch["path"], ch["title"])
            if content:
                all_content.append(content)
                chapter_count += 1
                print(f"  OK  {part_info['slug']}/{ch['file']}.mdx")

    combined = "\n\n".join(all_content)
    output_path = OUTPUT_DIR / "codex.md"
    output_path.write_text(combined)
    print(f"\n  Output: {output_path}")
    print(f"  Parts: {len(parts)}, Chapters: {chapter_count}")


if __name__ == "__main__":
    main()
