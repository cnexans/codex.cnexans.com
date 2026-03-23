---
title: "Sucesiones"
---

## Sucesiones

::: {.callout-important title="Definición — Sucesión"}
Una sucesión $(a_n)$ es una función $a:\mathbb{N}_0 \to \mathbb{R}$.
:::

::: {.callout-important title="Definición — Límite de sucesión"}
$\displaystyle \lim_{n \to \infty} a_n = l$ si $\forall \varepsilon > 0, \exists n_0 \in \mathbb{N}$ tal que $n \ge n_0 \Rightarrow |a_n - l| < \varepsilon$.
:::

::: {.callout-important title="Definición — Límites infinitos de sucesión"}
Sea $(a_n)$ una sucesión.

$$\lim_{n \to \infty} a_n = +\infty \iff \forall M > 0,\ \exists n_0 \in \mathbb{N} : n \ge n_0 \Rightarrow a_n > M$$

$$\lim_{n \to \infty} a_n = -\infty \iff \forall M > 0,\ \exists n_0 \in \mathbb{N} : n \ge n_0 \Rightarrow a_n < -M$$
:::

::: {.callout-note title="Teorema — Unicidad del límite"}
Si una sucesión tiene límite, este es único.
:::

::: {.callout-important title="Definición — Sucesión acotada"}
Una sucesión $(a_n)$ es acotada si $\exists M > 0$ tal que $|a_n| < M$ para todo $n \in \mathbb{N}$.
:::

::: {.callout-note title="Teorema — Condición necesaria de convergencia"}
Si una sucesión $(a_n)$ converge, entonces es acotada.
:::

::: {.callout-note title="Teorema — Lemas de comparación para sucesiones"}
Sea $(a_n)$ una sucesión con $\lim_{n\to\infty} a_n = l$.

1. Si $l > b$, entonces $\exists n_0 \in \mathbb{N}$ tal que $n \ge n_0 \Rightarrow a_n > b$.
2. Si $l < b$, entonces $\exists n_0 \in \mathbb{N}$ tal que $n \ge n_0 \Rightarrow a_n < b$.
3. Si $a_n \le b$ para todo $n$, entonces $l \le b$.
:::

::: {.callout-note title="Teorema — Teorema del Sandwich para sucesiones"}
Si $(a_n)$, $(b_n)$, $(c_n)$ son sucesiones tales que $\displaystyle \lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = l$ y $a_n \le b_n \le c_n$, entonces $\displaystyle \lim_{n \to \infty} b_n = l$.
:::

::: {.callout-note title="Teorema — Álgebra de límites de sucesiones"}
Sean $(a_n)$, $(b_n)$ sucesiones convergentes con límites $l_1, l_2$:

1. $\lim(a_n + b_n) = l_1 + l_2$
2. $\lim(a_n b_n) = l_1 l_2$
3. $\lim(k a_n) = k l_1$
4. $\lim\left(\frac{a_n}{b_n}\right) = \frac{l_1}{l_2}$, si $l_2 \neq 0$
5. $\lim |a_n| = |l_1|$
:::

::: {.callout-note title="Teorema — Límites especiales de sucesiones"}
1. $\lim_{n\to\infty} \sqrt[n]{a_n} = 1$ si $(a_n)$ es de términos positivos con $\lim a_n = l > 0$.
2. $\lim_{n\to\infty} r^n = 0$ para todo $|r| < 1$.
:::

::: {.callout-note title="Teorema — Límites con potencias y polinomios"}
1. $\displaystyle\lim_{n \to \infty} r^n = \begin{cases} 0 & \text{si } |r| < 1 \\ +\infty & \text{si } r > 1 \\ \text{no existe} & \text{si } r = -1 \end{cases}$

2. $\displaystyle\lim_{n \to \infty} \frac{P(n)}{G(n)} = \begin{cases} \infty & \text{si } \deg P > \deg G \\ 0 & \text{si } \deg P < \deg G \\ c & \text{si } \deg P = \deg G \end{cases}$

donde $c$ es el cociente de los coeficientes principales.
:::

::: {.callout-important title="Definición — Sucesión monótona"}
Una sucesión es monótona si es creciente ($a_n \le a_{n+1}$) o decreciente ($a_n \ge a_{n+1}$).
:::

::: {.callout-note title="Teorema — Convergencia de sucesiones monótonas"}
Si una sucesión es monótona y acotada, entonces converge.
:::

::: {.callout-note title="Teorema — Comportamiento de sucesiones monótonas no acotadas"}
Si una sucesión $(a_n)$ es monótona y no acotada, entonces:

- Si es creciente: $\displaystyle\lim_{n\to\infty} a_n = +\infty$.
- Si es decreciente: $\displaystyle\lim_{n\to\infty} a_n = -\infty$.
:::

::: {.callout-note title="Teorema — Teorema de Bolzano-Weierstrass"}
Toda sucesión acotada en $\mathbb{R}$ tiene una subsucesión convergente.
:::

::: {.callout-important title="Definición — Subsucesión"}
Sea $(a_n)$ una sucesión. Una **subsucesión** de $(a_n)$ es una sucesión de la forma $(a_{n_k})_{k \in \mathbb{N}}$, donde $(n_k)$ es una sucesión estrictamente creciente de números naturales: $n_1 < n_2 < n_3 < \cdots$
:::

::: {.callout-note title="Teorema — Convergencia y subsucesiones"}
Una sucesión $(a_n)$ converge a $l$ si y sólo si toda subsucesión $(a_{n_k})$ converge a $l$.

*Este resultado permite demostrar divergencia encontrando dos subsucesiones con límites distintos.*
:::

::: {.callout-note title="Teorema — Criterio de Cauchy"}
Una sucesión $(a_n)$ es convergente si y solo si es de Cauchy, es decir:
$$\forall \varepsilon > 0, \exists N \in \mathbb{N} : \forall n,m \geq N, |a_n - a_m| < \varepsilon$$
:::

::: {.callout-note title="Teorema — Propiedades de las sucesiones de Cauchy"}
1. Toda sucesión de Cauchy es acotada.
2. Una sucesión es convergente si y sólo si es de Cauchy.
3. Si $(a_n)$ es de Cauchy y existe una subsucesión $(a_{n_k})$ tal que $\lim_{k\to\infty} a_{n_k} = a$, entonces $\lim_{n\to\infty} a_n = a$.
:::

### Encajes de intervalos

::: {.callout-important title="Definición — Encaje de intervalos"}
Una sucesión de intervalos cerrados $I_n = [a_n, b_n]$ con $a_n \le b_n$ es un **encaje de intervalos** si $I_{n+1} \subset I_n$ para todo $n$.

La **longitud** del intervalo es $\ell(I_n) = b_n - a_n$.
:::

::: {.callout-note title="Teorema — Encaje de intervalos"}
Sea $(I_n)$ un encaje de intervalos cerrados. Si $\displaystyle\lim_{n\to\infty} \ell(I_n) = 0$, entonces:
$$\bigcap_{n=1}^{\infty} I_n = \{x\}$$
es decir, la intersección contiene exactamente un punto.

*Este teorema es equivalente al axioma del supremo y es la base del Teorema de Bolzano–Weierstrass.*
:::

::: {.callout-note title="Teorema — Teorema de Heine-Borel"}
Un subconjunto de $\mathbb{R}$ es compacto si y solo si es cerrado y acotado.
:::

