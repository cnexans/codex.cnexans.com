---
title: "Codex"
author: "Carlos Nexans"
lang: es
toc: true
toc-depth: 2
top-level-division: chapter
---



\part{Lógica}


# Cómo demostrar



A menudo, las matemáticas del colegio suponen resolver ecuaciones y realizar operaciones mediante procesos bien definidos. Sin embargo, las matemáticas universitarias exigen también enfrentarse a funciones, conjuntos y estructuras abstractas. Lo que une todos estos conocimientos es el *razonamiento deductivo*, que se presenta en forma de pruebas y demostraciones.

## Lógica simbólica

::: {.callout-important title="Definición — Expresión booleana"}
Una **expresión booleana** $E$ está conformada por:

- Constantes: $\top$ (verdad) y $\bot$ (falsedad)
- Variables booleanas (letras minúsculas: $p, q, r, \ldots$)
- Operadores: $\neg,\ \land,\ \lor,\ \Rightarrow,\ \Leftarrow,\ \Leftrightarrow$
:::

::: {.callout-important title="Definición — Operadores lógicos"}
Usando las variables $p$: "mañana nevará" y $q$: "mañana lloverá":

| Símbolo | Nombre | Ejemplo | Significado |
|:---:|:---:|:---:|:---|
| $\neg$ | negación | $\neg p$ | Mañana no nevará |
| $\lor$ | disyunción | $p \lor q$ | Mañana nevará o lloverá |
| $\land$ | conjunción | $p \land q$ | Mañana nevará y lloverá |
| $\Rightarrow$ | implicación | $p \Rightarrow q$ | Si nieva, entonces llueve |
| $\Leftarrow$ | consecuente | $p \Leftarrow q$ | Que llueva es consecuencia de que nieve |
| $\Leftrightarrow$ | equivalencia | $p \Leftrightarrow q$ | Nieva si y solo si llueve |

:::

Cualquier proposición matemática puede expresarse en lógica simbólica.

::: {.callout-note title="Ejemplo — Traducción de enunciados"}
"Si $p$ es primo y divide a $ab$, entonces divide a $a$ o a $b$":

$$r \land s \Rightarrow t \lor u$$
:::

::: {.callout-note title="Ejemplo — Traducción de enunciados"}
"$f(a)=0$ si y solo si $(x-a)$ divide a $f(x)$":

$$r \land s \Rightarrow (t \Leftrightarrow u)$$
:::

## Teoremas de lógica

Los siguientes son los teoremas de lógica más usados en demostraciones:

::: {.callout-note title="Teorema — Equivalencia"}
$$p \Leftrightarrow q \equiv (p \Rightarrow q) \land (q \Rightarrow p)$$
:::

::: {.callout-note title="Teorema — Contrarrecíproco"}
$$p \Rightarrow q \equiv \neg q \Rightarrow \neg p$$
:::

::: {.callout-note title="Teorema — Definición de implicación"}
$$p \Rightarrow q \equiv \neg p \lor q$$
:::

::: {.callout-note title="Teorema — Leyes de De Morgan"}
$$\neg(p \land q) \equiv \neg p \lor \neg q \qquad \neg(p \lor q) \equiv \neg p \land \neg q$$
:::

::: {.callout-note title="Teorema — Análisis de casos"}
$$(p \Rightarrow r) \land (q \Rightarrow r) \equiv p \lor q \Rightarrow r$$
$$(p \Rightarrow r) \land (\neg p \Rightarrow r) \equiv r$$
:::

::: {.callout-note title="Teorema — Shunting"}
$$p \Rightarrow (q \Rightarrow r) \equiv p \land q \Rightarrow r$$
:::

::: {.callout-note title="Teorema — Tercero excluido y doble negación"}
$$p \lor \neg p \equiv \top \qquad \neg\neg p \equiv p$$
:::

::: {.callout-note title="Teorema — Debilitamiento y fortalecimiento"}
$$p \land q \Rightarrow p \qquad p \Rightarrow p \lor q \qquad p \land q \Rightarrow p \lor q$$
:::

## Métodos de demostración

::: {.callout-note title="Método — Directo"}
Para demostrar $P \Rightarrow Q$: suponer $P$ verdadero y deducir $Q$ mediante resultados conocidos.

**Ejemplo:** si $x > 3$ e $y < 2$, entonces $x^2 - 2y > 5$.

De $x > 3$: $x^2 > 3x > 9$. De $y < 2$: $-2y > -4$. Sumando:
$$x^2 - 2y > 9 - 4 = 5$$
:::

::: {.callout-note title="Método — Contrarrecíproco"}
Para demostrar $P \Rightarrow Q$, basta demostrar $\neg Q \Rightarrow \neg P$, pues son equivalentes por el teorema del contrarrecíproco.
:::

::: {.callout-note title="Método — Análisis de casos"}
- Para demostrar $P \lor Q \Rightarrow R$: demostrar $P \Rightarrow R$ y $Q \Rightarrow R$ por separado.
- Para demostrar $R$ directamente: encontrar $P$ tal que $P \Rightarrow R$ y $\neg P \Rightarrow R$.
:::

