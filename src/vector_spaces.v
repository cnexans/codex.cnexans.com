Section GroupTheory.
  Variable G : Type.
  Variable zero : G.
  Variable add : G -> G -> G.
  Variable negate_of : G -> G.

  Notation "a + b" := (add a b).
  Notation "0" := (zero).
  Notation "- a" := (negate_of a).
  Notation "a - b" := (add a (negate_of b)).

  Variable associativity : forall a b c, (a + b) + c = a + (b + c).
  Variable identity : forall a, a + 0 = a /\ 0 + a = a.
  Variable inverse : forall a, a + (-a) = 0 /\ (-a) + a = 0.

  Theorem right_cancellation : forall a b c, a + b = a + c -> b = c.
  Proof.
    intros a b c H.
    (* Apply the function -a + to both sides of the equation *)
    apply f_equal with (f := fun t => -a + t) in H.

    (* Instantiate the inverse and identity properties *)
    destruct (inverse a).
    destruct (identity b).
    destruct (identity c).

    (* Cancel in the left side of the equation *)
    rewrite <- (associativity (-a) a b) in H.
    rewrite -> H1 in H.
    rewrite -> H3 in H.

    (* Cancel in the right side of the equation *)
    rewrite <- (associativity (-a) a c) in H.
    rewrite -> H1 in H.
    rewrite -> H5 in H.

    exact H.
  Qed.
  
End GroupTheory.