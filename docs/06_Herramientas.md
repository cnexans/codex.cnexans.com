---
title: "Herramientas del Análisis"
---

## Exponenciales y Logaritmos

::: {.callout-important title="Definición — Exponencial (definición inductiva)"}
Para $a \in \mathbb{R}$ y $n \in \mathbb{N}$:

1. $a^0 = 1$
2. $a^{n+1} = a^n \cdot a$, $n \ge 0$
3. $a^{-n} = 1 / a^n$
:::

::: {.callout-important title="Definición — Exponencial (extensión a racionales)"}
Para $a > 0$ y $m,n \in \mathbb{Z}, n \neq 0$:
$$a^{m/n} = \sqrt[n]{a^m}$$
:::

::: {.callout-note title="Teorema — Propiedades del exponente racional"}
Para $a,b > 0$ y $r,s \in \mathbb{Q}$:

1. $a^r a^s = a^{r+s}$
2. $(a^r)^s = a^{rs}$
3. $a^r / a^s = a^{r-s}$
4. $(ab)^r = a^r b^r$
5. $a^1 = a$, $a^0 = 1$
:::

::: {.callout-important title="Definición — Exponencial (exponente real)"}
Para $a > 0$ y $r \in \mathbb{R}$:
$$a^r = \sup\{a^q : q \in \mathbb{Q}, q < r\} = \inf\{a^q : q \in \mathbb{Q}, q > r\}$$
:::

::: {.callout-important title="Definición — El número e"}
$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$$
donde $2 < e < 3$
:::

::: {.callout-important title="Definición — Logaritmo natural"}
Para $y > 0$:
$$\log(y) = \sup\{x \in \mathbb{R} : e^x < y\}$$
Es la función inversa de $e^x$.
:::

::: {.callout-note title="Teorema — Propiedades del logaritmo"}
Para $a,b > 0$:

1. $\log(ab) = \log(a) + \log(b)$
2. $\log(a^b) = b \log(a)$
:::

## Desigualdades Notables

::: {.callout-note title="Teorema — Desigualdad de Bernoulli"}
Para $h > -1$ y $n \in \mathbb{N}$:
$$(1 + h)^n \ge 1 + nh$$
:::

::: {.callout-note title="Teorema — Desigualdad de Cauchy-Schwarz"}
Sean $a_1, a_2, \dots, a_n$ y $b_1, b_2, \dots, b_n$ números reales:
$$(\sum a_i b_i)^2 \le (\sum a_i^2)(\sum b_i^2)$$
:::

::: {.callout-note title="Teorema — Desigualdad de la media aritmética y geométrica (AM-GM)"}
Para $a_1, a_2, \dots, a_n > 0$:
$$\frac{a_1 + a_2 + \dots + a_n}{n} \ge \sqrt[n]{a_1 a_2 \dots a_n}$$
En particular, para dos números:
$$\frac{a + b}{2} \ge \sqrt{ab}$$
:::

::: {.callout-note title="Teorema — Desigualdad AM-GM de cuadrados"}
Para $a, b \in \mathbb{R}$:
$$\frac{a^2 + b^2}{2} \ge \sqrt{a^2 b^2} = |ab|$$
:::

::: {.callout-note title="Teorema — Variación de la desigualdad triangular"}
Para $x, y \in \mathbb{R}$:
$$|x| = |x - y + y| \le |x - y| + |y|$$
*Técnica estándar en demostraciones $\varepsilon$-$\delta$: acotar $|f(x) - L| \le |f(x) - g(x)| + |g(x) - L|$.*
:::

::: {.callout-note title="Teorema — Teorema de Taylor"}
Sea $f:I \to \mathbb{R}$ una función $n$ veces derivable en un intervalo $I$ y sea $a \in I$. Entonces para todo $x \in I$ existe $c$ entre $a$ y $x$ tal que:
$$f(x) = \sum_{k=0}^{n-1} \frac{f^{(k)}(a)}{k!}(x-a)^k + \frac{f^{(n)}(c)}{n!}(x-a)^n$$
:::

## Álgebra y Herramientas Combinatorias

::: {.callout-note title="Teorema — Diferencia de cuadrados"}
Para $a, b \in \mathbb{R}$: $a^2 - b^2 = (a-b)(a+b)$.
:::

::: {.callout-note title="Teorema — Binomio de Newton"}
Para $a, b \in \mathbb{R}$ y $m \in \mathbb{N}$:
$$(a + b)^m = \sum_{i=0}^{m} \binom{m}{i} a^{m-i} b^i$$
:::

::: {.callout-note title="Teorema — Factorización de diferencia de potencias"}
Para $a, b \in \mathbb{R}$ y $k \in \mathbb{N}$:
$$a^k - b^k = (a - b)\sum_{i=0}^{k-1} a^{k-1-i}\, b^i$$
:::

::: {.callout-note title="Teorema — Serie geométrica finita"}
Para $a \ne 1$ y $n \in \mathbb{N}$:
$$1 + a + a^2 + \cdots + a^n = \frac{a^{n+1} - 1}{a - 1}$$
:::

::: {.callout-note title="Teorema — Serie aritmética"}
$$1 + 2 + \cdots + n = \frac{n(n+1)}{2}$$
:::

::: {.callout-note title="Teorema — Tamaño del conjunto potencia"}
Para $n \in \mathbb{N}$:
$$\sum_{k=0}^{n} \binom{n}{k} = 2^n$$
:::

## Trigonometría

::: {.callout-note title="Teorema — Desigualdad trigonométrica"}
Para $x \in (0, \pi/2)$:
$$\sin x \le x \le \tan x$$
Esta propiedad es clave para probar que $\displaystyle \lim_{x \to 0} \frac{\sin x}{x} = 1$
:::

::: {.callout-note title="Teorema — Identidades pitagóricas"}
$$\sin^2 x + \cos^2 x = 1, \qquad \tan^2 x + 1 = \sec^2 x, \qquad 1 + \cot^2 x = \csc^2 x$$
:::

::: {.callout-note title="Teorema — Fórmulas de ángulo doble"}
$$\sin 2x = 2\sin x \cos x, \qquad \cos 2x = \cos^2 x - \sin^2 x$$
:::

::: {.callout-note title="Teorema — Fórmulas de suma de ángulos"}
$$\sin(x + y) = \sin x \cos y + \cos x \sin y$$
$$\cos(x + y) = \cos x \cos y - \sin x \sin y$$
:::

::: {.callout-note title="Teorema — Identidades de reducción de potencias"}
$$\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}$$
:::

