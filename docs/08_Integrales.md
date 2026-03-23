---
title: "Integrales de Darboux"
---

## Integrales de Darboux

### Particiones y sumas de Darboux

::: {.callout-important title="Definición — Partición de un intervalo"}
Sea $[a,b] \subset \mathbb{R}$ con $a < b$. Una **partición** de $[a,b]$ es un conjunto $\Pi = \{x_0, x_1, \ldots, x_n\} \subset [a,b]$ tal que $x_0 = a < x_1 < \cdots < x_n = b$.

Se denota $I_k = [x_{k-1}, x_k]$ para $k = 1, \ldots, n$.

Se dice que $\Pi'$ es **más fina** que $\Pi$ si $\Pi \subseteq \Pi'$.
:::

::: {.callout-important title="Definición — Sumas de Darboux"}
Sea $f:[a,b] \to \mathbb{R}$ acotada y $\Pi = \{x_0, \ldots, x_n\}$ una partición de $[a,b]$. Se definen:

$$m_k = \inf\{f(x) : x \in [x_{k-1}, x_k]\}, \qquad M_k = \sup\{f(x) : x \in [x_{k-1}, x_k]\}$$

La **suma inferior** y la **suma superior** de Darboux son:

$$s_\Pi(f) = \sum_{k=1}^{n} m_k\,(x_k - x_{k-1}), \qquad S_\Pi(f) = \sum_{k=1}^{n} M_k\,(x_k - x_{k-1})$$

Se tiene $s_\Pi(f) \leq S_\Pi(f)$.
:::

::: {.callout-note title="Proposición — Refinamiento y sumas de Darboux"}
Sea $f:[a,b] \to \mathbb{R}$ acotada y $\Pi$, $\Pi'$ particiones con $\Pi'$ más fina que $\Pi$. Entonces:

$$s_{\Pi'}(f) \geq s_\Pi(f) \qquad \text{y} \qquad S_{\Pi'}(f) \leq S_\Pi(f)$$

Consecuencia: para cualesquiera particiones $\Pi$, $\Pi'$, se tiene $s_\Pi(f) \leq S_{\Pi'}(f)$.

::: {.callout-caution title="Demostración" collapse="true"}
**Caso de un punto adicional.** Suponga $\Pi' = \Pi \cup \{c\}$ con $c \in (x_{K-1}, x_K)$. Sea $\tilde{M} = \sup f|_{[x_{K-1},c]}$ y $\tilde{\tilde{M}} = \sup f|_{[c,x_K]}$. Como ambos son supremos de subconjuntos, $\tilde{M}, \tilde{\tilde{M}} \leq M_K$. Luego:

$$\tilde{M}(c-x_{K-1}) + \tilde{\tilde{M}}(x_K - c) \leq M_K(x_K - x_{K-1})$$

de donde $S_{\Pi'}(f) \leq S_\Pi(f)$. El caso de suma inferior es análogo.

**Caso general.** Si $\Pi'$ tiene $m$ puntos más que $\Pi$, se aplica el argumento anterior $m$ veces.

**Consecuencia.** Sea $\tilde{\Pi} = \Pi \cup \Pi'$. Entonces $s_\Pi \leq s_{\tilde{\Pi}} \leq S_{\tilde{\Pi}} \leq S_{\Pi'}$.
:::
:::

### Integral de Darboux e integrabilidad

::: {.callout-important title="Definición — Integral de Darboux e integrabilidad"}
Sea $f:[a,b] \to \mathbb{R}$ acotada con $a < b$. Se definen:

$$\underline{\int_a^b} f(x)\,dx = \sup_\Pi\, s_\Pi(f) \quad \text{(integral inferior)}, \qquad \overline{\int_a^b} f(x)\,dx = \inf_\Pi\, S_\Pi(f) \quad \text{(integral superior)}$$

Se tiene $\displaystyle\underline{\int_a^b} f \leq \overline{\int_a^b} f$.

