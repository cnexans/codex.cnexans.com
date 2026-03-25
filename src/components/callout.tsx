'use client';

import { type ReactNode } from 'react';
import { useNumbering, type CounterName } from './numbering-context';
import { MathTitle } from './math-title';

type Variant = 'axiom' | 'definition' | 'theorem' | 'proof';

interface CalloutProps {
  title?: string;
  label?: string;
  collapsible?: boolean;
  children: ReactNode;
  variant: Variant;
}

const variantStyles: Record<Variant, { borderColor: string; bg: string }> = {
  axiom: { borderColor: 'border-l-[#2e7d32]', bg: 'bg-[#f1f8f1]' },
  definition: { borderColor: 'border-l-[#e65100]', bg: 'bg-[#fff8f0]' },
  theorem: { borderColor: 'border-l-[#1565c0]', bg: 'bg-[#f0f4ff]' },
  proof: { borderColor: '', bg: '' },
};

const variantDefaults: Record<Variant, { label: string; counter: CounterName | null }> = {
  axiom: { label: 'Axioma', counter: 'axiom' },
  definition: { label: 'Definición', counter: 'definition' },
  theorem: { label: 'Teorema', counter: 'result' },
  proof: { label: 'Demostración', counter: null },
};

function resolveCounter(variant: Variant, label?: string): CounterName | null {
  if (variant === 'proof') return null;
  if (label?.startsWith('Método')) return 'method';
  return variantDefaults[variant].counter;
}

function CalloutInner({ title, label, collapsible, children, variant }: CalloutProps) {
  const { next } = useNumbering();
  const displayLabel = label ?? variantDefaults[variant].label;
  const counter = resolveCounter(variant, displayLabel);
  const number = counter ? next(counter) : null;

  const isProof = variant === 'proof';
  const styles = variantStyles[variant];

  const headerText = isProof
    ? displayLabel
    : number != null && title
      ? `${displayLabel} ${number} \u2014 ${title}`
      : number != null
        ? `${displayLabel} ${number}`
        : title
          ? `${displayLabel} \u2014 ${title}`
          : displayLabel;

  // Check if title contains LaTeX ($...$)
  const hasLatex = title?.includes('$');

  const header = (
    <span
      className={`font-['Source_Sans_3',sans-serif] text-xs font-semibold tracking-wide ${
        isProof ? 'italic' : ''
      } ${hasLatex ? '' : 'uppercase'}`}
    >
      {hasLatex ? (
        <>
          <span className="uppercase">
            {number != null ? `${displayLabel} ${number} — ` : `${displayLabel} — `}
          </span>
          <MathTitle text={title!} />
        </>
      ) : (
        headerText
      )}
    </span>
  );

  const body = (
    <>
      {children}
      {isProof && (
        <div className="mt-2 text-right text-sm italic text-gray-500 select-none">
          QED
        </div>
      )}
    </>
  );

  const wrapperClasses = isProof
    ? 'my-4 px-4 py-3'
    : `border-l-4 ${styles.borderColor} ${styles.bg} my-4 px-4 py-3`;

  if (collapsible) {
    return (
      <details className={`group ${wrapperClasses}`}>
        <summary className="cursor-pointer list-none flex items-center gap-1.5">
          <span className="text-gray-400 text-[10px] transition-transform duration-200 group-open:rotate-90">▶</span>
          {header}
        </summary>
        <div className="mt-2">{body}</div>
      </details>
    );
  }

  return (
    <div className={wrapperClasses}>
      <div className="mb-2">{header}</div>
      <div>{body}</div>
    </div>
  );
}

/* ---- Exported convenience components ---- */

interface SimpleCalloutProps {
  title?: string;
  label?: string;
  collapsible?: boolean;
  children: ReactNode;
}

export function Axiom({ title, label, children }: SimpleCalloutProps) {
  return (
    <CalloutInner variant="axiom" title={title} label={label}>
      {children}
    </CalloutInner>
  );
}

export function Definition({ title, label, children }: SimpleCalloutProps) {
  return (
    <CalloutInner variant="definition" title={title} label={label}>
      {children}
    </CalloutInner>
  );
}

export function Theorem({ title, label, children }: SimpleCalloutProps) {
  return (
    <CalloutInner variant="theorem" title={title} label={label}>
      {children}
    </CalloutInner>
  );
}

export function Proof({ title, label, collapsible = true, children }: SimpleCalloutProps) {
  return (
    <CalloutInner variant="proof" title={title} label={label} collapsible={collapsible}>
      {children}
    </CalloutInner>
  );
}
