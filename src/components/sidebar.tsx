'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface NavLink {
  href: string;
  title: string;
}

interface SidebarProps {
  currentPart: string;
  currentChapter: string;
  chapterTitle: string;
  partTitle: string;
  bookTitle: string;
  prev?: NavLink;
  next?: NavLink;
}

export function Sidebar({ currentPart, currentChapter, chapterTitle, partTitle, bookTitle, prev, next }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Extract h2/h3 from page
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('article h2, article h3, main h2, main h3'),
    );
    setHeadings(
      els.filter((el) => el.id).map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      })),
    );
  }, []);

  // Scroll spy
  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );
    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  return (
    <>
      {/* Mobile header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-12 items-center gap-3 bg-[#29313d] px-4 lg:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle sidebar"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <span className="truncate text-sm font-semibold text-[#dee9ed] font-['Source_Sans_3',sans-serif]">
          {partTitle}
        </span>
      </div>

      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-12 lg:top-0 left-0 z-40 flex h-[calc(100%-3rem)] lg:h-full w-[280px] flex-col overflow-y-auto bg-[#29313d] font-['Source_Sans_3',sans-serif] transition-transform duration-200 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top: Codex + Part name */}
        <div className="px-5 pt-6 pb-2">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#dee9ed] no-underline hover:text-white">
            {bookTitle}
          </Link>
          <span className="mx-2 text-[#3b4b5e]">·</span>
          <span className="text-sm text-[#7aa0b8]">{partTitle}</span>
        </div>

        {/* Chapter title */}
        <div className="mx-5 pb-4 border-b border-[#3b4b5e]">
          <h3 className="mt-0 mb-0 text-base font-semibold text-white font-['Source_Sans_3',sans-serif]" style={{ fontStyle: 'normal' }}>
            {chapterTitle}
          </h3>
        </div>

        {/* In-page TOC */}
        <nav className="px-5 pt-4" aria-label="Table of contents">
          {headings.length > 0 && (
            <ul className="list-none space-y-1 m-0 p-0">
              {headings.map((h) => (
                <li key={h.id} className={h.level === 3 ? 'pl-3' : ''}>
                  <a
                    href={`#${h.id}`}
                    onClick={() => setOpen(false)}
                    className={`font-['Source_Sans_3',sans-serif] block rounded px-2 py-0.5 text-sm no-underline transition-colors ${
                      activeId === h.id
                        ? 'font-semibold text-white'
                        : 'text-[#7aa0b8] hover:text-[#dee9ed]'
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* Prev / Next */}
        <div className="border-t border-[#3b4b5e] mx-5 py-4 mt-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.1em]">
            {prev ? (
              <Link
                href={prev.href}
                onClick={() => setOpen(false)}
                className="text-[#7aa0b8] no-underline hover:text-[#dee9ed]"
              >
                ← Anterior
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={next.href}
                onClick={() => setOpen(false)}
                className="text-[#7aa0b8] no-underline hover:text-[#dee9ed]"
              >
                Siguiente →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
