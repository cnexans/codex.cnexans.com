PDF_DIR  := release/pdf
PDF_BUILD := build/pdf

.PHONY: dev build pdf images clean

# Next.js dev server
dev:
	npm run dev

# Next.js static build
build:
	npm run build

PANDOC_FLAGS := --pdf-engine=xelatex \
	--lua-filter=filters/callout-numbers.lua \
	--include-in-header=filters/header.tex \
	-V geometry:margin=1in \
	-V fontsize=11pt

# PDF: convert MDX → Pandoc markdown → PDF via XeLaTeX
pdf: $(PDF_BUILD)/codex.md
	@mkdir -p $(PDF_DIR)
	pandoc $(PDF_BUILD)/codex.md $(PANDOC_FLAGS) -o $(PDF_DIR)/codex.pdf
	@echo "PDF: $(PDF_DIR)/codex.pdf"
	@for f in $(PDF_BUILD)/[0-9]*.md; do \
		name=$$(basename "$$f" .md); \
		pandoc "$$f" $(PANDOC_FLAGS) -o "$(PDF_DIR)/$$name.pdf"; \
		echo "PDF: $(PDF_DIR)/$$name.pdf"; \
	done

$(PDF_BUILD)/codex.md: content/**/*.mdx scripts/mdx-to-pandoc.py
	python3 scripts/mdx-to-pandoc.py

# Generate SVG images (requires .venv with matplotlib/numpy)
images:
	.venv/bin/python3 scripts/gen_images.py

clean:
	rm -rf build/ release/ .next/ out/
