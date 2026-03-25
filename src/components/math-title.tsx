'use client';

import katex from 'katex';

interface MathTitleProps {
  text: string;
}

/**
 * Renders a string that may contain inline LaTeX ($...$).
 * Non-math parts are rendered as text, math parts via KaTeX.
 */
export function MathTitle({ text }: MathTitleProps) {
  // Split on $...$ patterns
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          // JSX escapes \\ to \\\\, restore single backslashes for KaTeX
          const latex = part.slice(1, -1).replace(/\\\\/g, '\\');
          try {
            const html = katex.renderToString(latex, {
              throwOnError: false,
              displayMode: false,
            });
            return (
              <span
                key={i}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return <span key={i}>{part}</span>;
          }
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
