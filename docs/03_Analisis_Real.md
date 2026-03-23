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

**Caso 2:** $x_1$ y $x_2$ están ambos en los extremos. Como $f(a) = f(b)$, el máximo y mínimo son iguales, luego $f$ es constante y $f' \equiv 0$.
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

::: {.callout-note title="Teorema — Regla de L'Hôpital (caso $0/0$)"}
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

::: {.callout-note title="Teorema — Regla de L'Hôpital (caso $\infty/\infty$)"}
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
