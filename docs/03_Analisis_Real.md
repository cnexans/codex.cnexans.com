# Análisis real

Los números reales forman una estructura algebraica con operaciones de suma y producto, y una relación de orden que cumple ciertas propiedades fundamentales. A continuación se presentan los axiomas y teoremas más importantes que caracterizan a $\mathbb{R}$.

## Construcción Axiomática

### Axiomas de suma

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

### Axiomas de producto

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
:::

::: {.callout-note title="Teorema — Teorema Fundamental del Cálculo"}
Sea $f:[a,b] \to \mathbb{R}$ una función continua. Entonces:

1. La función $F(x) = \int_a^x f(t) \, dt$ es derivable en $[a,b]$ y $F'(x) = f(x)$ para todo $x \in [a,b]$.
2. Si $G$ es una primitiva de $f$ en $[a,b]$, entonces:
$$\int_a^b f(x) \, dx = G(b) - G(a)$$
:::

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
