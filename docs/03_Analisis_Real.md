# Análisis en $\mathbb{R}$

Los números reales forman una estructura algebraica con operaciones de suma y producto, y una relación de orden que cumple ciertas propiedades fundamentales. A continuación se presentan los axiomas y teoremas más importantes que caracterizan a $\mathbb{R}$.

## Construcción Axiomática

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

::: {.callout-tip title="Axioma — Completitud"}
Todo conjunto no vacío de números reales que está acotado superiormente tiene un supremo en $\mathbb{R}$.
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

## Sucesiones

::: {.callout-important title="Definición — Sucesión"}
Una sucesión $(a_n)$ es una función $a:\mathbb{N}_0 \to \mathbb{R}$.
:::

::: {.callout-important title="Definición — Límite de sucesión"}
$\displaystyle \lim_{n \to \infty} a_n = l$ si $\forall \varepsilon > 0, \exists n_0 \in \mathbb{N}$ tal que $n \ge n_0 \Rightarrow |a_n - l| < \varepsilon$.
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

::: {.callout-important title="Definición — Sucesión monótona"}
Una sucesión es monótona si es creciente ($a_n \le a_{n+1}$) o decreciente ($a_n \ge a_{n+1}$).
:::

::: {.callout-note title="Teorema — Convergencia de sucesiones monótonas"}
Si una sucesión es monótona y acotada, entonces converge.
:::

::: {.callout-note title="Teorema — Teorema de Bolzano-Weierstrass"}
Toda sucesión acotada en $\mathbb{R}$ tiene una subsucesión convergente.
:::

::: {.callout-note title="Teorema — Criterio de Cauchy"}
Una sucesión $(a_n)$ es convergente si y solo si es de Cauchy, es decir:
$$\forall \varepsilon > 0, \exists N \in \mathbb{N} : \forall n,m \geq N, |a_n - a_m| < \varepsilon$$
:::

::: {.callout-note title="Teorema — Teorema de Heine-Borel"}
Un subconjunto de $\mathbb{R}$ es compacto si y solo si es cerrado y acotado.
:::

## Límites y Continuidad

::: {.callout-important title="Definición — Límite de una función"}
Sea $f:(a,b)\to\mathbb{R}$, se dice que $\displaystyle \lim_{x \to a} f(x) = l$ si
$\forall \varepsilon > 0, \exists \delta > 0$ tal que
$0 < |x - a| < \delta \Rightarrow |f(x) - l| < \varepsilon$.
:::

::: {.callout-note title="Teorema — Unicidad del límite funcional"}
Si una función tiene límite en un punto, este es único.
:::

::: {.callout-note title="Teorema — Álgebra de límites funcionales"}
Sean $f, g$ funciones tales que $\lim_{x \to a} f(x) = l_1$ y $\lim_{x \to a} g(x) = l_2$. Entonces:

1. $\lim_{x \to a} (f(x) + g(x)) = l_1 + l_2$
2. $\lim_{x \to a} (f(x) g(x)) = l_1 l_2$
3. Si $l_2 \ne 0$, entonces $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{l_1}{l_2}$
:::

::: {.callout-important title="Definición — Continuidad"}
Sea $f:(a,b)\to\mathbb{R}$ y $x_0\in(a,b)$, se dice que $f$ es continua en $x_0$ si $\lim_{x \to x_0} f(x) = f(x_0)$.
:::

::: {.callout-note title="Teorema — Composición de funciones continuas"}
Si $g$ es continua en $x_0$ y $f$ es continua en $g(x_0)$, entonces $f \circ g$ es continua en $x_0$.
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

::: {.callout-note title="Teorema — Desigualdad trigonométrica"}
Para $x \in (0, \pi/2)$:
$$\sin x \le x \le \tan x$$
Esta propiedad es clave para probar que $\displaystyle \lim_{x \to 0} \frac{\sin x}{x} = 1$
:::

::: {.callout-note title="Teorema — Teorema de Taylor"}
Sea $f:I \to \mathbb{R}$ una función $n$ veces derivable en un intervalo $I$ y sea $a \in I$. Entonces para todo $x \in I$ existe $c$ entre $a$ y $x$ tal que:
$$f(x) = \sum_{k=0}^{n-1} \frac{f^{(k)}(a)}{k!}(x-a)^k + \frac{f^{(n)}(c)}{n!}(x-a)^n$$
:::