Se dice que $f$ es **integrable en $[a,b]$** si $\displaystyle\underline{\int_a^b} f = \overline{\int_a^b} f$, y en ese caso se escribe $\displaystyle\int_a^b f(x)\,dx$ para el valor común.

**Convenciones:** $\displaystyle\int_c^c f = 0$ y $\displaystyle\int_b^a f = -\int_a^b f$.
:::

::: {.callout-note title="Proposición — Criterio de integrabilidad de Darboux"}
Sea $f:[a,b] \to \mathbb{R}$ acotada. Son equivalentes:

1. $f$ es integrable en $[a,b]$.
2. $\forall \varepsilon > 0$, existe una partición $\Pi$ tal que $S_\Pi(f) - s_\Pi(f) < \varepsilon$.

::: {.callout-caution title="Demostración" collapse="true"}
**(1) $\Rightarrow$ (2):** Como $f$ es integrable, por definición de supremo e ínfimo existen $\Pi$, $\Pi'$ tales que:

$$s_\Pi(f) > \int_a^b f - \frac{\varepsilon}{2}, \qquad S_{\Pi'}(f) < \int_a^b f + \frac{\varepsilon}{2}$$

Sea $\tilde{\Pi} = \Pi \cup \Pi'$. Entonces $S_{\tilde{\Pi}} - s_{\tilde{\Pi}} \leq S_{\Pi'} - s_\Pi < \varepsilon$.

**(2) $\Rightarrow$ (1):** Dado $\varepsilon > 0$, tome $\Pi$ con $S_\Pi - s_\Pi < \varepsilon$. Entonces:

$$0 \leq \overline{\int_a^b} f - \underline{\int_a^b} f \leq S_\Pi(f) - s_\Pi(f) < \varepsilon$$

Como $\varepsilon$ es arbitrario, $\overline{\int} f = \underline{\int} f$.
:::
:::

::: {.callout-note title="Proposición — Aditividad de la integral"}
Sean $a < c < b$ y $f:[a,b] \to \mathbb{R}$ acotada. Entonces $f$ es integrable en $[a,b]$ si y solo si es integrable en $[a,c]$ y en $[c,b]$, y en ese caso:

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$$
:::

### Ejemplos de integrabilidad

::: {.callout-note title="Ejemplo — La función constante es integrable"}
Sea $f(x) = c$ constante en $[a,b]$. Entonces $f$ es integrable y $\displaystyle\int_a^b f(x)\,dx = c(b-a)$.

::: {.callout-caution title="Demostración" collapse="true"}
Para cualquier partición $\Pi$, $m_k = M_k = c$, luego $s_\Pi(f) = S_\Pi(f) = c(b-a)$.
:::
:::

::: {.callout-note title="Ejemplo — La función de Dirichlet no es integrable"}
La función

$$f(x) = \begin{cases} 1 & x \in \mathbb{Q} \\ 0 & x \notin \mathbb{Q} \end{cases}$$

no es integrable en ningún $[a,b]$ con $a < b$.

::: {.callout-caution title="Demostración" collapse="true"}
En todo subintervalo hay racionales e irracionales (densidad). Luego $m_k = 0$ y $M_k = 1$ para toda partición, de donde $\underline{\int} f = 0 \neq b-a = \overline{\int} f$.
:::
:::

### Funciones integrables

::: {.callout-note title="Teorema — Función continua es integrable"}
Sea $f:[a,b] \to \mathbb{R}$ continua. Entonces $f$ es integrable en $[a,b]$.

::: {.callout-caution title="Demostración" collapse="true"}
Como $f$ es continua en $[a,b]$, por el Teorema de Heine-Cantor es uniformemente continua: $\forall \varepsilon > 0$, $\exists \delta > 0$ tal que $|x-y| < \delta \Rightarrow |f(x)-f(y)| < \dfrac{\varepsilon}{b-a}$.