::: {.callout-note title="Método — Contradicción"}
Para demostrar $P$: suponer $\neg P$ y derivar una contradicción.

Para demostrar $P \Rightarrow Q$: suponer $P$ y $\neg Q$ simultáneamente y llegar a una contradicción, usando que:
$$\neg(P \Rightarrow Q) \equiv \neg(\neg P \lor Q) \equiv P \land \neg Q$$
:::

## Cuantificación y lógica de predicados

Contenido por agregar.


\part{Análisis Real}


# Construcción Axiomática



Este desarrollo de los números reales es axiomático, partimos de la base de que $\mathbb{R}$ es un conjunto no vacío que cumple ciertas propiedades. Estas propiedades, desde un punto de vista algebráico, le otorgan el carácter de cuerpo ordenado completo.

## Axiomas de cuerpo

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

## Axiomas de orden


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



# Sucesiones



::: {.callout-important title="Definición — Sucesión"}
Una sucesión $(a_n)$ es una función $a:\mathbb{N}_0 \to \mathbb{R}$.
:::

::: {.callout-important title="Definición — Límite de sucesión"}
$\displaystyle \lim_{n \to \infty} a_n = l$ si $\forall \varepsilon > 0, \exists n_0 \in \mathbb{N}$ tal que $n \ge n_0 \Rightarrow |a_n - l| < \varepsilon$.
:::

::: {.callout-note title="Ejemplo — $\lim_{n\to\infty} \dfrac{n^2+2n+1}{n^2-3n-2} = 1$" collapse="true"}
Sea $a_n = \dfrac{n^2+2n+1}{n^2-3n-2}$. Queremos mostrar que $|a_n - 1| < \varepsilon$ para $n$ suficientemente grande.

$$|a_n - 1| = \left|\frac{n^2+2n+1 - (n^2-3n-2)}{n^2-3n-2}\right| = \left|\frac{5n+3}{n^2-3n-2}\right|$$

Para $n$ grande, $n^2 - 3n - 2 > n^2/2$ (pues $3n + 2 < n^2/2$ para $n \geq 7$), por lo tanto:
$$|a_n - 1| \leq \frac{5n+3}{n^2/2} = \frac{2(5n+3)}{n^2} \leq \frac{16}{n}$$

Dado $\varepsilon > 0$, tomando $N = \max\left(7, \lceil 16/\varepsilon \rceil\right)$, para $n > N$ se tiene $|a_n - 1| \leq 16/n < \varepsilon$.
:::

::: {.callout-important title="Proposición — Equivalencia de la definición de límite"}
Sea $(a_n)$ una sucesión y $l \in \mathbb{R}$. Son equivalentes:

a) $\lim_{n \to \infty} a_n = l$

b) $\lim_{n \to \infty} |a_n - l| = 0$

::: {.callout-caution title="Demostración" collapse="true"}
$(a) \Rightarrow (b)$: Sea $\varepsilon > 0$. Dado que $\lim a_n = l$, existe $N$ tal que para $n > N$, $|a_n - l| < \varepsilon$. Luego $\bigl||a_n - l| - 0\bigr| = |a_n - l| < \varepsilon$, así que $\lim |a_n - l| = 0$.

$(b) \Rightarrow (a)$: Sea $\varepsilon > 0$. Existe $N$ tal que para $n > N$, $\bigl||a_n - l| - 0\bigr| = |a_n - l| < \varepsilon$, por lo tanto $\lim a_n = l$.
:::
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

::: {.callout-important title="Proposición — Aritmética con límites infinitos"}
Sean $(a_n)$ sucesión acotada y $(b_n)$ con $\lim_{n\to\infty} b_n = +\infty$. Entonces:

a) $\lim_{n\to\infty}(a_n + b_n) = +\infty$

b) $\lim_{n\to\infty} \dfrac{a_n}{b_n} = 0$

::: {.callout-caution title="Demostración" collapse="true"}
**(a)** Como $a_n$ es acotada, existe $M > 0$ con $|a_n| \leq M$ para todo $n$. Sea $R > 0$. Dado que $b_n \to +\infty$, existe $N$ con $b_n > R + M$ para $n > N$. Entonces:
$$a_n + b_n > -M + (R + M) = R$$
Por lo tanto $\lim(a_n + b_n) = +\infty$.

**(b)** Sea $\varepsilon > 0$. Como $a_n$ es acotada, $|a_n| \leq M$. Dado que $b_n \to +\infty$, existe $N$ con $b_n > M/\varepsilon$ para $n > N$. Entonces:
$$\left|\frac{a_n}{b_n}\right| = \frac{|a_n|}{b_n} \leq \frac{M}{b_n} < \varepsilon$$
:::
:::

::: {.callout-note title="Teorema — Límites especiales de sucesiones"}
1. $\lim_{n\to\infty} \sqrt[n]{a_n} = 1$ si $(a_n)$ es de términos positivos con $\lim a_n = l > 0$.
2. $\lim_{n\to\infty} r^n = 0$ para todo $|r| < 1$.
:::