<!-- DUPLICADO: El resumen a continuación cubre los mismos temas de la sección anterior con mayor detalle -->

## Resumen

**Números reales** $(\mathbb{R}, +, \cdot, <)$

**Axiomas de cuerpo**

**$S_1.$** Conmutatividad de la suma: $a + b = b + a$

**$S_2.$** Asociatividad de la suma: $(a + b) + c = a + (b + c)$

**$S_3.$** Existencia del elemento neutro de la suma: $\exists 0 \in \mathbb{R}$ tal que $a + 0 = 0 + a = a$

**$S_4.$** Existencia de inverso de la suma: $\forall a \in \mathbb{R}$, $\exists (-a) \in \mathbb{R}$ tal que $a + (-a) = 0$

**$P_1.$** Conmutatividad del producto: $a \cdot b = b \cdot a$

**$P_2.$** Asociatividad del producto: $a(bc) = (ab)c$

**$P_3.$** Existencia del elemento neutro del producto: $a \cdot 1 = 1 \cdot a = a$

**$P_4.$** Existencia de inverso del producto (excepto para cero): $\forall a \neq 0, \exists a^{-1}$ tal que $a \cdot a^{-1} = a^{-1} \cdot a = 1$

**$*$** Distributividad del producto respecto de la suma: $a(b + c) = ab + ac$


**Axiomas de orden**

**$O_1.$** Tricotomía: $\forall a, b \in \mathbb{R}$, $a < b \vee a = b \vee a > b$

**$O_2.$** Transitividad: $a < b, b < c \Rightarrow a < c$

**$O_3.$** Monotonía de la suma: $a < b \Rightarrow a + c < b + c$

**$O_4.$** Monotonía del producto: $a < b, c > 0 \Rightarrow ac < bc$

**Axioma de completitud** Si $A$ es un conjunto no vacío de $\mathbb{R}$, $A \subset \mathbb{R}$ y $A$ es acotado superiormente, entonces existe $c = \sup A$, el supremo de $A$. También conocido como **axioma del supremo**.

**Cota superior:** Sea $A \subset \mathbb{R}$, $C$ es una cota superior de $A$ si $\forall a \in A, a \le C$.

**Cota inferior:** $\forall a \in A, a \ge C$.

**Supremo:** $c$ es el supremo de $A$ si cumple ambas condiciones:

$c$ es una cota superior de $A$

$c$ es la menor de las cotas de $A$: $\forall a \in A, a \le k \Rightarrow k \ge c$

**Supremo (definición equivalente)**  $c$ es el supremo de $A$ si:

$c$ es una cota de $A$

$\forall \varepsilon > 0, \exists a \in A$ tal que $a > c - \varepsilon$

**El principio de Arquímedes:**  Si $a \in \mathbb{R}$, existe $n \in \mathbb{N}$ tal que $n > a$.

**Consecuencias de la completitud de $\mathbb{R}$:**

Entre dos números reales siempre se puede encontrar un racional y un irracional.

**Unicidad del supremo e ínfimo:** útil para probar que existe un solo número con una propiedad.

Potencias de base y exponente real.

**Teoremas notables**

* Si $A \subset \mathbb{R} \Rightarrow \inf A \le \sup A$
* Si $A \subset \mathbb{R}, \inf A = \sup A \Rightarrow A = \{a\}, a \in \mathbb{R}$

**Valor absoluto**  $|a| = \begin{cases} a, & a \ge 0 \\ -a, & a < 0 \end{cases}$

**Propiedades básicas del valor absoluto**

$|a| \le b \Leftrightarrow -b \le a \le b, b \ge 0$

Definición equivalente: $\sqrt{a^2} = |a|$

Multiplicidad: $|ab| = |a| \cdot |b|$, $\displaystyle \left|\frac{a}{b}\right| = \frac{|a|}{|b|}$

Módulo o tamaño: $a \le |a|$




**Límites infinitos**
Sea $(a_n)$ una sucesión.

