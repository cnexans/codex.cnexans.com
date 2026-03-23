---
title: "Límites y Continuidad"
---

## Límites y Continuidad

### Límites de funciones reales

::: {.callout-important title="Definición — Límite de una función"}
Sea $f:(a,b)\to\mathbb{R}$, se dice que $\displaystyle \lim_{x \to a} f(x) = l$ si
$\forall \varepsilon > 0, \exists \delta > 0$ tal que
$0 < |x - a| < \delta \Rightarrow |f(x) - l| < \varepsilon$.
:::

::: {.callout-note title="Teorema — Unicidad del límite funcional"}
Si una función tiene límite en un punto, este es único.
:::

::: {.callout-note title="Teorema — Teorema del Sandwich para funciones"}
Sean $f, g, h$ funciones definidas en $(a,b)$, salvo quizás en $x_0 \in (a,b)$. Si
$$g(x) \le f(x) \le h(x)$$
y $\displaystyle\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = l$, entonces $\displaystyle\lim_{x \to x_0} f(x) = l$.
:::

::: {.callout-note title="Teorema — Lema de orden para límites funcionales"}
Sea $\displaystyle\lim_{x \to x_0} f(x) = l$.

1. Si $b < l$, entonces $\exists \delta > 0$ tal que $0 < |x - x_0| < \delta \Rightarrow f(x) > b$.
2. Si $b > l$, entonces $\exists \delta > 0$ tal que $0 < |x - x_0| < \delta \Rightarrow f(x) < b$.
:::

::: {.callout-note title="Teorema — Caracterización del límite funcional por sucesiones"}
Sea $f$ definida en $(a,b)$, salvo quizás en $x_0$. Son equivalentes:

1. $\displaystyle\lim_{x \to x_0} f(x) = l$.
2. Para toda sucesión $(x_n)$ con $x_n \to x_0$ y $x_n \ne x_0$, se tiene $f(x_n) \to l$.

*Útil para demostrar que un límite no existe, exhibiendo dos sucesiones $(x_n), (y_n) \to x_0$ tales que $f(x_n)$ y $f(y_n)$ convergen a valores distintos.*
:::

::: {.callout-note title="Teorema — Álgebra de límites funcionales"}
Sean $f, g$ funciones tales que $\lim_{x \to a} f(x) = l_1$ y $\lim_{x \to a} g(x) = l_2$. Entonces:

1. $\lim_{x \to a} (f(x) + g(x)) = l_1 + l_2$
2. $\lim_{x \to a} (f(x) g(x)) = l_1 l_2$
3. Si $l_2 \ne 0$, entonces $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{l_1}{l_2}$
4. $\lim_{x \to a} (f(x))^n = l_1^n$, para $n \in \mathbb{N}$
:::

::: {.callout-note title="Teorema — Composición de funciones para límites"}
Sean $g:(a,b)\to\mathbb{R}$ y $f:(c,d)\to\mathbb{R}$. Supongamos $\lim_{x \to x_0} g(x) = y_0$, $g(x) \ne y_0$ para $x \ne x_0$, y $\lim_{y \to y_0} f(y) = l$. Entonces:
$$\lim_{x \to x_0} (f \circ g)(x) = l$$
*Permite calcular límites complicados mediante cambio de variable.*
:::

### Límites laterales

::: {.callout-important title="Definición — Límite lateral por la derecha"}
$$\lim_{x \to x_0^+} f(x) = l \iff \forall \varepsilon > 0,\ \exists \delta > 0 : 0 < x - x_0 < \delta \Rightarrow |f(x) - l| < \varepsilon$$
:::

::: {.callout-important title="Definición — Límite lateral por la izquierda"}
$$\lim_{x \to x_0^-} f(x) = l \iff \forall \varepsilon > 0,\ \exists \delta > 0 : 0 < x_0 - x < \delta \Rightarrow |f(x) - l| < \varepsilon$$
:::

::: {.callout-note title="Teorema — Equivalencia con límites laterales"}
$\displaystyle\lim_{x \to x_0} f(x) = l$ si y sólo si $\displaystyle\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = l$.
:::

### Límites infinitos y al infinito

::: {.callout-important title="Definición — Límite infinito de una función"}
$$\lim_{x \to x_0} f(x) = +\infty \iff \forall M > 0,\ \exists \delta > 0 : 0 < |x - x_0| < \delta \Rightarrow f(x) > M$$

$$\lim_{x \to x_0} f(x) = -\infty \iff \forall M > 0,\ \exists \delta > 0 : 0 < |x - x_0| < \delta \Rightarrow f(x) < -M$$

Estas definiciones se extienden a límites laterales:

$$\lim_{x \to x_0^+} f(x) = +\infty \iff \forall M > 0,\ \exists \delta > 0 : 0 < x - x_0 < \delta \Rightarrow f(x) > M$$
:::