::: {.callout-note title="Lema — $\lim_{n\to\infty} n^{1/n} = 1$"}
$$\lim_{n \to \infty} n^{1/n} = 1$$

Más generalmente, para $r > 0$ fijo:
$$\lim_{n\to\infty} r^n = \begin{cases} +\infty & \text{si } r > 1 \\ 1 & \text{si } r = 1 \\ 0 & \text{si } 0 \leq r < 1 \end{cases}$$

::: {.callout-caution title="Demostración" collapse="true"}
Escribamos $n^{1/n} = 1 + h_n$ con $h_n \geq 0$. Entonces $n = (1+h_n)^n \geq \binom{n}{2} h_n^2 = \frac{n(n-1)}{2} h_n^2$, así que $h_n^2 \leq \frac{2}{n-1}$, es decir $0 \leq h_n \leq \sqrt{\frac{2}{n-1}} \to 0$. Por el Teorema del Sandwich, $h_n \to 0$ y por tanto $n^{1/n} \to 1$.
:::
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

::: {.callout-caution title="Demostración" collapse="true"}
Consideremos el caso creciente y acotada superiormente. Sea $s = \sup\{a_n : n \in \mathbb{N}\}$, que existe por el Axioma del Supremo. Sea $\varepsilon > 0$. Como $s - \varepsilon$ no es cota superior, existe $N$ tal que $a_N > s - \varepsilon$. Para $n > N$, como la sucesión es creciente:
$$s - \varepsilon < a_N \leq a_n \leq s$$
Luego $|a_n - s| < \varepsilon$, es decir $\lim_{n\to\infty} a_n = s$.

El caso decreciente y acotada inferiormente es análogo usando $\inf$.
:::
:::

::: {.callout-note title="Teorema — Comportamiento de sucesiones monótonas no acotadas"}
Si una sucesión $(a_n)$ es monótona y no acotada, entonces:

- Si es creciente: $\displaystyle\lim_{n\to\infty} a_n = +\infty$.
- Si es decreciente: $\displaystyle\lim_{n\to\infty} a_n = -\infty$.
:::

::: {.callout-note title="Teorema — Teorema de Bolzano-Weierstrass"}
Toda sucesión acotada en $\mathbb{R}$ tiene una subsucesión convergente.

::: {.callout-caution title="Demostración" collapse="true"}
Sea $(a_n)$ acotada, con $|a_n| \leq M$. Consideramos $I_1 = [-M, M]$. Dividimos por la mitad: al menos uno de los dos subintervalos contiene infinitos términos de la sucesión; lo llamamos $I_2$. Continuando, obtenemos intervalos encajados $I_1 \supset I_2 \supset \cdots$ con $\ell(I_k) = M/2^{k-1} \to 0$. Por el Teorema de los Intervalos Encajados, existe un único $x \in \bigcap_k I_k$. La subsucesión $a_{n_k}$ de elementos tomados en $I_k$ cumple $|a_{n_k} - x| \leq \ell(I_k) \to 0$, por lo que $a_{n_k} \to x$.
:::
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

::: {.callout-caution title="Demostración — toda sucesión de Cauchy es acotada" collapse="true"}
Sea $(a_n)$ de Cauchy. Tomando $\varepsilon = 1$, existe $N$ tal que $|a_n - a_m| < 1$ para $n, m > N$. En particular, $|a_n - a_{N+1}| < 1$ para $n > N$, así que $|a_n| < |a_{N+1}| + 1$. Tomando $M = \max\{|a_1|, \ldots, |a_N|, |a_{N+1}| + 1\}$, se tiene $|a_n| \leq M$ para todo $n$.
:::

::: {.callout-caution title="Demostración — toda sucesión de Cauchy converge" collapse="true"}
Por la propiedad anterior, $(a_n)$ es acotada. Por el Teorema de Bolzano-Weierstrass, existe una subsucesión $a_{n_k} \to a$. Sea $\varepsilon > 0$. Existen $N_1$ con $|a_{n_k} - a| < \varepsilon/2$ para $k > N_1$, y $N_2$ con $|a_n - a_m| < \varepsilon/2$ para $n, m > N_2$. Sea $N = \max\{N_1, N_2\}$. Para $n > N$, elegimos $k$ con $n_k > N$:
$$|a_n - a| \leq |a_n - a_{n_k}| + |a_{n_k} - a| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$
:::
:::

## Encajes de intervalos

::: {.callout-important title="Definición — Encaje de intervalos"}
Una sucesión de intervalos cerrados $I_n = [a_n, b_n]$ con $a_n \le b_n$ es un **encaje de intervalos** si $I_{n+1} \subset I_n$ para todo $n$.

La **longitud** del intervalo es $\ell(I_n) = b_n - a_n$.
:::

::: {.callout-note title="Teorema — Encaje de intervalos\footnotemark{}"}


Sea $(I_n)$ un encaje de intervalos cerrados. Si $\displaystyle\lim_{n\to\infty} \ell(I_n) = 0$, entonces:
$$\bigcap_{n=1}^{\infty} I_n = \{x\}$$
es decir, la intersección contiene exactamente un punto.