$\displaystyle \lim_{n \to \infty} a_n = +\infty \Leftrightarrow \forall M > 0, \exists n_0 \in \mathbb{N}, n \ge n_0 \Rightarrow a_n > M$

$\displaystyle \lim_{n \to \infty} a_n = -\infty \Leftrightarrow \forall M > 0, \exists n_0 \in \mathbb{N}, n \ge n_0 \Rightarrow a_n < -M$

$\displaystyle \lim_{n \to \infty} |a_n| = +\infty$

$\displaystyle \lim_{n \to \infty} a_n = L \Leftrightarrow \forall \epsilon > 0, \exists n_0 \in \mathbb{N}, n \ge n_0 \Rightarrow |a_n - L| < \epsilon$

**Sucesión monótona:**
Una sucesión es monótona si es creciente o decreciente.

Si es creciente: $a_n \le a_{n+1}$

Si es decreciente: $a_n \ge a_{n+1}$.

Criterio de convergencia: Si $(a_n)$ es monótona y acotada, entonces $(a_n)$ converge.

Si es monótona y no es acotada, entonces: $(a_n) \to +\infty$ si es creciente, $(a_n) \to -\infty$ si es decreciente.

**Caracterización del supremo por sucesiones**
Sea $A \subset \mathbb{R}$, $A \neq \emptyset$, acotado superiormente. $s = \sup A$ si cumple:

$s$ es cota superior de $A$

$\exists$ una sucesión $(a_n) \subset A$ tal que $a_n \to s$

**Álgebra de límites infinitos**

$\displaystyle \lim_{n \to \infty} r^n =
\begin{cases}
0, & |r| < 1 \\
+\infty, & r > 1 \\
\text{no existe}, & r = -1
\end{cases}$

$\displaystyle \lim_{n \to \infty} \frac{P(n)}{G(n)} =
\begin{cases}
\infty, & \deg P > \deg G \\
0, & \deg P < \deg G \\
c, & \deg P = \deg G
\end{cases}$




**Sucesiones**

Una sucesión $(a_n)$ es una función $a:\mathbb{N}_0 \to \mathbb{R}$.

**Límite de sucesión:**
$\displaystyle \lim_{n \to \infty} a_n = l$ si $\forall \varepsilon > 0, \exists n_0 \in \mathbb{N}$ tal que $n \ge n_0 \Rightarrow |a_n - l| < \varepsilon$.

El límite, si existe, es único.

**Cota de una sucesión:**
$(a_n)$ es acotada si $\exists M > 0$ tal que $|a_n| < M$.

**Condición necesaria de convergencia:**
Si $(a_n)$ converge (tiene límite), entonces es acotada.

**Teoremas notables:**

Si $(a_n) \to l$ y $l > b \Rightarrow \exists n_0, n \ge n_0 \Rightarrow a_n > b$

Si $(a_n) \to l$ y $l < b \Rightarrow \exists n_0, n \ge n_0 \Rightarrow a_n < b$

Si $(a_n) \to l$ y $a_n \le b \Rightarrow l \le b$

**Teorema del Sandwich:**

Si $(a_n)$, $(b_n)$, $(c_n)$ son sucesiones tales que
$\displaystyle \lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = l$ y $a_n \le b_n \le c_n$,
entonces $\displaystyle \lim_{n \to \infty} b_n = l$.

**Álgebra de límites**

Sean $(a_n)$, $(b_n)$ sucesiones convergentes con límites $l_1, l_2$:

$\lim(a_n + b_n) = l_1 + l_2$

$\lim(a_n b_n) = l_1 l_2$

$\lim(k a_n) = k l_1$

$\lim\left(\frac{a_n}{b_n}\right) = \frac{l_1}{l_2}$, si $l_2 \neq 0$

$\lim |a_n| = |l_1|$

$\lim \sqrt[n]{a_n} = 1$

$\lim r^n = 0, |r| < 1$

**Encajes de intervalos**

**Definición:** $I_n = [a_n, b_n]$, $a_n \le b_n$ tal que $I_{n+1} \subset I_n$
*Se hace más chico a medida que $n$ crece.*

**Longitud del intervalo:** $l(I_n) = b_n - a_n$

