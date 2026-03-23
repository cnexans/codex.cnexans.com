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

::: {.callout-important title="Proposición — Binomio de Newton en $\\mathbb{C}$"}
Sean $z, w \in \mathbb{C}$ y $n \in \mathbb{N}$, $n \geq 2$. Entonces:

$$
(z + w)^n = \sum_{k=0}^{n} \binom{n}{k} z^{n-k} w^k
$$

donde $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$.
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

::: {.callout-important title="Proposición — Propiedades del módulo"}
Sean $z, w \in \mathbb{C}$. Entonces:

1. $|zw| = |z|\,|w|$
2. $|z + w| \leq |z| + |w|$ (**desigualdad triangular**)
3. $\bigl||z| - |w|\bigr| \leq |z - w|$
4. $|z^2| = |z|^2$
5. $\left|\displaystyle\sum_{k=1}^{n} z_k\right| \leq \displaystyle\sum_{k=1}^{n} |z_k|$
:::

::: {.callout-note title="Teorema — Desigualdad triangular"}
Para todo $z_1, z_2 \in \mathbb{C}$:

$$|z_1 + z_2| \leq |z_1| + |z_2|$$
:::

::: {.callout-caution title="Demostración" collapse="true"}
Dados $z, w \in \mathbb{C}$:

$$
|z + w|^2 = (z + w)\,\overline{(z + w)} = (z + w)(\bar{z} + \bar{w})
= z\bar{z} + z\bar{w} + w\bar{z} + w\bar{w}
$$

$$
= |z|^2 + z\bar{w} + \overline{z\bar{w}} + |w|^2
= |z|^2 + 2\,\operatorname{Re}(z\bar{w}) + |w|^2
$$

$$
\leq |z|^2 + 2|z\bar{w}| + |w|^2
= |z|^2 + 2|z|\,|w| + |w|^2
= \bigl(|z| + |w|\bigr)^2
$$

Por tanto $|z + w| \leq |z| + |w|$.
:::

::: {.callout-note title="Corolario — Desigualdad triangular inversa"}
Para todo $z_1, z_2 \in \mathbb{C}$:

$$|z_1 + z_2| \geq \big||z_1| - |z_2|\big|$$
:::

::: {.callout-caution title="Demostración" collapse="true"}
$$
|z| = |z - w + w| \leq |z - w| + |w|
\Rightarrow |z| - |w| \leq |z - w|
$$

Análogamente, $|w| - |z| \leq |z - w|$. Por lo tanto:

$$
-|z - w| \leq |z| - |w| \leq |z - w|
\Rightarrow \bigl||z| - |w|\bigr| \leq |z - w|
$$
:::

::: {.callout-important title="Definición — Conjugado"}
Sea $z = x + iy \in \mathbb{C}$. El **conjugado** de $z$ es:

$$\bar{z} = x - iy$$

Geométricamente, $\bar{z}$ es la reflexión de $z$ respecto al eje real en el plano complejo.
:::

::: {.callout-important title="Proposición — Propiedades del conjugado"}
Sean $z, w \in \mathbb{C}$.

1. $\bar{\bar{z}} = z$
2. $|\bar{z}| = |z|$
3. $\overline{z + w} = \bar{z} + \bar{w}$
4. $\overline{zw} = \bar{z}\,\bar{w}$
5. $z\bar{z} = |z|^2$
6. Si $w \neq 0$: $\quad z^{-1} = \dfrac{\bar{z}}{|z|^2}$
7. $z + \bar{z} = 2\,\operatorname{Re}(z)$ $\quad$ y $\quad$ $z - \bar{z} = 2i\,\operatorname{Im}(z)$
8. $z = \bar{z}$ si y solo si $z \in \mathbb{R}$
:::

::: {.callout-caution title="Demostración — Propiedad 5" collapse="true"}
$$
z \cdot \bar{z} = (x + iy)(x - iy)
= x^2 - ixy + ixy - i^2 y^2
= x^2 + y^2 = |z|^2
$$
:::

## Topología del plano complejo

::: {.callout-note title="Definición — Disco abierto y entorno reducido"}
Sean $r > 0$ y $z_0 \in \mathbb{C}$. El **disco abierto** de radio $r$ y centro $z_0$ es:

$$
D(z_0, r) = \{z \in \mathbb{C} : |z - z_0| < r\}
$$

También se llama **entorno** o **vecindad** de $z_0$. El **entorno reducido** es:

$$
D^*(z_0, r) = \{z \in \mathbb{C} : 0 < |z - z_0| < r\}
$$
:::

::: {.callout-note title="Definición — Puntos interior, exterior y frontera"}
Sea $S \subset \mathbb{C}$ y $z \in \mathbb{C}$.

- $z$ es **interior** a $S$ si existe $r > 0$ tal que $D(z, r) \subset S$.
- $z$ es **frontera** de $S$ si para todo $r > 0$: $D(z, r) \cap S \neq \emptyset$ y $D(z, r) \cap (\mathbb{C} \setminus S) \neq \emptyset$.
- $z$ es **exterior** a $S$ si no es ni interior ni frontera.

**Observaciones:**

1. Si $z$ es interior a $S$, entonces $z \in S$.
2. Si $z$ es exterior a $S$, entonces $z \notin S$.
3. Si $z$ es frontera de $S$, puede pertenecer o no a $S$.
:::

::: {.callout-note title="Definición — Interior, frontera, abierto y cerrado"}
Se definen los conjuntos:

$$
S^\circ = \{z \in \mathbb{C} : z \text{ es punto interior de } S\}
$$
$$
\partial S = \{z \in \mathbb{C} : z \text{ es punto frontera de } S\}
$$

Decimos que $S$ es **abierto** si $S = S^\circ$, y **cerrado** si $\partial S \subseteq S$.
:::

::: {.callout-note title="Definición — Clausura"}
La **clausura** de $S \subset \mathbb{C}$ es:

$$
\bar{S} = S \cup \partial S
$$
:::

::: {.callout-note title="Definición — Conjunto convexo"}
Decimos que $S$ es **convexo** si para todo $z, w \in S$, el segmento que los une está contenido en $S$.
:::

::: {.callout-note title="Definición — Dominio y región"}
Un **dominio** es un conjunto $S \subset \mathbb{C}$ no vacío, abierto y conexo.

Una **región** es un dominio junto con algunos, ninguno o todos sus puntos frontera.
:::

::: {.callout-note title="Definición — Conjunto acotado"}
Sea $S \subset \mathbb{C}$. Decimos que $S$ es **acotado** si existe $R > 0$ tal que $|z| \leq R$ para todo $z \in S$.
:::

::: {.callout-note title="Definición — Punto de acumulación"}
Sea $S \subset \mathbb{C}$ y $z \in \mathbb{C}$. Decimos que $z$ es **punto de acumulación** de $S$ si todo entorno reducido $D^*(z, r)$ contiene al menos un punto de $S$.
:::

::: {.callout-important title="Proposición — Caracterización de conjuntos cerrados"}
Sea $S \subset \mathbb{C}$. $S$ es cerrado si y solo si $S$ contiene todos sus puntos de acumulación.
:::