::: {.callout-caution title="Demostración" collapse="true"}
Sea $a = \sup\{a_n\}$ y $b = \inf\{b_n\}$. Para cada $n$, $a_n \leq b_n$, y como las sucesiones son monótonas, $a_m \leq a_n \leq b_n \leq b_m$ para $m \leq n$. Luego $a_n \leq b$ para todo $n$, así que $a \leq b$, y $x \in [a_n, b_n]$ para todo $n$, es decir $x \in \bigcap_n I_n$.

Si además $\ell(I_n) \to 0$: dado $\varepsilon > 0$, existe $N$ con $b_N - a_N < \varepsilon$. Para cualquier $x, y \in \bigcap_n I_n$, $|x - y| \leq b_N - a_N < \varepsilon$, así que la intersección es unitaria, $\{x\} = \bigcap_n I_n$.
:::
:::

\footnotetext{Este teorema es equivalente al axioma del supremo y es la base del Teorema de Bolzano–Weierstrass.}

::: {.callout-note title="Teorema — Teorema de Heine-Borel"}
Un subconjunto de $\mathbb{R}$ es compacto si y solo si es cerrado y acotado.
:::



# Límites y Continuidad



## Límites de funciones reales

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

::: {.callout-important title="Definición"}
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

::: {.callout-note title="Lema — Acotación local del límite"}
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

## Límites laterales

::: {.callout-important title="Definición — Límite lateral por la derecha"}
$$\lim_{x \to x_0^+} f(x) = l \iff \forall \varepsilon > 0,\ \exists \delta > 0 : 0 < x - x_0 < \delta \Rightarrow |f(x) - l| < \varepsilon$$
:::

::: {.callout-important title="Definición — Límite lateral por la izquierda"}
$$\lim_{x \to x_0^-} f(x) = l \iff \forall \varepsilon > 0,\ \exists \delta > 0 : 0 < x_0 - x < \delta \Rightarrow |f(x) - l| < \varepsilon$$
:::

::: {.callout-note title="Teorema — Equivalencia con límites laterales"}
$\displaystyle\lim_{x \to x_0} f(x) = l$ si y sólo si $\displaystyle\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = l$.
:::

## Límites infinitos y al infinito

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

## Continuidad

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

::: {.callout-note title="Ejemplo — $a^x$ es continua en $\mathbb{R}$ para $a > 0$" collapse="true"}
Sea $x_0 \in \mathbb{R}$. Queremos mostrar $\lim_{x \to x_0} a^x = a^{x_0}$.

$$|a^x - a^{x_0}| = a^{x_0} |a^{x-x_0} - 1|$$

Sea $h = x - x_0$. Basta mostrar que $\lim_{h \to 0} a^h = 1$.

- **Caso $a > 1$:** Para $h > 0$ pequeño, $a^h = e^{h \log a}$. Como $\log a > 0$, dado $\varepsilon > 0$ se elige $\delta = \frac{\log(1+\varepsilon)}{\log a}$. Para $|h| < \delta$: $|a^h - 1| < \varepsilon$.

- **Caso $0 < a < 1$:** Análogo con $\log a < 0$.

Por tanto $a^x$ es continua en todo $\mathbb{R}$.
:::

::: {.callout-note title="Ejemplo — $\lim_{x \to +\infty} a^x = 0$ para $0 < a < 1$" collapse="true"}
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

::: {.callout-note title="Ejemplo — Continuidad de $f(x) = 1/x$ en $x_0 \neq 0$" collapse="true"}
Sea $x_0 \neq 0$. Queremos encontrar $\delta$ tal que $|x - x_0| < \delta \Rightarrow |1/x - 1/x_0| < \varepsilon$.

$$\left|\frac{1}{x} - \frac{1}{x_0}\right| = \frac{|x - x_0|}{|x| \cdot |x_0|}$$

Restringimos $|x - x_0| < |x_0|/2$, lo que garantiza $|x| > |x_0|/2$. Entonces:
$$\frac{|x - x_0|}{|x| \cdot |x_0|} < \frac{|x - x_0|}{(|x_0|/2) \cdot |x_0|} = \frac{2|x - x_0|}{|x_0|^2}$$

Eligiendo $\delta = \min\!\left(\frac{|x_0|}{2},\, \frac{\varepsilon |x_0|^2}{2}\right)$, para $|x - x_0| < \delta$:
$$\left|\frac{1}{x} - \frac{1}{x_0}\right| < \frac{2\delta}{|x_0|^2} \leq \frac{2 \cdot \frac{\varepsilon |x_0|^2}{2}}{|x_0|^2} = \varepsilon$$

Por tanto $f(x) = 1/x$ es continua en todo $x_0 \neq 0$.
:::




# Herramientas del Análisis



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

::: {.callout-important title="Proposición — $(1+1/n)^n$ es estrictamente creciente"}
La sucesión $a_n = \left(1 + \dfrac{1}{n}\right)^n$ es estrictamente creciente.