**Teorema del encaje de intervalos:**
Si $\displaystyle \lim_{n \to \infty} l(I_n) = 0 \Rightarrow \bigcap_{n=1}^{\infty} I_n = \{x\}$,
$x$ existe y es único.
*Este teorema es útil para subsecuencias y equivale al axioma del supremo.*

**Definición de subsecuencia:** $(a_{n_k})$ es una subsecuencia de $(a_n)$ si $(n_k)$ es una sucesión estrictamente creciente de números naturales y $a_{n_k} = a_n, n \in K, K \subset \mathbb{N}$.

**Teorema de Bolzano–Weierstrass:**
Toda sucesión acotada tiene una subsecuencia convergente.

**Teorema de convergencia de subsucesiones:**
Toda sucesión $(a_n)$ es convergente con límite $l$ si y sólo si toda subsecuencia de $(a_n)$ es convergente con límite $l$.

**Sucesiones de Cauchy:**
Equivalente a límite por definición.
Una sucesión $(a_n)$ es de Cauchy si $\forall \varepsilon > 0, \exists n_0, m_0 \in \mathbb{N}$ tal que $|a_n - a_m| < \varepsilon$.

**Propiedades de las sucesiones de Cauchy:**


Toda sucesión de Cauchy es acotada.

Una sucesión es convergente si y sólo si es de Cauchy.

Si $(a_n)$ es de Cauchy y $\lim_{n \to \infty} a_{n_k} = a$, entonces $(a_n)$ converge con $\lim a_n = a$.
En esencia, permite reescribir una sucesión de Cauchy para hallar su límite.
*Norega p.129*

**Teorema de Bolzano–Weierstrass**

Toda sucesión acotada tiene una subsecuencia convergente.
Esta es una consecuencia del Teorema de encaje de intervalos.

**Convergencia de subsucesiones**

Una sucesión $(a_n)$ es convergente si y sólo si toda subsucesión $(a_{n_k})$ es convergente al mismo límite.

*Este teorema permite demostrar que una sucesión no es convergente, encontrando dos subsucesiones que no converjan o converjan a distinto límite.*


**Exponencial – definición inductiva**


$a^0 = 1$

$a^{n+1} = a^n \cdot a$, $n \ge 0$

$a^{-n} = 1 / a^n$, definición para negativos.

**Exponencial – extensión a racionales**

$a^{m/n} = \sqrt[n]{a^m}$,

$a^{r+s} = a^r \cdot a^s$,

$a^{m \cdot n} = (a^m)^n$

**Propiedades fundamentales del exponente racional**
(se extienden a los reales mediante la definición por supremo)

Producto de potencias: $a^r a^s = a^{r+s}$

Potencia de potencia: $(a^r)^s = a^{rs}$

Cociente de potencias: $a^r / a^s = a^{r-s}$

Exponencial de producto: $(ab)^r = a^r b^r$

Normalización: $a^1 = a$, $a^0 = 1$

**Definición de exponencial – exponente real**

$a^r = \sup\{a^q : q \in \mathbb{Q}, q < r\}$

$a^r = \inf\{a^q : q \in \mathbb{Q}, q > r\}$

De esta definición se desprende que el exponente es único.
Al poder trabajar con racionales dentro del conjunto, se heredan las propiedades del exponencial.

**El número e**, $2 < e < 3$

$$
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$

**Logaritmo natural**

$f(x) = e^x$ es biyectiva.

Definición por supremo:
  $\log(y) = \sup\{x \in \mathbb{R} : e^x < y\}$, $y > 0$

Función inversa de $e^x$

**Propiedades fundamentales:**

$\log(ab) = \log(a) + \log(b)$

$\log(a^b) = b \log(a)$

**Desigualdades notables**

**Desigualdad de Bernoulli:** $(1 + h)^n \ge 1 + nh$, $h > -1$

**Desigualdad del triángulo:** $|a + b| \le |a| + |b|$
  $|\sum a_i| \le \sum |a_i|$

**Desigualdad de Cauchy–Schwarz:**
  Sean $a_1, a_2, \dots, a_n$ y $b_1, b_2, \dots, b_n$ números reales:
  $(\sum a_i b_i)^2 \le (\sum a_i^2)(\sum b_i^2)$