::: {.callout-important title="Definición — Límite al infinito"}
$$\lim_{x \to +\infty} f(x) = l \iff \forall \varepsilon > 0,\ \exists K > 0 : x > K \Rightarrow |f(x) - l| < \varepsilon$$

$$\lim_{x \to +\infty} f(x) = +\infty \iff \forall M > 0,\ \exists K > 0 : x > K \Rightarrow f(x) > M$$
:::

### Continuidad

::: {.callout-important title="Definición — Continuidad"}
Sea $f:(a,b)\to\mathbb{R}$ y $x_0\in(a,b)$, se dice que $f$ es continua en $x_0$ si $\lim_{x \to x_0} f(x) = f(x_0)$.
:::

::: {.callout-important title="Definición — Clasificación de discontinuidades"}
Sea $f$ una función con una discontinuidad en $x_0$:

- **Evitable:** $\lim_{x\to x_0} f(x)$ existe pero $f(x_0)$ no está definida o es distinta del límite. Se puede "reparar" redefiniendo $f(x_0)$.
- **Primera especie (salto):** los dos límites laterales existen pero son distintos.
- **Segunda especie:** al menos uno de los límites laterales no existe (e.g., $\sin(1/x)$ en $x=0$).
:::

::: {.callout-note title="Teorema — Acotación local de función continua"}
Sea $f:(a,b)\to\mathbb{R}$ continua en $x_0 \in (a,b)$ y sean $\alpha < f(x_0) < \beta$. Entonces existe $\delta > 0$ tal que:
$$|x - x_0| < \delta \Rightarrow \alpha < f(x) < \beta$$
:::

::: {.callout-note title="Teorema — Composición de funciones continuas"}
Si $g$ es continua en $x_0$ y $f$ es continua en $g(x_0)$, entonces $f \circ g$ es continua en $x_0$.
:::

::: {.callout-note title="Teorema — Álgebra de funciones continuas"}
Sean $f$ y $g$ continuas en $x_0$. Entonces son continuas en $x_0$:

1. $f + g$
2. $f \cdot g$
3. $f/g$, siempre que $g(x_0) \ne 0$

Además, los polinomios $P(x)$, las funciones $a^x$, $\log x$ (para $x>0$), $\sin x$, $\cos x$ son continuas en todo su dominio.
:::

::: {.callout-note title="Teorema — Ley de conservación de signo"}
Sea $f:(a,b)\to\mathbb{R}$ continua en $x_0 \in (a,b)$ y $f(x_0) \ne 0$. Entonces existe $\delta > 0$ tal que:
$$|x - x_0| < \delta \Rightarrow f(x) \ne 0$$
:::

::: {.callout-note title="Teorema — Teorema de Bolzano"}
Sea $f$ continua en $[a,b]$ con $f(a) < 0$ y $f(b) > 0$. Entonces existe $c \in (a,b)$ tal que $f(c) = 0$.

*Demostración:* $c = \sup\{x \in [a,b] : f(x) < 0\}$. Si $f(c) < 0$ o $f(c) > 0$, la continuidad lleva a contradicción con la definición de supremo.
:::

::: {.callout-note title="Teorema — Teorema del Valor Intermedio"}
Sea $f:[a,b] \to \mathbb{R}$ una función continua. Si $f(a) \neq f(b)$ y $k$ es un número entre $f(a)$ y $f(b)$, entonces existe $c \in (a,b)$ tal que $f(c) = k$.

::: {.callout-caution title="Demostración" collapse="true"}
Sin pérdida de generalidad, supongamos que $f(a) < k < f(b)$. Definimos el conjunto:

$$A = \{x \in [a,b] : f(x) \leq k\}$$

1) $A$ es no vacío pues $a \in A$ ya que $f(a) < k$.

2) $A$ está acotado superiormente por $b$ pues $f(b) > k$.

3) Por el axioma de completitud, existe $c = \sup A$.

4) Veamos que $f(c) = k$:

   Supongamos que $f(c) < k$. Por la continuidad de $f$ en $c$, existe $\delta > 0$ tal que:
   $$|x-c| < \delta \Rightarrow |f(x) - f(c)| < k - f(c)$$

   En particular, para $x = c + \frac{\delta}{2}$:
   $$f(x) < f(c) + (k - f(c)) = k$$

   Por lo tanto $x \in A$, pero $x > c$, contradiciendo que $c$ es el supremo de $A$.

   De manera similar, si $f(c) > k$, por continuidad existiría un punto antes de $c$ donde $f$ tomaría valores mayores que $k$, contradiciendo la definición de $A$.

Por lo tanto, necesariamente $f(c) = k$.
:::
:::

