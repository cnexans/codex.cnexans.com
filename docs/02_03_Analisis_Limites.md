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

::: {.callout-caution title="Demostración" collapse="true"}
Supongamos que $\lim_{x \to x_0} f(x) = l_1$ y $\lim_{x \to x_0} f(x) = l_2$ con $l_1 \neq l_2$. Sea $\varepsilon = \frac{|l_1 - l_2|}{2} > 0$.

Existen $\delta_1, \delta_2 > 0$ tales que:
- $0 < |x - x_0| < \delta_1 \Rightarrow |f(x) - l_1| < \varepsilon$
- $0 < |x - x_0| < \delta_2 \Rightarrow |f(x) - l_2| < \varepsilon$

Para $\delta = \min(\delta_1, \delta_2)$ y cualquier $x$ con $0 < |x - x_0| < \delta$:
$$|l_1 - l_2| \leq |l_1 - f(x)| + |f(x) - l_2| < \varepsilon + \varepsilon = |l_1 - l_2|$$
Contradicción. Por tanto $l_1 = l_2$.
:::
:::

::: {.callout-note title="Teorema — Teorema del Sandwich para funciones"}
Sean $f, g, h$ funciones definidas en $(a,b)$, salvo quizás en $x_0 \in (a,b)$. Si
$$g(x) \le f(x) \le h(x)$$
y $\displaystyle\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = l$, entonces $\displaystyle\lim_{x \to x_0} f(x) = l$.
:::

::: {.callout-important title="Límite notable — $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$"}
$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

::: {.callout-caution title="Demostración" collapse="true"}
Para $x \in (0, \pi/2)$, la comparación de áreas geométricas en el círculo unitario da:
$$\sin x < x < \tan x$$

Dividiendo por $\sin x > 0$:
$$1 < \frac{x}{\sin x} < \frac{1}{\cos x} \quad \Rightarrow \quad \cos x < \frac{\sin x}{x} < 1$$

Como $\lim_{x \to 0^+} \cos x = 1$, por el Teorema del Sandwich:
$$\lim_{x \to 0^+} \frac{\sin x}{x} = 1$$

Para $x \in (-\pi/2, 0)$, se usa que $\frac{\sin x}{x} = \frac{\sin(-x)}{-x}$ (función par), obteniendo el mismo límite lateral. Por tanto $\lim_{x \to 0} \frac{\sin x}{x} = 1$.
:::
:::

::: {.callout-important title="Lema — Acotación local del límite"}
Sea $\lim_{x \to x_0} f(x) = l$.

a) Si $b > l$, entonces existe $\delta > 0$ tal que $f(x) < b$ para todo $x$ con $0 < |x - x_0| < \delta$.

b) Si $b < l$, entonces existe $\delta > 0$ tal que $f(x) > b$ para todo $x$ con $0 < |x - x_0| < \delta$.

::: {.callout-caution title="Demostración" collapse="true"}
**(a)** Sea $\varepsilon = b - l > 0$. Existe $\delta > 0$ con $|f(x) - l| < \varepsilon$ para $0 < |x - x_0| < \delta$. Entonces $f(x) < l + \varepsilon = l + (b-l) = b$.

**(b)** Sea $\varepsilon = l - b > 0$. Existe $\delta > 0$ con $|f(x) - l| < \varepsilon$ para $0 < |x - x_0| < \delta$. Entonces $f(x) > l - \varepsilon = l - (l-b) = b$.
:::
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

::: {.callout-caution title="Ejemplo — $a^x$ es continua en $\\mathbb{R}$ para $a > 0$" collapse="true"}
Sea $x_0 \in \mathbb{R}$. Queremos mostrar $\lim_{x \to x_0} a^x = a^{x_0}$.

$$|a^x - a^{x_0}| = a^{x_0} |a^{x-x_0} - 1|$$

Sea $h = x - x_0$. Basta mostrar que $\lim_{h \to 0} a^h = 1$.

- **Caso $a > 1$:** Para $h > 0$ pequeño, $a^h = e^{h \log a}$. Como $\log a > 0$, dado $\varepsilon > 0$ se elige $\delta = \frac{\log(1+\varepsilon)}{\log a}$. Para $|h| < \delta$: $|a^h - 1| < \varepsilon$.

- **Caso $0 < a < 1$:** Análogo con $\log a < 0$.

Por tanto $a^x$ es continua en todo $\mathbb{R}$.
:::

::: {.callout-caution title="Ejemplo — $\\lim_{x \\to +\\infty} a^x = 0$ para $0 < a < 1$" collapse="true"}
Como $0 < a < 1$, tenemos $\log a < 0$. Sea $\varepsilon > 0$. Tomamos $S = \frac{\log \varepsilon}{\log a} > 0$ (nótese que $\log a < 0$, así que $S > 0$ si $\varepsilon < 1$). Para $x > S$:
$$x \log a < S \log a = \log \varepsilon \quad \Rightarrow \quad a^x = e^{x \log a} < e^{\log \varepsilon} = \varepsilon$$
Por lo tanto $\lim_{x \to +\infty} a^x = 0$.
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

::: {.callout-caution title="Ejemplo — Continuidad de $f(x) = 1/x$ en $x_0 \\neq 0$" collapse="true"}
Sea $x_0 \neq 0$. Queremos encontrar $\delta$ tal que $|x - x_0| < \delta \Rightarrow |1/x - 1/x_0| < \varepsilon$.

$$\left|\frac{1}{x} - \frac{1}{x_0}\right| = \frac{|x - x_0|}{|x| \cdot |x_0|}$$

Restringimos $|x - x_0| < |x_0|/2$, lo que garantiza $|x| > |x_0|/2$. Entonces:
$$\frac{|x - x_0|}{|x| \cdot |x_0|} < \frac{|x - x_0|}{(|x_0|/2) \cdot |x_0|} = \frac{2|x - x_0|}{|x_0|^2}$$

Eligiendo $\delta = \min\!\left(\frac{|x_0|}{2},\, \frac{\varepsilon |x_0|^2}{2}\right)$, para $|x - x_0| < \delta$:
$$\left|\frac{1}{x} - \frac{1}{x_0}\right| < \frac{2\delta}{|x_0|^2} \leq \frac{2 \cdot \frac{\varepsilon |x_0|^2}{2}}{|x_0|^2} = \varepsilon$$

Por tanto $f(x) = 1/x$ es continua en todo $x_0 \neq 0$.
:::


