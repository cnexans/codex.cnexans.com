---
title: "Derivadas"
---

## Derivadas

### Definición y propiedades básicas

::: {.callout-important title="Definición — Derivada"}
Dada una función $f$ definida en $(a,b)$ y $x_0 \in (a,b)$. Se dice que $f$ es **derivable** en $x_0$ si existe el límite

$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$

En ese caso, $f'(x_0)$ es la **derivada** de $f$ en $x_0$.
:::

::: {.callout-note title="Teorema — Derivabilidad implica continuidad"}
Si $f$ es derivable en $x_0$, entonces $f$ es continua en $x_0$.

::: {.callout-caution title="Demostración" collapse="true"}
Como $f$ es derivable en $x_0$:

$$f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}$$

Como $\lim_{x \to x_0}(x - x_0) = 0$, por álgebra de límites:

$$\lim_{x \to x_0}(f(x) - f(x_0)) = \lim_{x \to x_0}\frac{f(x)-f(x_0)}{x-x_0} \cdot \lim_{x \to x_0}(x-x_0) = f'(x_0) \cdot 0 = 0$$

Luego $\lim_{x \to x_0} f(x) = f(x_0)$, es decir, $f$ es continua en $x_0$.
:::
:::

### Reglas de derivación

::: {.callout-note title="Teorema — Linealidad de la derivada"}
Si $f$ y $g$ son derivables en $x_0$ y $\lambda \in \mathbb{R}$, entonces:

1. $(f + g)'(x_0) = f'(x_0) + g'(x_0)$
2. $(\lambda f)'(x_0) = \lambda f'(x_0)$
:::

::: {.callout-note title="Teorema — Regla del producto (Leibniz)"}
Si $f$ y $g$ son derivables en $x_0$, entonces $f \cdot g$ es derivable en $x_0$ y:

$$(f \cdot g)'(x_0) = f'(x_0)\,g(x_0) + f(x_0)\,g'(x_0)$$

::: {.callout-caution title="Demostración" collapse="true"}
Por definición de derivada:

$$(f \cdot g)'(x_0) = \lim_{h \to 0} \frac{f(x_0+h)\,g(x_0+h) - f(x_0)\,g(x_0)}{h}$$

Sumamos y restamos $f(x_0)\,g(x_0+h)$ en el numerador:

$$= \lim_{h \to 0} \frac{f(x_0+h)(g(x_0+h)-g(x_0)) + g(x_0+h)(f(x_0+h)-f(x_0))}{h}$$

$$= \lim_{h \to 0} f(x_0+h) \cdot \frac{g(x_0+h)-g(x_0)}{h} + \lim_{h \to 0} g(x_0+h) \cdot \frac{f(x_0+h)-f(x_0)}{h}$$

Como $f$ es derivable, es continua, luego $f(x_0+h) \to f(x_0)$ y $g(x_0+h) \to g(x_0)$ cuando $h \to 0$:

$$(f \cdot g)'(x_0) = f(x_0)\,g'(x_0) + g(x_0)\,f'(x_0)$$
:::
:::

::: {.callout-note title="Teorema — Derivada de $1/x$"}
La función $r(x) = 1/x$ es derivable en todo $x \neq 0$ y $r'(x) = -x^{-2}$.

::: {.callout-caution title="Demostración" collapse="true"}
$$r'(x) = \lim_{h \to 0} \frac{\dfrac{1}{x+h} - \dfrac{1}{x}}{h} = \lim_{h \to 0} \frac{x - (x+h)}{h\,x(x+h)} = \lim_{h \to 0} \frac{-1}{x(x+h)} = -\frac{1}{x^2}$$
:::
:::

::: {.callout-note title="Teorema — Regla del cociente"}
Si $f$ y $g$ son derivables en $x_0$ y $g(x_0) \neq 0$, entonces $f/g$ es derivable en $x_0$ y:

$$\left(\frac{f}{g}\right)'(x_0) = \frac{f'(x_0)\,g(x_0) - f(x_0)\,g'(x_0)}{g(x_0)^2}$$

::: {.callout-caution title="Demostración" collapse="true"}
Escribimos $f/g = f \cdot (r \circ g)$ donde $r(x) = 1/x$. Aplicando la regla del producto y la regla de la cadena:

$$\left(\frac{f}{g}\right)'(x_0) = f'(x_0)\cdot\frac{1}{g(x_0)} + f(x_0)\cdot(r \circ g)'(x_0)$$

Por regla de la cadena: $(r \circ g)'(x_0) = r'(g(x_0))\cdot g'(x_0) = -g(x_0)^{-2}\cdot g'(x_0)$. Luego:

$$\left(\frac{f}{g}\right)'(x_0) = \frac{f'(x_0)}{g(x_0)} - \frac{f(x_0)\,g'(x_0)}{g(x_0)^2} = \frac{f'(x_0)\,g(x_0) - f(x_0)\,g'(x_0)}{g(x_0)^2}$$
:::
:::

### Regla de la cadena

::: {.callout-note title="Teorema — Regla de la cadena"}
Sean $g$ derivable en $x_0$ y $f$ derivable en $g(x_0)$. Entonces $f \circ g$ es derivable en $x_0$ y:

$$(f \circ g)'(x_0) = f'(g(x_0))\cdot g'(x_0)$$

::: {.callout-caution title="Demostración" collapse="true"}
Defina la función auxiliar:

$$\ell(k) = \begin{cases} \dfrac{f(g(x_0)+k) - f(g(x_0))}{k} - f'(g(x_0)) & \text{si } k \neq 0 \\ 0 & \text{si } k = 0 \end{cases}$$

Como $f$ es derivable en $g(x_0)$, se tiene $\lim_{k\to 0}\ell(k) = 0$, luego $\ell$ es continua en $k=0$.

De la definición de $\ell$, para todo $k$ (incluyendo $k=0$):

$$f(g(x_0)+k) - f(g(x_0)) = \ell(k)\cdot k + f'(g(x_0))\cdot k \qquad (*)$$

Sea $K = g(x_0+h) - g(x_0)$. Sustituyendo $(*)$ con $k = K$:

$$\frac{(f\circ g)(x_0+h) - (f\circ g)(x_0)}{h} = \ell(K)\cdot\frac{g(x_0+h)-g(x_0)}{h} + f'(g(x_0))\cdot\frac{g(x_0+h)-g(x_0)}{h}$$

Tomando límite cuando $h \to 0$: como $g$ es continua en $x_0$, $K \to 0$, luego $\ell(K) \to 0$:

$$(f\circ g)'(x_0) = 0\cdot g'(x_0) + f'(g(x_0))\cdot g'(x_0) = f'(g(x_0))\cdot g'(x_0)$$
:::
:::

### Función inversa

::: {.callout-note title="Teorema — Derivada de la función inversa"}
Si $f$ es estrictamente monótona en $[a,b]$, derivable en $c \in (a,b)$ y $f'(c) \neq 0$, entonces $f^{-1}$ es derivable en $f(c)$ y:

$$(f^{-1})'(f(c)) = \frac{1}{f'(c)}$$

::: {.callout-caution title="Demostración" collapse="true"}
Sea $K = f^{-1}(f(c)+\Delta) - c$, de modo que $\Delta = f(c+K)-f(c)$.

Cuando $\Delta \to 0$, como $f$ es continua y estrictamente monótona, se tiene $K \to 0$. Entonces:

$$\lim_{\Delta \to 0} \frac{f^{-1}(f(c)+\Delta) - f^{-1}(f(c))}{\Delta} = \lim_{K \to 0} \frac{K}{f(c+K)-f(c)} = \frac{1}{f'(c)}$$
:::
:::

## Teoremas del Cálculo Diferencial

### Extremos locales

::: {.callout-note title="Teorema — Teorema de Fermat"}
Si $f:(a,b) \to \mathbb{R}$, $x_0 \in (a,b)$ es un máximo o mínimo local de $f$, y $f$ es derivable en $x_0$, entonces $f'(x_0) = 0$.

::: {.callout-caution title="Demostración" collapse="true"}
Sin pérdida de generalidad, suponga que $x_0$ es mínimo local de $f$.

**Derivada lateral derecha.** Para $x > x_0$: $x - x_0 > 0$ y $f(x) - f(x_0) \geq 0$, luego:
$$\frac{f(x)-f(x_0)}{x-x_0} \geq 0 \implies f'(x_0) = \lim_{x \to x_0^+}\frac{f(x)-f(x_0)}{x-x_0} \geq 0$$

**Derivada lateral izquierda.** Para $x < x_0$: $x - x_0 < 0$ y $f(x) - f(x_0) \geq 0$, luego:
$$\frac{f(x)-f(x_0)}{x-x_0} \leq 0 \implies f'(x_0) = \lim_{x \to x_0^-}\frac{f(x)-f(x_0)}{x-x_0} \leq 0$$

Como $f$ es derivable, ambas derivadas laterales son iguales, y se tiene $0 \leq f'(x_0) \leq 0$, luego $f'(x_0) = 0$.
:::
:::

### Teoremas de valor medio

::: {.callout-note title="Teorema — Teorema de Rolle"}
Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f(a) = f(b)$, entonces existe $c \in (a,b)$ tal que $f'(c) = 0$.

::: {.callout-caution title="Demostración" collapse="true"}
Como $f$ es continua en $[a,b]$, por el Teorema de Weierstrass alcanza su máximo en $x_1$ y su mínimo en $x_2$.

**Caso 1:** Alguno de $x_1$, $x_2$ está en el interior $(a,b)$. Entonces por el Teorema de Fermat, $f'(x_1) = 0$ o $f'(x_2) = 0$.

**Caso 2:** $x_1$ y $x_2$ están ambos en los extremos. Como $f(a) = f(b)$, el máximo y mínimo son iguales, luego $f$ es constante y $f' = 0$.
:::
:::

::: {.callout-note title="Teorema — Teorema del Valor Medio (Lagrange)"}
Sea $f:[a,b] \to \mathbb{R}$ continua en $[a,b]$ y derivable en $(a,b)$. Entonces existe $c \in (a,b)$ tal que:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

::: {.callout-caution title="Demostración" collapse="true"}
Considere la función auxiliar:
$$g(x) = f(x) - \frac{f(b) - f(a)}{b-a}(x-a) - f(a)$$

Se verifica que $g(a) = 0$ y $g(b) = 0$. Por el Teorema de Rolle, existe $c \in (a,b)$ tal que $g'(c) = 0$:
$$g'(x) = f'(x) - \frac{f(b) - f(a)}{b-a} \implies f'(c) = \frac{f(b) - f(a)}{b - a}$$
:::
:::

::: {.callout-note title="Teorema — Teorema de Cauchy (valor medio generalizado)"}
Si $f$ y $g$ son continuas en $[a,b]$ y derivables en $(a,b)$, entonces existe $c \in (a,b)$ tal que:

$$(f(b) - f(a))\,g'(c) = (g(b) - g(a))\,f'(c)$$

Si además $g'(x) \neq 0$ para todo $x \in (a,b)$, entonces $g(b) \neq g(a)$ y:

$$\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}$$

::: {.callout-caution title="Demostración" collapse="true"}
Defina la función auxiliar:

$$h(x) = (f(b)-f(a))(g(x)-g(a)) - (g(b)-g(a))(f(x)-f(a))$$

Se verifica que $h(a) = 0$ y $h(b) = 0$. Por el Teorema de Rolle, existe $c \in (a,b)$ tal que $h'(c) = 0$:

$$h'(c) = (f(b)-f(a))\,g'(c) - (g(b)-g(a))\,f'(c) = 0$$
:::
:::

### Consecuencias del teorema del valor medio

::: {.callout-note title="Teorema — Derivada nula implica función constante"}
Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f'(x) = 0$ para todo $x \in (a,b)$, entonces $f$ es constante en $[a,b]$.

::: {.callout-caution title="Demostración" collapse="true"}
Sea $x'' \in (a,b]$ arbitrario. Aplique el Teorema del Valor Medio a $f$ en $[a, x'']$: existe $c \in (a, x'')$ tal que:

$$f(x'') - f(a) = f'(c)(x'' - a) = 0$$

Luego $f(x'') = f(a)$ para todo $x'' \in (a,b]$.
:::
:::

