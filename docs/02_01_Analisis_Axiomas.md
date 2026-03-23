---
title: "Construcción Axiomática"
---

Este desarrollo de los números reales es axiomático, partimos de la base de que $\mathbb{R}$ es un conjunto no vacío que cumple ciertas propiedades. Estas propiedades, desde un punto de vista algebráico, le otorgan el carácter de cuerpo ordenado completo.

## Construcción Axiomática

### Axiomas de cuerpo

#### Axiomas de suma

::: {.callout-tip title="Axioma — Conmutatividad de la suma"}
Para todo $a,b \in \mathbb{R}$: $a + b = b + a$
:::

::: {.callout-tip title="Axioma — Asociatividad de la suma"}
Para todo $a,b,c \in \mathbb{R}$: $(a + b) + c = a + (b + c)$
:::

::: {.callout-tip title="Axioma — Elemento neutro de la suma"}
Existe $0 \in \mathbb{R}$ tal que para todo $a \in \mathbb{R}$: $a + 0 = 0 + a = a$
:::

::: {.callout-tip title="Axioma — Elemento opuesto de la suma"}
Para todo $a \in \mathbb{R}$ existe $(-a) \in \mathbb{R}$ tal que: $a + (-a) = 0$
:::

#### Axiomas de producto

::: {.callout-tip title="Axioma — Conmutatividad del producto"}
Para todo $a,b \in \mathbb{R}$: $a \cdot b = b \cdot a$
:::

::: {.callout-tip title="Axioma — Asociatividad del producto"}
Para todo $a,b,c \in \mathbb{R}$: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
:::

::: {.callout-tip title="Axioma — Elemento neutro del producto"}
Existe $1 \in \mathbb{R}$ tal que para todo $a \in \mathbb{R}$: $a \cdot 1 = 1 \cdot a = a$
:::

::: {.callout-tip title="Axioma — Elemento inverso del producto"}
Para todo $a \neq 0$ existe $a^{-1} \in \mathbb{R}$ tal que: $a \cdot a^{-1} = 1$
:::

::: {.callout-tip title="Axioma — Distributividad"}
Para todo $a,b,c \in \mathbb{R}$: $a(b + c) = ab + ac$
:::

### Axiomas de orden


::: {.callout-tip title="Axioma — Reflexividad del orden"}
Para todo $a \in \mathbb{R}$: $a \leq a$
:::

::: {.callout-tip title="Axioma — Antisimetría del orden"}
Para todo $a,b \in \mathbb{R}$: $a \leq b \land b \leq a \Rightarrow a = b$
:::

::: {.callout-tip title="Axioma — Transitividad del orden"}
Para todo $a,b,c \in \mathbb{R}$: $a \leq b \land b \leq c \Rightarrow a \leq c$
:::

::: {.callout-tip title="Axioma — Compatibilidad del orden con la suma"}
Para todo $a,b,c \in \mathbb{R}$: $a \leq b \Rightarrow a + c \leq b + c$
:::

::: {.callout-tip title="Axioma — Compatibilidad del orden con el producto"}
Para todo $a,b,c \in \mathbb{R}$: $a \leq b \land c \geq 0 \Rightarrow ac \leq bc$
:::

### Axioma de completitud

::: {.callout-tip title="Axioma — Completitud"}
Todo conjunto no vacío de números reales que está acotado superiormente tiene un supremo en $\mathbb{R}$.
:::

::: {.callout-important title="Definición — Cota superior e inferior"}
Sea $A \subset \mathbb{R}$.

- $C$ es **cota superior** de $A$ si $\forall a \in A,\ a \le C$.
- $C$ es **cota inferior** de $A$ si $\forall a \in A,\ a \ge C$.

Se dice que $A$ es **acotado superiormente** (resp. inferiormente) si existe al menos una cota superior (resp. inferior).
:::

::: {.callout-important title="Definición — Supremo e ínfimo"}
Sea $A \subset \mathbb{R}$ no vacío y acotado superiormente. Se dice que $c = \sup A$ si:

1. $c$ es cota superior de $A$: $\forall a \in A,\ a \le c$.
2. $c$ es la menor cota superior: $\forall k$ cota superior de $A,\ c \le k$.

Equivalentemente, $c = \sup A$ si y sólo si:

1. $c$ es cota superior de $A$.
2. $\forall \varepsilon > 0,\ \exists a \in A$ tal que $a > c - \varepsilon$.

El **ínfimo** $\inf A$ se define simétricamente como la mayor cota inferior.
:::

::: {.callout-note title="Teorema — Relación entre ínfimo y supremo"}
Sea $A \subset \mathbb{R}$ no vacío y acotado. Entonces:

1. $\inf A \le \sup A$.
2. Si $\inf A = \sup A$, entonces $A = \{a\}$ para algún $a \in \mathbb{R}$.
:::

::: {.callout-note title="Teorema — Principio de Arquímedes"}
Para todo $a \in \mathbb{R}$, existe $n \in \mathbb{N}$ tal que $n > a$.

Consecuencia: entre dos números reales siempre existe un racional y un irracional (densidad de $\mathbb{Q}$ e irracionales en $\mathbb{R}$).
:::

::: {.callout-note title="Teorema — Caracterización del supremo por sucesiones"}
Sea $A \subset \mathbb{R}$ no vacío y acotado superiormente. Entonces $s = \sup A$ si y sólo si:

1. $s$ es cota superior de $A$.
2. Existe una sucesión $(a_n) \subset A$ tal que $a_n \to s$.
:::

## Valor Absoluto

::: {.callout-note title="Teorema — Definición de Valor Absoluto"}
El valor absoluto de un número real $a$ se define como:

$$|a| = \begin{cases} a, & a \ge 0 \\ -a, & a < 0 \end{cases}$$
:::

::: {.callout-note title="Teorema — Caracterización del Valor Absoluto"}
Para $a \in \mathbb{R}$ y $b \ge 0$,
$|a| \le b \Leftrightarrow -b \le a \le b$.
:::

::: {.callout-note title="Teorema — Multiplicatividad del Valor Absoluto"}
Para todo $a,b \in \mathbb{R}$,
$|ab| = |a| \cdot |b|$.
:::

::: {.callout-note title="Teorema — Cociente del Valor Absoluto"}
Para todo $a, b \in \mathbb{R}$ con $b \neq 0$,
$\left|\frac{a}{b}\right| = \frac{|a|}{|b|}$.
:::

::: {.callout-note title="Teorema — Cota Inferior del Valor Absoluto"}
Para todo $a \in \mathbb{R}$, $a \le |a|$.
:::

::: {.callout-note title="Teorema — Desigualdad del triángulo invertida"}
Para todo $a, b \in \mathbb{R}$,
$||a| - |b|| \le |a - b|$.
:::

::: {.callout-note title="Teorema — Desigualdad triangular"}
Para todo $a, b \in \mathbb{R}$,
$|a + b| \le |a| + |b|$.
:::

::: {.callout-note title="Teorema — Desigualdad triangular generalizada"}
Para $a_1, a_2, \dots, a_n \in \mathbb{R}$:
$$\left|\sum_{i=1}^n a_i\right| \le \sum_{i=1}^n |a_i|$$
:::

::: {.callout-note title="Teorema — Definición equivalente del valor absoluto"}
Para todo $a \in \mathbb{R}$: $\sqrt{a^2} = |a|$.
:::