Tome la partición regular $\Pi_n$ con $n > (b-a)/\delta$ puntos. En cada $I_k$, los extremos $m_k = f(c_k)$ y $M_k = f(d_k)$ satisfacen $|c_k - d_k| \leq (b-a)/n < \delta$, luego $M_k - m_k < \varepsilon/(b-a)$.

$$S_{\Pi_n}(f) - s_{\Pi_n}(f) = \sum_{k=1}^n (M_k - m_k)\frac{b-a}{n} < \frac{\varepsilon}{b-a}\cdot(b-a) = \varepsilon$$
:::
:::

::: {.callout-note title="Teorema — Función acotada con finitas discontinuidades es integrable"}
Sea $f:[a,b] \to \mathbb{R}$ acotada y continua salvo en un número finito de puntos. Entonces $f$ es integrable en $[a,b]$.

::: {.callout-caution title="Demostración" collapse="true"}
**Una discontinuidad en $c \in (a,b)$.** Sea $M > 0$ tal que $|f(x)| \leq M$. Dado $\varepsilon > 0$, elige $\delta < \varepsilon/(4M)$ con $c \pm \delta \in (a,b)$.

Como $f$ es continua en $[a,c-\delta]$ y $[c+\delta,b]$, existen particiones $\Pi_1$, $\Pi_2$ con $S_{\Pi_j} - s_{\Pi_j} < \varepsilon/3$.

La partición $\Pi = \Pi_1 \cup \{c-\delta, c+\delta\} \cup \Pi_2$ satisface:

$$S_\Pi - s_\Pi < \frac{\varepsilon}{3} + 2M \cdot 2\delta + \frac{\varepsilon}{3} < \frac{2\varepsilon}{3} + 4M\cdot\frac{\varepsilon}{4M} = \varepsilon$$

**Caso general:** inducción en el número de discontinuidades.
:::
:::

### Teorema Fundamental del Cálculo

::: {.callout-important title="Definición — Función integral"}
Sea $f:[a,b] \to \mathbb{R}$ integrable. La **función integral** de $f$ es:

$$F:[a,b] \to \mathbb{R}, \qquad F(x) = \int_a^x f(t)\,dt$$
:::

*Véase el Teorema Fundamental del Cálculo en la sección Límites y Continuidad.*

### Métodos de integración

::: {.callout-note title="Teorema — Método de sustitución"}
Sea $f:[a,b] \to \mathbb{R}$ con primitiva $F$, y $g:[\alpha,\beta] \to [a,b]$ derivable. Entonces:

$$\int_{\alpha}^{\beta} (f \circ g)(x)\,g'(x)\,dx = F(g(\beta)) - F(g(\alpha))$$

::: {.callout-caution title="Demostración" collapse="true"}
Por la regla de la cadena: $(F \circ g)'(x) = F'(g(x))\cdot g'(x) = f(g(x))\cdot g'(x)$.

Luego $F \circ g$ es primitiva de $(f\circ g)\cdot g'$, y por el TFC:

$$\int_\alpha^\beta (f\circ g)(x)\,g'(x)\,dx = (F\circ g)(\beta) - (F\circ g)(\alpha)$$
:::
:::

::: {.callout-note title="Teorema — Integración por partes"}
Sean $u, v:[a,b] \to \mathbb{R}$ derivables con $u'v$ y $uv'$ integrables. Entonces:

$$\int_a^b u(x)\,v'(x)\,dx = \Big[u(x)v(x)\Big]_a^b - \int_a^b u'(x)\,v(x)\,dx$$

::: {.callout-caution title="Demostración" collapse="true"}
Por la regla del producto: $(u\,v)' = u'v + uv'$.

Integrando en $[a,b]$ y usando el TFC:

$$u(x)v(x)\Big|_a^b = \int_a^b u'(x)v(x)\,dx + \int_a^b u(x)v'(x)\,dx$$

Despejando:

$$\int_a^b u(x)\,v'(x)\,dx = \Big[u(x)v(x)\Big]_a^b - \int_a^b u'(x)\,v(x)\,dx$$
:::
:::
