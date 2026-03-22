# Apuntes de ciencias matemáticas y de computación

Apuntes personales de matemáticas y ciencias de la computación, por Carlos Nexans. El proyecto usa [Quarto](https://quarto.org/) para generar un libro en HTML y PDF a partir de archivos Markdown.

## Estructura del proyecto

```
.
├── docs/                  # Archivos fuente en Markdown
│   ├── _quarto.yml        # Configuración del libro Quarto
│   └── *.md               # Capítulos y secciones
├── release/               # Salida generada (HTML, PDF)
├── pandoc/                # Configuración auxiliar de LaTeX
└── Makefile               # Automatización de builds
```

## Requisitos previos

Instalar Quarto:

```bash
brew install --cask quarto
```

## Comandos disponibles

| Comando              | Descripción                                              |
| -------------------- | -------------------------------------------------------- |
| `make` o `make all`  | Construye todo (HTML book, PDFs individuales, PDF libro) |
| `make html`          | Construye solo el libro en HTML                          |
| `make pdf-separate`  | Genera un PDF individual por capítulo en `release/pdf/`  |
| `make pdf-book`      | Genera el PDF combinado del libro completo               |
| `make preview`       | Abre vista previa en el navegador con hot reload         |
| `make clean`         | Elimina todos los archivos generados                     |

## Agregar contenido nuevo

1. Crear un archivo `.md` dentro de `docs/`.
2. Agregarlo en `docs/_quarto.yml` bajo la sección `chapters`.
3. Usar Markdown estándar con matemáticas en LaTeX (`$...$` o `$$...$$`).

Para teoremas, definiciones y notas, usar callouts de Quarto:

```markdown
::: {.callout-note title="Teorema"}
Todo espacio métrico compacto es completo.
:::

::: {.callout-tip title="Definición"}
Un espacio topológico es **compacto** si toda cubierta abierta admite una subcubierta finita.
:::
```

## CI/CD

En cada push a `master`, GitHub Actions construye el libro y despliega el HTML en GitHub Pages. El PDF queda disponible como artefacto del workflow.

## Licencia

[Creative Commons CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