**Desigualdad de la media aritmética y geométrica (AM–GM):**
  $a_1 + a_2 + \dots + a_n \ge n \sqrt[n]{a_1 a_2 \dots a_n}$
  para dos números: $\displaystyle \frac{a + b}{2} \ge \sqrt{ab}$

**Desigualdad del triángulo invertida:**
  $||x| - |y|| \le |x - y|$

**AM–GM de cuadrados:**
  $\displaystyle \frac{a^2 + b^2}{2} \ge \sqrt{a^2 b^2} = |ab|$

**Desigualdad del triángulo – variación para límites:**
  $|x| = |x + y - y| \le |x - y| + |y|$

**Técnicas comunes para límites por definición:**

Acotar con desigualdad triangular. Si $f(x) \to L \Rightarrow |f(x) - L| \le |f(x) - g(x)| + |g(x) - L|$

Sucesiones cuadráticas o polinómicas: AM–GM generalizada o Cauchy–Schwarz. Ejemplo: $a_n = 1 / \sqrt{n}$

Límites con potencias: desigualdad de Bernoulli. Ejemplo: $a_n = (1 + 1/n)^n$


**Productos notables y propiedades típicas**

**Diferencia de cuadrados:** $a^2 - b^2 = (a - b)(a + b)$

**Binomio de Newton:**
  $(a + b)^m = \sum_{i = 0}^m \binom{m}{i} a^{m - i} b^i$

**Factorización de diferencias:**
  $a^k - b^k = (a - b) \sum_{i = 0}^{m - 1} a^{k - 1 - i} b^i$

**Serie geométrica:**
  $1 + a + a^2 + \dots + a^n = \frac{a^{n + 1} - 1}{a - 1}, a \ne 1$

**Serie aritmética:**
  $1 + 2 + \dots + n = \frac{n(n + 1)}{2}$

**Tamaño del conjunto potencia:**
  $\sum_{k = 0}^n \binom{n}{k} = 2^n$

**Desigualdad trigonométrica notable:**
  $\sin x \le x \le \tan x$ para $x \in (0, \pi/2)$
  Propiedad clave para probar $\displaystyle \lim_{x \to 0} \frac{\sin x}{x} = 1$

**Identidades pitagóricas:**
  $\sin^2 x + \cos^2 x = 1$,
  $\tan^2 x + 1 = \sec^2 x$,
  $1 + \cot^2 x = \csc^2 x$

**Ángulos dobles:**
  $\sin 2x = 2 \sin x \cos x$
  $\cos 2x = \cos^2 x - \sin^2 x$

**Suma de ángulos:**
  $\sin(x + y) = \sin x \cos y + \cos x \sin y$
  $\cos(x + y) = \cos x \cos y - \sin x \sin y$

**Identidad de potencias:**
  $\sin^2 x = \frac{1 - \cos 2x}{2}$,
  $\cos^2 x = \frac{1 + \cos 2x}{2}$

**Límites de funciones reales**

**Definición de límite:**

Sea $f:(a,b)\to\mathbb{R}$, se dice que $\displaystyle \lim_{x \to a} f(x) = l$ si
$\forall \varepsilon > 0, \exists \delta > 0$ tal que
$0 < |x - a| < \delta \Rightarrow |f(x) - l| < \varepsilon$.

El límite, si existe, es único.

**Teorema del Sandwich:**

Sean $f, g, h$ funciones definidas en $(a,b)$, salvo quizás en $x_0 \in (a,b)$, con: $\displaystyle \lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = l$ y $g(x) \le f(x) \le h(x)$

Entonces $\displaystyle \lim_{x \to x_0} f(x) = l$.

**Lema de orden en límites:**

Suponga que $\displaystyle \lim_{x \to x_0} f(x) = l$.

Si $b < l \Rightarrow \exists \delta > 0, 0 < |x - x_0| < \delta \Rightarrow f(x) > b$

Si $b > l \Rightarrow \exists \delta > 0, 0 < |x - x_0| < \delta \Rightarrow f(x) < b$

**Composición de funciones para límites:**

Sean $f,g$ funciones $(a,b)\to\mathbb{R}$, excepto quizás en $x_0 \in (a,b)$ y $f:(c,d)\to\mathbb{R}$, excepto quizás en $y_0 \in (c,d)$ con $g(x) \ne y_0$ para $x = x_0$ y $\displaystyle \lim_{x \to x_0} g(x) = y_0$, $\lim_{y \to y_0} f(y) = l$
$\Rightarrow \lim_{x \to x_0} (f \circ g)(x) = l$

