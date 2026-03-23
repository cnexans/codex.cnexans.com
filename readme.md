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

Para teoremas, definiciones y notas, ver la sección [Callouts](#callouts) más abajo.

## Callouts

El proyecto usa un sistema de callouts con numeración automática por capítulo via `docs/callout-numbers.lua`. Los contadores se reinician en cada capítulo.

### Tipos y contadores

| Tipo | Color | Contador | Uso |
|---|---|---|---|
| `.callout-tip` | Verde | Axioma N | Axiomas |
| `.callout-important` | Naranja | Definición N | Definiciones |
| `.callout-note` | Azul | Teorema N | Teoremas, proposiciones, lemas, corolarios, ejemplos |
| `.callout-note` | Azul | Método N | Métodos de demostración (título comienza con `Método`) |
| `.callout-caution` | Gris | — | Demostraciones (incluye QED al final) |

### Sintaxis básica

```markdown
::: {.callout-tip title="Axioma — Completitud"}
Todo conjunto no vacío acotado superiormente tiene supremo.
:::

::: {.callout-important title="Definición — Continuidad"}
Sea $f:(a,b)\to\mathbb{R}$ y $x_0\in(a,b)$. Se dice que $f$ es continua en $x_0$ si $\lim_{x\to x_0} f(x) = f(x_0)$.
:::

::: {.callout-note title="Teorema — Valor Medio"}
Sea $f$ continua en $[a,b]$ y derivable en $(a,b)$. Existe $c \in (a,b)$ tal que $f'(c) = \frac{f(b)-f(a)}{b-a}$.
:::

::: {.callout-caution title="Demostración" collapse="true"}
Aplicar el Teorema de Rolle a $g(x) = f(x) - \frac{f(b)-f(a)}{b-a}(x-a)$...
:::
```

### Demostraciones colapsables

Las demostraciones pueden anidarse dentro del teorema correspondiente con `collapse="true"`:

```markdown
::: {.callout-note title="Teorema — Bolzano"}
Sea $f$ continua en $[a,b]$ con $f(a) < 0$ y $f(b) > 0$. Existe $c \in (a,b)$ tal que $f(c) = 0$.

::: {.callout-caution title="Demostración" collapse="true"}
Sea $c = \sup\{x \in [a,b] : f(x) < 0\}$...
:::
:::
```

### Títulos con LaTeX

El atributo `title="..."` trata el contenido como texto plano — el LaTeX no se renderiza. Para títulos con fórmulas, usar un heading `##` dentro del div:

```markdown
<!-- NO funciona: el LaTeX queda como texto plano -->
::: {.callout-important title="Proposición — Binomio en $\mathbb{C}$"}
:::

<!-- SÍ funciona: el heading pasa por el pipeline de Pandoc -->
::: {.callout-important}
## Proposición — Binomio en $\mathbb{C}$

contenido...
:::
```

Ambas sintaxis son numeradas correctamente por el Lua filter.

## CI/CD

En cada push a `master`, GitHub Actions construye el libro y despliega el HTML en GitHub Pages. El PDF queda disponible como artefacto del workflow.

## Licencia

[Creative Commons CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