::: {.callout-note title="Corolario — Funciones con igual derivada difieren en una constante"}
Si $f$ y $g$ son continuas en $[a,b]$, derivables en $(a,b)$ y $f'(x) = g'(x)$ para todo $x \in (a,b)$, entonces existe $K \in \mathbb{R}$ tal que $f(x) = g(x) + K$ para todo $x \in [a,b]$.

::: {.callout-caution title="Demostración" collapse="true"}
Sea $h(x) = f(x) - g(x)$. Entonces $h'(x) = 0$ en $(a,b)$. Por el teorema anterior, $h$ es constante: $h(x) = K$.
:::
:::

::: {.callout-note title="Proposición — Derivada y monotonía"}
Sea $f$ continua en $[a,b]$ y derivable en $(a,b)$:

1. Si $f'(x) > 0$ para todo $x \in (a,b)$, entonces $f$ es estrictamente creciente en $[a,b]$.
2. Si $f'(x) < 0$ para todo $x \in (a,b)$, entonces $f$ es estrictamente decreciente en $[a,b]$.
:::

### Regla de L'Hôpital

::: {.callout-note title="Teorema — Regla de L'Hôpital (caso 0/0)"}
Sean $f$ y $g$ definidas y derivables en $(a,b)$, $x_0 \in (a,b)$, con $f(x_0) = g(x_0) = 0$ y $g'(x) \neq 0$ para $x \neq x_0$.

Si existe $\displaystyle\lim_{x \to x_0} \frac{f'(x)}{g'(x)} = \ell$, entonces:

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \ell$$

::: {.callout-caution title="Demostración" collapse="true"}
Dado $\varepsilon > 0$, existe $\delta > 0$ tal que $0 < |x - x_0| < \delta \Rightarrow \left|\dfrac{f'(x)}{g'(x)} - \ell\right| < \varepsilon$.

Para $x$ con $0 < |x - x_0| < \delta$, como $f(x_0) = g(x_0) = 0$, por el Teorema de Cauchy existe $c$ entre $x$ y $x_0$ tal que:

$$\frac{f(x)}{g(x)} = \frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(c)}{g'(c)}$$

Como $c \to x_0$ cuando $x \to x_0$:

$$\left|\frac{f(x)}{g(x)} - \ell\right| = \left|\frac{f'(c)}{g'(c)} - \ell\right| < \varepsilon$$
:::
:::

::: {.callout-note title="Teorema — Regla de L'Hôpital (caso ∞/∞)"}
Sean $f$ y $g$ derivables en $(a,b) \setminus \{x_0\}$ con $\lim_{x \to x_0} f(x) = \lim_{x \to x_0} g(x) = \infty$ y $g'(x) \neq 0$.

Si existe $\displaystyle\lim_{x \to x_0} \frac{f'(x)}{g'(x)} = \ell$, entonces $\displaystyle\lim_{x \to x_0} \frac{f(x)}{g(x)} = \ell$.

::: {.callout-caution title="Demostración" collapse="true"}
Dado $\varepsilon > 0$, existe $\delta_1 > 0$ tal que $0 < |x - x_0| < \delta_1 \Rightarrow \left|\dfrac{f'(x)}{g'(x)} - \ell\right| < \dfrac{\varepsilon}{4}$.

Fije $x_1 = x_0 + \delta_1$. Para $x$ con $0 < |x - x_0| < \delta_1$, por el Teorema de Cauchy existe $c$ entre $x$ y $x_1$ tal que:

$$\frac{f(x) - f(x_1)}{g(x) - g(x_1)} = \frac{f'(c)}{g'(c)}$$

Por la desigualdad triangular:

$$\left|\frac{f(x)}{g(x)} - \ell\right| \leq \left|\frac{g(x)-g(x_1)}{g(x)}\right|\cdot\left|\frac{f'(c)}{g'(c)} - \ell\right| + \left|\frac{f(x_1) - g(x_1)\ell}{g(x)}\right|$$

Como $g(x) \to \infty$, existen $\delta_2$, $\delta_3$ tales que ambos sumandos son $< \varepsilon/2$ para $|x-x_0| < \min(\delta_2, \delta_3)$. Tomando $\delta = \min(\delta_1,\delta_2,\delta_3)$ concluimos $\left|\dfrac{f(x)}{g(x)} - \ell\right| < \varepsilon$.
:::
:::