*Este teorema permite hacer cambio de variable en un límite, calcular dos límites más simples para obtener un límite más complicado.*

**Álgebra de límites**

Sean $f, g$ funciones tales que $\lim_{x \to a} f(x) = l_1$ y $\lim_{x \to a} g(x) = l_2$. Entonces:

$\lim_{x \to a} (f(x) + g(x)) = l_1 + l_2$

$\lim_{x \to a} (f(x) g(x)) = l_1 l_2$

Si $l_2 \ne 0 \Rightarrow \lim_{x \to a} \frac{f(x)}{g(x)} = \frac{l_1}{l_2}$

$\lim_{x \to a} (f(x))^n = l_1^n$, para $n \in \mathbb{N}$

**Definición de límite alternativa, por sucesiones**

Sea $f$ una función definida en $(a,b)$, salvo quizás en $x_0 \in (a,b)$.
Las siguientes proposiciones son equivalentes:

$\displaystyle \lim_{x \to x_0} f(x) = l$

$\forall (x_n)$ tal que $\lim_{n \to \infty} x_n = x_0$, $x_n \ne x_0$, se verifica que
$\displaystyle \lim_{n \to \infty} f(x_n) = l$

*Este teorema es útil para probar que una función no tiene límite cuando $x \to x_0$, encontrando dos sucesiones $(x_n) \to x_0$ tales que $f(x_n)$ no sean convergentes o converjan a distinto límite.*

**Límites laterales de funciones**

Estas definiciones recorren $x \to x_0$ por izquierda o por derecha.

Por la derecha: $x \to x_0^+ \Rightarrow |x - x_0| = x - x_0$
Por la izquierda: $x \to x_0^- \Rightarrow |x - x_0| = x_0 - x$

**Límite por la derecha:**

$\displaystyle \lim_{x \to x_0^+} f(x) = l$ si y sólo si $\forall \varepsilon > 0, \exists \delta > 0, 0 < x - x_0 < \delta \Rightarrow |f(x) - l| < \varepsilon$

**Límite por la izquierda:**

$\displaystyle \lim_{x \to x_0^-} f(x) = l$ si y sólo si

$\forall \varepsilon > 0, \exists \delta > 0, 0 < x_0 - x < \delta \Rightarrow |f(x) - l| < \varepsilon$

**Propiedad de límite lateral:**
Sea $f$ una función real, las siguientes afirmaciones son equivalentes:

$\displaystyle \lim_{x \to x_0} f(x) = l$

$\displaystyle \lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = l$

*En ambos casos, i→ii, ii→i, se demuestra directamente al ser consecuencia de propiedades del valor absoluto.*

**Límites infinitos**

Un límite es infinito si podemos achicar o agrandar $f(x)$ tanto como queramos cuando $x \to x_0$.

$\displaystyle \lim_{x \to x_0} f(x) = +\infty \Leftrightarrow \forall M > 0, \exists \delta > 0, 0 < |x - x_0| < \delta \Rightarrow f(x) > M$

$\displaystyle \lim_{x \to x_0} f(x) = -\infty \Leftrightarrow \forall M > 0, \exists \delta > 0, 0 < |x - x_0| < \delta \Rightarrow f(x) < -M$

El límite infinito sin signo se considera:

$\displaystyle \lim_{x \to x_0} |f(x)| = +\infty$

Estas definiciones se pueden extender a límites laterales.

$\displaystyle \lim_{x \to x_0^+} f(x) = +\infty \Leftrightarrow \forall M > 0, \exists \delta > 0, 0 < x - x_0 < \delta \Rightarrow f(x) > M$

$\displaystyle \lim_{x \to x_0^-} f(x) = +\infty \Leftrightarrow \forall M > 0, \exists \delta > 0, 0 < x_0 - x < \delta \Rightarrow f(x) > M$

**Límites al infinito**

$\displaystyle \lim_{x \to +\infty} f(x) = l \Leftrightarrow \forall \varepsilon > 0, \exists K > 0, x > K \Rightarrow |f(x) - l| < \varepsilon$

