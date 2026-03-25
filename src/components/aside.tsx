'use client';

import { type ReactNode } from 'react';

interface AsideProps {
  children: ReactNode;
}

/**
 * Margin note component:
 * - Desktop: floats in the right margin next to the referenced content
 * - Mobile: appears inline as a subtle indented block
 */
export function Aside({ children }: AsideProps) {
  return (
    <aside className="
      relative my-4 border-t border-[#dee9ed] pt-2
      text-[14px] leading-[20px] text-[#222]
      font-['Crimson_Text',serif]

      lg:float-right lg:clear-right
      lg:w-[180px] lg:-mr-[200px]
      lg:ml-4 lg:my-0 lg:border-t-0 lg:pt-0
    ">
      {children}
    </aside>
  );
}