::: {.callout-caution title="Demostración" collapse="true"}
Por la desigualdad de medias aritmética-geométrica aplicada a $n+1$ números donde $n$ de ellos son $\frac{n+1}{n}$ y uno es $1$:
$$\left(\frac{n+1}{n}\right)^n \cdot 1 \leq \left(\frac{n \cdot \frac{n+1}{n} + 1}{n+1}\right)^{n+1} = \left(\frac{n+2}{n+1}\right)^{n+1}$$
Multiplicando ambos lados por $\left(\frac{n+1}{n}\right)^n$, se obtiene $a_n < a_{n+1}$.

Alternativamente, usando el Teorema del Binomio de Newton:
$$a_n = \sum_{k=0}^{n} \binom{n}{k} \frac{1}{n^k} = \sum_{k=0}^{n} \frac{1}{k!} \cdot \frac{n(n-1)\cdots(n-k+1)}{n^k}$$
Cada término $\frac{n(n-1)\cdots(n-k+1)}{n^k} = \left(1-\frac{1}{n}\right)\cdots\left(1-\frac{k-1}{n}\right)$ es creciente en $n$, y $a_{n+1}$ tiene un término adicional positivo, por lo tanto $a_n < a_{n+1}$.
:::
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

::: {.callout-caution title="Demostración — Demostración de $\log(xy) = \log x + \log y$" collapse="true"}
Sean $r = \log x$ y $s = \log y$, es decir $x = e^r$ y $y = e^s$. Entonces:
$$xy = e^r \cdot e^s = e^{r+s}$$
Aplicando $\log$ a ambos lados: $\log(xy) = r + s = \log x + \log y$.
:::
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
Esta propiedad es clave para probar que $\displaystyle \lim_{x \to 0} \frac{\sin x}{x} = 1$.

::: {.callout-caution title="Demostración" collapse="true"}
Comparando áreas en el círculo unitario con ángulo $x$:

![](public/img/analisis/desigualdad-trigonometrica.svg){width=55% fig-align="center"}

- **Triángulo $OAP$:** vértices en $O=(0,0)$, $A=(1,0)$, $P=(\cos x, \sin x)$. Área $= \tfrac{1}{2}\sin x$.
- **Sector circular $OAP$:** Área $= \tfrac{x}{2}$.
- **Triángulo $OAT$:** vértices en $O$, $A=(1,0)$, $T=(1, \tan x)$. Área $= \tfrac{1}{2}\tan x$.

Como triángulo $OAP \subset$ sector $\subset$ triángulo $OAT$:
$$\frac{1}{2}\sin x \;\le\; \frac{x}{2} \;\le\; \frac{1}{2}\tan x$$

Multiplicando por $2$ y dividiendo por $\sin x > 0$:
$$1 \;\le\; \frac{x}{\sin x} \;\le\; \frac{1}{\cos x}$$

Tomando recíprocos (la desigualdad se invierte):
$$\cos x \;\le\; \frac{\sin x}{x} \;\le\; 1$$

Como $\cos x \to 1$ cuando $x \to 0$, por el Teorema del Sandwich: $\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1$.
:::
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



# Derivadas



## Definición y propiedades básicas

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

## Reglas de derivación

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

## Regla de la cadena

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

## Función inversa

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

## Extremos locales

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

## Teoremas de valor medio

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

## Consecuencias del teorema del valor medio

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

::: {.callout-important title="Proposición — Derivada y monotonía"}
Sea $f$ continua en $[a,b]$ y derivable en $(a,b)$:

1. Si $f'(x) > 0$ para todo $x \in (a,b)$, entonces $f$ es estrictamente creciente en $[a,b]$.
2. Si $f'(x) < 0$ para todo $x \in (a,b)$, entonces $f$ es estrictamente decreciente en $[a,b]$.
:::

## Regla de L'Hôpital

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



# Integrales de Darboux



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

::: {.callout-important title="Proposición — Refinamiento y sumas de Darboux"}
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

::: {.callout-important title="Proposición — Criterio de integrabilidad de Darboux"}
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

::: {.callout-important title="Proposición — Aditividad de la integral"}
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

::: {.callout-note title="Teorema — Teorema Fundamental del Cálculo"}
Sea $f:[a,b] \to \mathbb{R}$ una función integrable en $[a,b]$. Sea $F(x) = \displaystyle\int_a^x f(t)\,dt$ la función integral.

1. $F$ es uniformemente continua en $[a,b]$.
2. Si $f$ es continua en $x_0 \in [a,b]$, entonces $F$ es derivable en $x_0$ y $F'(x_0) = f(x_0)$.
3. Si $G$ es una primitiva de $f$ en $[a,b]$, entonces:
$$\int_a^b f(x)\,dx = G(b) - G(a)$$

::: {.callout-caution title="Demostración" collapse="true"}
**Parte 1: continuidad uniforme de $F$.**

Como $f$ es integrable, es acotada: $\exists M > 0$ tal que $|f(t)| \leq M$. Para $x, y \in [a,b]$:
$$|F(x) - F(y)| = \left|\int_y^x f(t)\,dt\right| \leq M|x-y|$$