$\displaystyle \lim_{x \to +\infty} f(x) = +\infty \Leftrightarrow \forall M > 0, \exists K > 0, x > K \Rightarrow f(x) > M$

**Continuidad de funciones reales**

**Definición de continuidad:**

Sea $f:(a,b)\to\mathbb{R}$ y $x_0\in(a,b)$, se dice que $f$ es continua en $x_0$ si $\lim_{x \to x_0} f(x) = f(x_0)$

Además, si $f$ es continua para todo $x \in (a,b)$, decimos que es continua en $(a,b)$.

**Acutación de función continua:**

Si $a < f(x_0) < b$, $f$ es continua, entonces existe un $\delta > 0$ tal que

$$
|x - x_0| < \delta \Rightarrow a < f(x) < b

$$
Este teorema no tiene nombre propio en la bibliografía, pero resulta útil para probar otros teoremas más fuertes. *(Norega, p.202)*

**Composición de funciones continuas:**
Si $g$ es continua en $x_0$ y $f$ es continua en $g(x_0)$, entonces $f \circ g$ es continua en $x_0$.

**Álgebra de funciones continuas:**
Sean $f$ y $g$ funciones continuas en $x_0$, las siguientes funciones son continuas en $x_0$:

$(f + g)(x)$

$(f \cdot g)(x)$

$\displaystyle \frac{f}{g}(x)$ dado que $g(x) \ne 0$

**Funciones continuas notables:**

$P(x)$, donde $P(x)$ es un polinomio con coeficientes reales de grado $n \in \mathbb{N}$, es continua en $\mathbb{R}$.

$a^x$ en $\mathbb{R}$, $\log x$ es continua en $x > 0$

$\sin x$, $\cos x$

**Clasificación de continuidad**

**Evitable:** si se puede redefinir una función en la discontinuidad para obtener una función continua.

**Primera especie:** los límites laterales difieren.

**Segunda especie:** cualquier otro caso; por ejemplo, $\sin(1/x)$ cuando $x \to 0$, los límites laterales no existen.

**Funciones continuas en intervalo cerrado:**
Sea $f$ una función, se dice que $f$ es continua en $[a,b]$ si es continua en $(c,d)$, con $[a,b] \subset (c,d)$.

**Propiedades de funciones continuas en intervalos cerrados:**

Una función continua en $[a,b]$ es acotada en $[a,b]$.

Una función continua en $[a,b]$ alcanza mínimo y máximo en $[a,b]$.

**Teorema de Bolzano:**

Si $f$ es una función continua en $[a,b]$ y $f(a) < 0$, $f(b) > 0$, entonces existe un $c \in (a,b)$ tal que $f(c) = 0$.

**Nota:** $c = \sup\{x \in [a,b] : f(x) < 0\}$ y $f(c) = 0$, porque $f(c) < 0$ y $f(c) > 0$ conducen al absurdo.

**Teorema de valor intermedio**

Una generalización del teorema de Bolzano.
Si $f$ es continua en $[a,b]$ y $f(a) < f(b)$, sea $d \in (f(a), f(b))$, entonces existe $c \in (a,b)$ tal que $f(c) = d$.

**Ley de conservación de signo:**
Sea $f:(a,b)\to\mathbb{R}$ continua en $x_0 \in (a,b)$ y $f(x_0) \ne 0$, entonces existe un $\delta > 0$ tal que

$$
|x - x_0| < \delta \Rightarrow f(x) \ne 0
$$

**Continuidad de función inversa:**

Si $f:[a,b]\to[f(a),f(b)]$ es biyectiva, continua y monótona, entonces $f^{-1}:[f(a),f(b)]\to[a,b]$ es continua.

**Continuidad uniforme:**

Sea $f:A\to\mathbb{R}$, $A\subset\mathbb{R}$. Se dice que $f$ es uniformemente continua si  $\forall \varepsilon > 0, \exists \delta > 0, |x - x'| < \delta \Rightarrow |f(x) - f(x')| < \varepsilon$

**Teorema de Heine–Cantor:**
Si $f$ es una función continua en $[a,b]$, entonces es uniformemente continua en $[a,b]$.
