---
title: "Conceptos Básicos"
---

Los números complejos se construyen como una extensión de los números reales a partir de pares ordenados, dotados de operaciones de suma y producto que preservan la aritmética real y permiten extraer raíces de números negativos.

## Definición y operaciones

::: {.callout-important title="Definición — Número complejo"}
Un **número complejo** es un par ordenado $z = (x, y)$ con $x, y \in \mathbb{R}$.

El conjunto de todos los números complejos se denota $\mathbb{C} = \mathbb{R}^2$.
:::

::: {.callout-important title="Definición — Parte real e imaginaria"}
Sea $z = (x, y) \in \mathbb{C}$. Se define:

- **Parte real:** $\operatorname{Re}(z) = x$
- **Parte imaginaria:** $\operatorname{Im}(z) = y$
:::

::: {.callout-important title="Definición — Suma y producto de números complejos"}
Sean $z_1 = (x_1, y_1)$ y $z_2 = (x_2, y_2)$ números complejos. Se definen:

**Suma:**
$$(x_1, y_1) + (x_2, y_2) = (x_1 + x_2,\ y_1 + y_2)$$

**Producto:**
$$(x_1, y_1) \cdot (x_2, y_2) = (x_1 x_2 - y_1 y_2,\ x_1 y_2 + x_2 y_1)$$
:::

## Forma algebráica

Los números reales se identifican con los complejos de la forma $(x, 0)$, y se introduce la unidad imaginaria:

::: {.callout-important title="Definición — Unidad imaginaria"}
Se define $i = (0, 1)$. De la regla del producto:

$$i^2 = (0,1)\cdot(0,1) = (0\cdot 0 - 1\cdot 1,\ 0\cdot 1 + 0\cdot 1) = (-1, 0)$$

Es decir, $i^2 = -1$, o equivalentemente $i = \sqrt{-1}$.
:::

::: {.callout-note title="Proposición — Potencias de $i$"}
Las potencias de $i$ son periódicas con período 4. Para todo $k \in \mathbb{Z}$:

$$i^k = \begin{cases} 1 & \text{si } k \equiv 0 \pmod{4} \\ i & \text{si } k \equiv 1 \pmod{4} \\ -1 & \text{si } k \equiv 2 \pmod{4} \\ -i & \text{si } k \equiv 3 \pmod{4} \end{cases}$$
:::

Con estas identificaciones, todo número complejo se escribe como:

::: {.callout-note title="Proposición — Forma binómica"}
Todo $z = (x, y) \in \mathbb{C}$ se puede escribir en **forma binómica**:

$$z = x + iy$$

donde $x = \operatorname{Re}(z)$ e $y = \operatorname{Im}(z)$.
:::

::: {.callout-note title="Proposición — Fórmula binomial"}
Sean $z_1 = x_1 + iy_1$ y $z_2 = x_2 + iy_2$. El producto en forma binómica es:

$$z_1 \cdot z_2 = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + x_2 y_1)$$

lo cual se obtiene distribuyendo y usando $i^2 = -1$:

$$(x_1 + iy_1)(x_2 + iy_2) = x_1 x_2 + ix_1 y_2 + ix_2 y_1 + i^2 y_1 y_2 = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + x_2 y_1)$$
:::

## Estructura de cuerpo

$(\mathbb{C}, +, \cdot)$ forma un **cuerpo**: la suma y el producto son conmutativos, asociativos, existe elemento neutro para cada operación ($0 = (0,0)$ y $1 = (1,0)$), todo elemento tiene opuesto aditivo, y todo elemento no nulo tiene inverso multiplicativo. La distributividad se hereda de $\mathbb{R}$.

::: {.callout-note title="Proposición — Inverso multiplicativo"}
Todo $z = x + iy \neq 0$ tiene inverso multiplicativo:

$$z^{-1} = \frac{x}{x^2 + y^2} - i\frac{y}{x^2 + y^2}$$
:::

## Módulo y conjugado

::: {.callout-important title="Definición — Módulo de un número complejo"}
Sea $z = x + iy \in \mathbb{C}$. El **módulo** de $z$ es:

$$|z| = \sqrt{x^2 + y^2} \in \mathbb{R}_{\geq 0}$$

Geométricamente, $|z|$ es la distancia del punto $(x,y)$ al origen en el plano complejo.
:::

::: {.callout-note title="Teorema — Desigualdad triangular"}
Para todo $z_1, z_2 \in \mathbb{C}$:

$$|z_1 + z_2| \leq |z_1| + |z_2|$$
:::

::: {.callout-note title="Corolario — Desigualdad triangular inversa"}
Para todo $z_1, z_2 \in \mathbb{C}$:

$$|z_1 + z_2| \geq \big||z_1| - |z_2|\big|$$
:::

::: {.callout-important title="Definición — Conjugado"}
Sea $z = x + iy \in \mathbb{C}$. El **conjugado** de $z$ es:

$$\bar{z} = x - iy$$

Geométricamente, $\bar{z}$ es la reflexión de $z$ respecto al eje real en el plano complejo.
:::

::: {.callout-note title="Proposición — Propiedades del conjugado"}
Para todo $z, z_1, z_2 \in \mathbb{C}$:

1. **Involución:** $\bar{\bar{z}} = z$
2. **Módulo:** $z \cdot \bar{z} = |z|^2$, y en particular $|z| = |\bar{z}|$
3. **Aditividad:** $\overline{z_1 + z_2} = \bar{z}_1 + \bar{z}_2$
4. **Multiplicatividad:** $\overline{z_1 \cdot z_2} = \bar{z}_1 \cdot \bar{z}_2$
:::