Dado $\varepsilon > 0$, tome $\delta = \varepsilon/M$: si $|x-y| < \delta$ entonces $|F(x)-F(y)| < \varepsilon$.

**Parte 2: $F'(x_0) = f(x_0)$ cuando $f$ es continua en $x_0$.**

Para $h > 0$ con $|h| < \delta$ (donde $\delta$ viene de la continuidad de $f$ en $x_0$):
$$\left|\frac{F(x_0+h) - F(x_0)}{h} - f(x_0)\right| = \frac{1}{|h|}\left|\int_{x_0}^{x_0+h}(f(t) - f(x_0))\,dt\right| < \varepsilon$$

**Parte 3:** Si $G$ es primitiva de $f$, entonces $G' = F'$, luego $G - F$ es constante. Evaluando en $x = a$: $G(b) - G(a) = F(b) - F(a) = \int_a^b f(t)\,dt$.
:::
:::

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


\part{Variable Compleja}


# Conceptos Básicos



Los números complejos se construyen como una extensión de los números reales a partir de pares ordenados, dotados de operaciones de suma y producto que preservan la aritmética real y permiten extraer raíces de números negativos.

^[La construcción de los complejos como pares ordenados fue formalizada por Hamilton en 1835.]

## Definición y operaciones

::: {.callout-important title="Definición — Número complejo"}
Un **número complejo** es un par ordenado $z = (x, y)$ con $x, y \in \mathbb{R}$.

El conjunto de todos los números complejos se denota $\mathbb{C} = \mathbb{R}^2$.
:::

::: {.callout-important title="Definición — Parte real e imaginaria"}
Sea $z = (x, y) \in \mathbb{C}$. Se define:

- **Parte real:** $\operatorname{Re}(z) = x$
- **Parte imaginaria:** $\operatorname{Im}(z) = y$
:::

::: {.callout-important title="Definición — Suma y producto de números complejos"}
Sean $z_1 = (x_1, y_1)$ y $z_2 = (x_2, y_2)$ números complejos. Se definen:

**Suma:**
$$(x_1, y_1) + (x_2, y_2) = (x_1 + x_2,\ y_1 + y_2)$$

**Producto:**
$$(x_1, y_1) \cdot (x_2, y_2) = (x_1 x_2 - y_1 y_2,\ x_1 y_2 + x_2 y_1)$$
:::

## Forma algebráica

Los números reales se identifican con los complejos de la forma $(x, 0)$, y se introduce la unidad imaginaria:

::: {.callout-important title="Definición — Unidad imaginaria"}
Se define $i = (0, 1)$. De la regla del producto:

$$i^2 = (0,1)\cdot(0,1) = (0\cdot 0 - 1\cdot 1,\ 0\cdot 1 + 0\cdot 1) = (-1, 0)$$

Es decir, $i^2 = -1$, o equivalentemente $i = \sqrt{-1}$.
:::

::: {.callout-important title="Proposición — Potencias de $i$"}
Las potencias de $i$ son periódicas con período 4. Para todo $k \in \mathbb{Z}$:

$$i^k = \begin{cases} 1 & \text{si } k \equiv 0 \pmod{4} \\ i & \text{si } k \equiv 1 \pmod{4} \\ -1 & \text{si } k \equiv 2 \pmod{4} \\ -i & \text{si } k \equiv 3 \pmod{4} \end{cases}$$
:::

Con estas identificaciones, todo número complejo se escribe como:

::: {.callout-important title="Proposición — Forma binómica"}
Todo $z = (x, y) \in \mathbb{C}$ se puede escribir en **forma binómica**:

$$z = x + iy$$

donde $x = \operatorname{Re}(z)$ e $y = \operatorname{Im}(z)$.
:::

::: {.callout-important title="Proposición — Fórmula binomial"}
Sean $z_1 = x_1 + iy_1$ y $z_2 = x_2 + iy_2$. El producto en forma binómica es:

$$z_1 \cdot z_2 = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + x_2 y_1)$$

lo cual se obtiene distribuyendo y usando $i^2 = -1$:

$$(x_1 + iy_1)(x_2 + iy_2) = x_1 x_2 + ix_1 y_2 + ix_2 y_1 + i^2 y_1 y_2 = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + x_2 y_1)$$
:::

::: {.callout-important title="Proposición — Binomio de Newton en $\mathbb{C}$"}
Sean $z, w \in \mathbb{C}$ y $n \in \mathbb{N}$, $n \geq 2$. Entonces:

$$
(z + w)^n = \sum_{k=0}^{n} \binom{n}{k} z^{n-k} w^k
$$

donde $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$.
:::

## Estructura de cuerpo

$(\mathbb{C}, +, \cdot)$ forma un **cuerpo**: la suma y el producto son conmutativos, asociativos, existe elemento neutro para cada operación ($0 = (0,0)$ y $1 = (1,0)$), todo elemento tiene opuesto aditivo, y todo elemento no nulo tiene inverso multiplicativo. La distributividad se hereda de $\mathbb{R}$.

::: {.callout-important title="Proposición — Inverso multiplicativo"}
Todo $z = x + iy \neq 0$ tiene inverso multiplicativo:

$$z^{-1} = \frac{x}{x^2 + y^2} - i\frac{y}{x^2 + y^2}$$
:::

## Módulo y conjugado

::: {.callout-important title="Definición — Módulo de un número complejo"}
Sea $z = x + iy \in \mathbb{C}$. El **módulo** de $z$ es:

$$|z| = \sqrt{x^2 + y^2} \in \mathbb{R}_{\geq 0}$$

Geométricamente, $|z|$ es la distancia del punto $(x,y)$ al origen en el plano complejo.
:::

::: {.callout-important title="Proposición — Propiedades del módulo"}
Sean $z, w \in \mathbb{C}$. Entonces:

1. $|zw| = |z|\,|w|$
2. $|z + w| \leq |z| + |w|$ (**desigualdad triangular**)
3. $\bigl||z| - |w|\bigr| \leq |z - w|$
4. $|z^2| = |z|^2$
5. $\left|\displaystyle\sum_{k=1}^{n} z_k\right| \leq \displaystyle\sum_{k=1}^{n} |z_k|$
:::

::: {.callout-note title="Teorema — Desigualdad triangular"}
Para todo $z_1, z_2 \in \mathbb{C}$:

$$|z_1 + z_2| \leq |z_1| + |z_2|$$
:::

::: {.callout-caution title="Demostración" collapse="true"}
Dados $z, w \in \mathbb{C}$:

$$
|z + w|^2 = (z + w)\,\overline{(z + w)} = (z + w)(\bar{z} + \bar{w})
= z\bar{z} + z\bar{w} + w\bar{z} + w\bar{w}
$$

$$
= |z|^2 + z\bar{w} + \overline{z\bar{w}} + |w|^2
= |z|^2 + 2\,\operatorname{Re}(z\bar{w}) + |w|^2
$$

$$
\leq |z|^2 + 2|z\bar{w}| + |w|^2
= |z|^2 + 2|z|\,|w| + |w|^2
= \bigl(|z| + |w|\bigr)^2
$$

Por tanto $|z + w| \leq |z| + |w|$.
:::

::: {.callout-note title="Corolario — Desigualdad triangular inversa"}
Para todo $z_1, z_2 \in \mathbb{C}$:

$$|z_1 + z_2| \geq \big||z_1| - |z_2|\big|$$
:::

::: {.callout-caution title="Demostración" collapse="true"}
$$
|z| = |z - w + w| \leq |z - w| + |w|
\Rightarrow |z| - |w| \leq |z - w|
$$

Análogamente, $|w| - |z| \leq |z - w|$. Por lo tanto:

$$
-|z - w| \leq |z| - |w| \leq |z - w|
\Rightarrow \bigl||z| - |w|\bigr| \leq |z - w|
$$
:::

::: {.callout-important title="Definición — Conjugado"}
Sea $z = x + iy \in \mathbb{C}$. El **conjugado** de $z$ es:

$$\bar{z} = x - iy$$

Geométricamente, $\bar{z}$ es la reflexión de $z$ respecto al eje real en el plano complejo.
:::

::: {.callout-important title="Proposición — Propiedades del conjugado"}
Sean $z, w \in \mathbb{C}$.

1. $\bar{\bar{z}} = z$
2. $|\bar{z}| = |z|$
3. $\overline{z + w} = \bar{z} + \bar{w}$
4. $\overline{zw} = \bar{z}\,\bar{w}$
5. $z\bar{z} = |z|^2$
6. Si $w \neq 0$: $\quad z^{-1} = \dfrac{\bar{z}}{|z|^2}$
7. $z + \bar{z} = 2\,\operatorname{Re}(z)$ $\quad$ y $\quad$ $z - \bar{z} = 2i\,\operatorname{Im}(z)$
8. $z = \bar{z}$ si y solo si $z \in \mathbb{R}$
:::

::: {.callout-caution title="Demostración — Propiedad 5" collapse="true"}
$$
z \cdot \bar{z} = (x + iy)(x - iy)
= x^2 - ixy + ixy - i^2 y^2
= x^2 + y^2 = |z|^2
$$
:::

## Topología del plano complejo

::: {.callout-important title="Definición — Disco abierto y entorno reducido"}
Sean $r > 0$ y $z_0 \in \mathbb{C}$. El **disco abierto** de radio $r$ y centro $z_0$ es:

$$
D(z_0, r) = \{z \in \mathbb{C} : |z - z_0| < r\}
$$

También se llama **entorno** o **vecindad** de $z_0$. El **entorno reducido** es:

$$
D^*(z_0, r) = \{z \in \mathbb{C} : 0 < |z - z_0| < r\}
$$
:::

::: {.callout-important title="Definición — Puntos interior, exterior y frontera"}
Sea $S \subset \mathbb{C}$ y $z \in \mathbb{C}$.

- $z$ es **interior** a $S$ si existe $r > 0$ tal que $D(z, r) \subset S$.
- $z$ es **frontera** de $S$ si para todo $r > 0$: $D(z, r) \cap S \neq \emptyset$ y $D(z, r) \cap (\mathbb{C} \setminus S) \neq \emptyset$.
- $z$ es **exterior** a $S$ si no es ni interior ni frontera.

