---
title: "Funciones"
---

## Funciones de variable compleja

::: {.callout-important title="Definición — Función de variable compleja"}
Sea $S \subset \mathbb{C}$ un conjunto no vacío. Una **función de variable compleja** es una función $f: S \to \mathbb{C}$ que asigna a cada $z \in S$ un único valor complejo $f(z)$.
:::

::: {.callout-important title="Definición — Función real de variable compleja"}
Una **función real de variable compleja** es una función $f: S \subset \mathbb{C} \to \mathbb{R}$, es decir, cuyo recorrido está contenido en $\mathbb{R}$.
:::

::: {.callout-important title="Definición — Función compleja de variable compleja"}
Una **función compleja de variable compleja** es una función $f: S \subset \mathbb{C} \to \mathbb{C}$. Toda función de este tipo puede descomponerse en dos funciones reales $u, v: S \subset \mathbb{R}^2 \to \mathbb{R}$:

$$f(z) = f(x, y) = u(x, y) + i\,v(x, y)$$

Se dice que $u$ es la **parte real** de $f$ y $v$ la **parte imaginaria**.
:::

::: {.callout-note title="Ejemplo — Función real de variable compleja"}
El módulo $f: \mathbb{C} \to \mathbb{R}_{\geq 0}$, $f(z) = |z| = \sqrt{x^2 + y^2}$.

El recorrido es $\mathbb{R}_{\geq 0} \subset \mathbb{R}$, por lo que es una función real de variable compleja.
:::

::: {.callout-note title="Ejemplo — Función compleja de variable real"}
La curva exponencial $f: [0, 2\pi) \to \mathbb{C}$, $f(t) = \cos t + i \sin t$.

El dominio es $[0, 2\pi) \subset \mathbb{R}$, pero el recorrido es complejo.
:::

::: {.callout-note title="Ejemplo — Función compleja de variable compleja"}
Las siguientes funciones $f: S \subset \mathbb{C} \to \mathbb{C}$ son complejas de variable compleja:

**(1)** Conjugado: $f(z) = \bar{z}$

$$z = x + iy \Rightarrow u(x,y) = x,\quad v(x,y) = -y$$

**(2)** Inverso: $f: \mathbb{C} \setminus \{0\} \to \mathbb{C}$, $f(z) = z^{-1} = \dfrac{\bar{z}}{|z|^2}$

**(3)** Cuadrado: $f(z) = z^2 = (x^2 - y^2) + 2xy\,i$

**(4)** Polinómica: $f(z) = \displaystyle\sum_{k=0}^{n} a_k z^k$, con $a_0, \ldots, a_n \in \mathbb{C}$

**(5)** Racional: dados $p$, $q$ polinómicos,
$$r: \{z \in \mathbb{C} : q(z) \neq 0\} \to \mathbb{C},\quad r(z) = \frac{p(z)}{q(z)}$$
:::
