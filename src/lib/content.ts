import fs from 'fs';
import path from 'path';

export interface Chapter {
  slug: string;
  title: string;
  file: string;
}

export interface Part {
  slug: string;
  title: string;
  roman: string;
  chapters: Chapter[];
}

export interface BookConfig {
  title: string;
  author: string;
  parts: Part[];
}

export interface FlatChapter {
  part: Part;
  chapter: Chapter;
  /** Global 0-based index across all chapters */
  index: number;
}

/** Parse YAML frontmatter from MDX content (simple key: "value" pairs). */
function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (m) result[m[1]] = m[2];
  }
  return result;
}

const ROMAN_NUMERALS: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];

function toRoman(n: number): string {
  let result = '';
  for (const [value, numeral] of ROMAN_NUMERALS) {
    while (n >= value) { result += numeral; n -= value; }
  }
  return result;
}

/** Discover book structure from content/ directory and frontmatter. */
function discoverBookConfig(): BookConfig {
  const contentDir = path.join(process.cwd(), 'content');
  const partDirs = fs.readdirSync(contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const parts: Part[] = [];

  for (const partDir of partDirs) {
    const fullPartDir = path.join(contentDir, partDir);
    const mdxFiles = fs.readdirSync(fullPartDir)
      .filter((f) => f.endsWith('.mdx'))
      .sort();

    if (mdxFiles.length === 0) continue;

    const chapters: Chapter[] = [];

    // Read part title from _meta.yaml
    const metaPath = path.join(fullPartDir, '_meta.yaml');
    const metaContent = fs.existsSync(metaPath) ? fs.readFileSync(metaPath, 'utf-8') : '';
    const metaTitle = metaContent.match(/^title:\s*"?(.*?)"?\s*$/m);
    const partTitle = metaTitle ? metaTitle[1] : partDir;

    for (const file of mdxFiles) {
      const content = fs.readFileSync(path.join(fullPartDir, file), 'utf-8');
      const fm = parseFrontmatter(content);

      chapters.push({
        slug: file.replace(/\.mdx$/, ''),
        title: fm.title || file.replace(/\.mdx$/, ''),
        file: file.replace(/\.mdx$/, ''),
      });
    }

    parts.push({
      slug: partDir,
      title: partTitle,
      roman: toRoman(parts.length + 1),
      chapters,
    });
  }

  return { title: 'Codex', author: 'Carlos Nexans', parts };
}

let _cached: BookConfig | null = null;

export function getBookConfig(): BookConfig {
  if (!_cached) _cached = discoverBookConfig();
  return _cached;
}

/**
 * Returns a flat list of every chapter in the book, in order,
 * together with its parent part and a global index.
 */
export function getAllChapters(): FlatChapter[] {
  const config = getBookConfig();
  const result: FlatChapter[] = [];
  for (const part of config.parts) {
    for (const chapter of part.chapters) {
      result.push({ part, chapter, index: result.length });
    }
  }
  return result;
}

/**
 * Look up a single chapter by part + chapter slug.
 */
export function getChapter(
  partSlug: string,
  chapterSlug: string,
): FlatChapter | undefined {
  return getAllChapters().find(
    (fc) => fc.part.slug === partSlug && fc.chapter.slug === chapterSlug,
  );
}

/**
 * Returns the previous and next chapters relative to the given one.
 */
export function getAdjacentChapters(
  partSlug: string,
  chapterSlug: string,
): { prev?: FlatChapter; next?: FlatChapter } {
  const all = getAllChapters();
  const idx = all.findIndex(
    (fc) => fc.part.slug === partSlug && fc.chapter.slug === chapterSlug,
  );
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}