**Observaciones:**

1. Si $z$ es interior a $S$, entonces $z \in S$.
2. Si $z$ es exterior a $S$, entonces $z \notin S$.
3. Si $z$ es frontera de $S$, puede pertenecer o no a $S$.
:::

::: {.callout-important title="Definición — Interior, frontera, abierto y cerrado"}
Se definen los conjuntos:

$$
S^\circ = \{z \in \mathbb{C} : z \text{ es punto interior de } S\}
$$
$$
\partial S = \{z \in \mathbb{C} : z \text{ es punto frontera de } S\}
$$

Decimos que $S$ es **abierto** si $S = S^\circ$, y **cerrado** si $\partial S \subseteq S$.
:::

::: {.callout-important title="Definición — Clausura"}
La **clausura** de $S \subset \mathbb{C}$ es:

$$
\bar{S} = S \cup \partial S
$$
:::

::: {.callout-important title="Definición — Conjunto convexo"}
Decimos que $S$ es **convexo** si para todo $z, w \in S$, el segmento que los une está contenido en $S$.
:::

::: {.callout-important title="Definición — Dominio y región"}
Un **dominio** es un conjunto $S \subset \mathbb{C}$ no vacío, abierto y conexo.

Una **región** es un dominio junto con algunos, ninguno o todos sus puntos frontera.
:::

::: {.callout-important title="Definición — Conjunto acotado"}
Sea $S \subset \mathbb{C}$. Decimos que $S$ es **acotado** si existe $R > 0$ tal que $|z| \leq R$ para todo $z \in S$.
:::

::: {.callout-important title="Definición — Punto de acumulación"}
Sea $S \subset \mathbb{C}$ y $z \in \mathbb{C}$. Decimos que $z$ es **punto de acumulación** de $S$ si todo entorno reducido $D^*(z, r)$ contiene al menos un punto de $S$.
:::

::: {.callout-important title="Proposición — Caracterización de conjuntos cerrados"}
Sea $S \subset \mathbb{C}$. $S$ es cerrado si y solo si $S$ contiene todos sus puntos de acumulación.
:::


# Funciones



## Funciones de variable compleja

::: {.callout-important title="Definición — Función de variable compleja"}
Sea $S \subset \mathbb{C}$ un conjunto no vacío. Una **función de variable compleja** es una función $f: S \to \mathbb{C}$ que asigna a cada $z \in S$ un único valor complejo $f(z)$.
:::

::: {.callout-important title="Definición — Función real de variable compleja"}
Una **función real de variable compleja** es una función $f: S \subset \mathbb{C} \to \mathbb{R}$, es decir, cuyo recorrido está contenido en $\mathbb{R}$.
:::

::: {.callout-important title="Definición — Función compleja de variable compleja"}
Una **función compleja de variable compleja** es una función $f: S \subset \mathbb{C} \to \mathbb{C}$. Toda función de este tipo puede descomponerse en dos funciones reales $u, v: S \subset \mathbb{R}^2 \to \mathbb{R}$:

$$f(z) = f(x, y) = u(x, y) + i\,v(x, y)$$

Se dice que $u$ es la **parte real** de $f$ y $v$ la **parte imaginaria**.
:::

::: {.callout-note title="Ejemplo — Función real de variable compleja"}
El módulo $f: \mathbb{C} \to \mathbb{R}_{\geq 0}$, $f(z) = |z| = \sqrt{x^2 + y^2}$.

El recorrido es $\mathbb{R}_{\geq 0} \subset \mathbb{R}$, por lo que es una función real de variable compleja.
:::

::: {.callout-note title="Ejemplo — Función compleja de variable real"}
La curva exponencial $f: [0, 2\pi) \to \mathbb{C}$, $f(t) = \cos t + i \sin t$.

El dominio es $[0, 2\pi) \subset \mathbb{R}$, pero el recorrido es complejo.
:::

::: {.callout-note title="Ejemplo — Función compleja de variable compleja"}
Las siguientes funciones $f: S \subset \mathbb{C} \to \mathbb{C}$ son complejas de variable compleja:

**(1)** Conjugado: $f(z) = \bar{z}$

$$z = x + iy \Rightarrow u(x,y) = x,\quad v(x,y) = -y$$

**(2)** Inverso: $f: \mathbb{C} \setminus \{0\} \to \mathbb{C}$, $f(z) = z^{-1} = \dfrac{\bar{z}}{|z|^2}$

**(3)** Cuadrado: $f(z) = z^2 = (x^2 - y^2) + 2xy\,i$

**(4)** Polinómica: $f(z) = \displaystyle\sum_{k=0}^{n} a_k z^k$, con $a_0, \ldots, a_n \in \mathbb{C}$

**(5)** Racional: dados $p$, $q$ polinómicos,
$$r: \{z \in \mathbb{C} : q(z) \neq 0\} \to \mathbb{C},\quad r(z) = \frac{p(z)}{q(z)}$$
:::
