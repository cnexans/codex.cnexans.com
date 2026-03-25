'use client';

import { createContext, useContext, useRef, type ReactNode } from 'react';

export type CounterName = 'axiom' | 'definition' | 'result' | 'method';

interface NumberingContextValue {
  next: (counter: CounterName) => number;
}

const NumberingContext = createContext<NumberingContextValue | null>(null);

export function NumberingProvider({ children }: { children: ReactNode }) {
  const counters = useRef<Record<CounterName, number>>({
    axiom: 0,
    definition: 0,
    result: 0,
    method: 0,
  });

  const next = (counter: CounterName): number => {
    counters.current[counter] += 1;
    return counters.current[counter];
  };

  return (
    <NumberingContext.Provider value={{ next }}>
      {children}
    </NumberingContext.Provider>
  );
}

export function useNumbering(): NumberingContextValue {
  const ctx = useContext(NumberingContext);
  if (!ctx) {
    throw new Error('useNumbering must be used within a NumberingProvider');
  }
  return ctx;
}