::: {.callout-note title="Teorema — Teorema de Weierstrass"}
Toda función continua en un intervalo cerrado y acotado $[a,b]$ alcanza su máximo y su mínimo en ese intervalo.
:::

::: {.callout-note title="Teorema — Continuidad de la función inversa"}
Si $f:[a,b]\to[f(a),f(b)]$ es continua, biyectiva y monótona, entonces $f^{-1}:[f(a),f(b)]\to[a,b]$ es continua.
:::

::: {.callout-important title="Definición — Continuidad uniforme"}
Sea $f:A\to\mathbb{R}$, $A\subset\mathbb{R}$. Se dice que $f$ es **uniformemente continua** en $A$ si:
$$\forall \varepsilon > 0,\ \exists \delta > 0 : |x - x'| < \delta \Rightarrow |f(x) - f(x')| < \varepsilon$$

A diferencia de la continuidad ordinaria, aquí $\delta$ depende sólo de $\varepsilon$, no del punto $x$.
:::

::: {.callout-note title="Teorema — Teorema de Heine-Cantor"}
Si $f$ es continua en $[a,b]$, entonces $f$ es uniformemente continua en $[a,b]$.
:::

::: {.callout-note title="Teorema — Teorema del Valor Medio"}
Sea $f:[a,b] \to \mathbb{R}$ una función continua en $[a,b]$ y derivable en $(a,b)$. Entonces existe $c \in (a,b)$ tal que:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

::: {.callout-caution title="Demostración" collapse="true"}
Considere la función auxiliar

$$g(x) = f(x) - \frac{f(b) - f(a)}{b-a}(x-a) - f(a)$$

Esta función surge de la distancia entre $f(x)$ y la recta que pasa por $(a, f(a))$ y $(b, f(b))$.

Se verifica que $g(a) = 0$ y $g(b) = 0$. Además, $g$ es continua en $[a,b]$ y derivable en $(a,b)$ por ser combinación de $f$ y una función lineal.

Por el Teorema de Rolle, existe $c \in (a,b)$ tal que $g'(c) = 0$.

Calculando $g'$:
$$g'(x) = f'(x) - \frac{f(b) - f(a)}{b-a}$$

De $g'(c) = 0$ se obtiene:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$
:::
:::

::: {.callout-note title="Teorema — Teorema Fundamental del Cálculo"}
Sea $f:[a,b] \to \mathbb{R}$ una función integrable en $[a,b]$. Sea $F(x) = \displaystyle\int_a^x f(t)\,dt$ la función integral.

1. $F$ es uniformemente continua en $[a,b]$.
2. Si $f$ es continua en $x_0 \in [a,b]$, entonces $F$ es derivable en $x_0$ y $F'(x_0) = f(x_0)$.
3. Si $G$ es una primitiva de $f$ en $[a,b]$, entonces:
$$\int_a^b f(x)\,dx = G(b) - G(a)$$

::: {.callout-caution title="Demostración" collapse="true"}
**Parte 1: continuidad uniforme de $F$.**

Sean $x, y \in [a,b]$. Como $f$ es integrable, es acotada: $\exists M > 0$ tal que $|f(t)| \leq M$ $\forall t \in [a,b]$.

$$|F(x) - F(y)| = \left|\int_a^x f(t)\,dt - \int_a^y f(t)\,dt\right| = \left|\int_y^x f(t)\,dt\right| \leq \int_y^x |f(t)|\,dt \leq M|x-y|$$

Dado $\varepsilon > 0$, tome $\delta = \varepsilon/M$. Si $|x-y| < \delta$, entonces $|F(x)-F(y)| \leq M|x-y| < M\delta = \varepsilon$.

**Parte 2: $F'(x_0) = f(x_0)$ cuando $f$ es continua en $x_0$.**

Sea $f$ continua en $x_0$: $\forall \varepsilon > 0$, $\exists \delta > 0$ tal que $|t - x_0| < \delta \Rightarrow |f(t) - f(x_0)| < \varepsilon$.

Para $h > 0$ con $h < \delta$:

$$\left|\frac{F(x_0+h) - F(x_0)}{h} - f(x_0)\right| = \frac{1}{h}\left|\int_{x_0}^{x_0+h}(f(t) - f(x_0))\,dt\right| \leq \frac{1}{h}\int_{x_0}^{x_0+h}|f(t)-f(x_0)|\,dt < \varepsilon$$

Para $h < 0$ la misma estimación aplica integrando de $x_0+h$ a $x_0$.

**Parte 3:** Si $G$ es primitiva de $f$, entonces $G' = F'$ en $(a,b)$, luego $G - F$ es constante. Evaluando en $x = a$ da $G(b) - G(a) = F(b) - F(a) = \int_a^b f(t)\,dt$.
:::
:::

