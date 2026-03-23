DOCS_DIR := docs
PDF_DIR := release/pdf
QUARTO_DIR := release/quarto

.PHONY: all html pdf-separate pdf-book preview watch render clean

# Default: build everything
all: html pdf-separate pdf-book

# Quarto: render HTML book
html:
	cd $(DOCS_DIR) && quarto render --to html

# Quarto: render combined PDF book
pdf-book:
	cd $(DOCS_DIR) && quarto render --to pdf

# Quarto: render each chapter as a separate PDF
# Temporarily hides _quarto.yml so quarto treats each file as standalone
pdf-separate:
	@mkdir -p $(PDF_DIR)
	@mv $(DOCS_DIR)/_quarto.yml $(DOCS_DIR)/_quarto.yml.bak
	@for f in $$(find $(DOCS_DIR) -name '*.md' ! -name 'index.md' ! -name '_*' | sort); do \
		name=$$(basename "$$f" .md); \
		echo "Rendering $$name.pdf..."; \
		(cd $(DOCS_DIR) && quarto render "$$(basename $$f)" --to pdf --output "$$name.pdf" 2>&1); \
		mv -f "$(DOCS_DIR)/$$name.pdf" "$(PDF_DIR)/$$name.pdf" 2>/dev/null || true; \
	done
	@mv $(DOCS_DIR)/_quarto.yml.bak $(DOCS_DIR)/_quarto.yml
	@echo "PDFs in $(PDF_DIR)/"

# Quarto: live preview in browser (HTML with hot reload)
preview: watch
watch:
	cd $(DOCS_DIR) && quarto preview

# Quarto: render all formats
render:
	cd $(DOCS_DIR) && quarto render

clean:
	rm -rf $(QUARTO_DIR) $(PDF_DIR)
	rm -rf $(DOCS_DIR)/.quarto
