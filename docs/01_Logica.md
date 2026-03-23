---
title: "Cómo demostrar"
---

A menudo, las matemáticas del colegio suponen resolver ecuaciones y realizar operaciones mediante procesos bien definidos. Sin embargo, las matemáticas universitarias exigen también enfrentarse a funciones, conjuntos y estructuras abstractas. Lo que une todos estos conocimientos es el *razonamiento deductivo*, que se presenta en forma de pruebas y demostraciones.

## Lógica simbólica

::: {.callout-important title="Definición — Expresión booleana"}
Una **expresión booleana** $E$ está conformada por:

- Constantes: $\top$ (verdad) y $\bot$ (falsedad)
- Variables booleanas (letras minúsculas: $p, q, r, \ldots$)
- Operadores: $\neg,\ \land,\ \lor,\ \Rightarrow,\ \Leftarrow,\ \Leftrightarrow$
:::

Usando las variables $p$: "mañana nevará" y $q$: "mañana lloverá":

| Símbolo | Nombre | Ejemplo | Significado |
|:---:|:---:|:---:|:---|
| $\neg$ | negación | $\neg p$ | Mañana no nevará |
| $\lor$ | disyunción | $p \lor q$ | Mañana nevará o lloverá |
| $\land$ | conjunción | $p \land q$ | Mañana nevará y lloverá |
| $\Rightarrow$ | implicación | $p \Rightarrow q$ | Si nieva, entonces llueve |
| $\Leftarrow$ | consecuente | $p \Leftarrow q$ | Que llueva es consecuencia de que nieve |
| $\Leftrightarrow$ | equivalencia | $p \Leftrightarrow q$ | Nieva si y solo si llueve |

### Traducción de enunciados

Cualquier proposición matemática puede expresarse en lógica simbólica. Por ejemplo:

**"Si $p$ es primo y divide a $ab$, entonces divide a $a$ o a $b$":**
$$r \land s \Rightarrow t \lor u$$

**"$f(a)=0$ si y solo si $(x-a)$ divide a $f(x)$":**
$$r \land s \Rightarrow (t \Leftrightarrow u)$$

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

### Método directo

Para demostrar $P \Rightarrow Q$: suponer $P$ verdadero y deducir $Q$ mediante resultados conocidos.

**Ejemplo:** demostrar que si $x > 3$ e $y < 2$, entonces $x^2 - 2y > 5$.

De $x > 3$: $x^2 > 3x > 9$. De $y < 2$: $-2y > -4$. Sumando:
$$x^2 - 2y > 9 - 4 = 5$$

### Contrarrecíproco

Para demostrar $P \Rightarrow Q$, basta demostrar $\neg Q \Rightarrow \neg P$, pues ambas son equivalentes.

### Análisis de casos

- Para demostrar $P \lor Q \Rightarrow R$: demostrar $P \Rightarrow R$ y $Q \Rightarrow R$ por separado.
- Para demostrar $R$: encontrar $P$ tal que $P \Rightarrow R$ y $\neg P \Rightarrow R$.

### Contradicción (reducción al absurdo)

Para demostrar $P$: suponer $\neg P$ y derivar una contradicción.

Para demostrar $P \Rightarrow Q$: como $\neg(P \Rightarrow Q) \equiv P \land \neg Q$, suponer $P$ y $\neg Q$ simultáneamente y llegar a una contradicción.

$$\neg(P \Rightarrow Q) \equiv \neg(\neg P \lor Q) \equiv P \land \neg Q$$

## Cuantificación y lógica de predicados

Contenido por agregar.
