# Apuntes de ciencias matemáticas y de computación

Apuntes personales de matemáticas y ciencias de la computación, por Carlos Nexans. El proyecto usa [Next.js](https://nextjs.org/) para la web y [Pandoc](https://pandoc.org/) + XeLaTeX para el PDF.

## Estructura del proyecto

```
.
├── content/               # Contenido en MDX
│   ├── 01-logica/
│   ├── 02-analisis/
│   └── 03-complejos/
├── src/                   # Código Next.js (app, componentes, lib)
├── filters/               # Lua filters y headers para Pandoc/LaTeX
├── scripts/               # Scripts auxiliares (MDX→Pandoc, generación de imágenes)
├── public/                # Assets estáticos (imágenes, CNAME)
└── Makefile
```

## Requisitos previos

- Node.js ≥ 20 y npm
- Para PDF: `pandoc`, `xelatex` (texlive), `librsvg2-bin`

## Comandos disponibles

| Comando        | Descripción                                        |
| -------------- | -------------------------------------------------- |
| `make dev`     | Servidor de desarrollo con hot reload              |
| `make build`   | Build estático del sitio (genera `out/`)            |
| `make pdf`     | Genera el PDF del libro en `release/pdf/codex.pdf`  |
| `make images`  | Regenera las imágenes SVG                          |
| `make clean`   | Elimina todos los archivos generados               |

## Agregar contenido nuevo

1. Crear un archivo `.mdx` dentro del directorio correspondiente en `content/`.
2. Agregar frontmatter con `title`.
3. Usar componentes JSX para teoremas, definiciones, etc.:

```jsx
import { Axiom, Definition, Theorem, Proof } from '@/components/callout'

<Theorem title="Bolzano">
Sea $f$ continua en $[a,b]$ con $f(a) < 0$ y $f(b) > 0$.
Existe $c \in (a,b)$ tal que $f(c) = 0$.
</Theorem>

<Proof>
Sea $c = \sup\{x \in [a,b] : f(x) < 0\}$...
</Proof>
```

## CI/CD

En cada push a `master`, GitHub Actions construye el sitio con Next.js y lo despliega en GitHub Pages. El PDF queda disponible como artefacto del workflow.

## Licencia

[Creative Commons CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
