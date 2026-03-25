'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  /* Extract h2/h3 headings from the page */
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('article h2, article h3, main h2, main h3'),
    );
    const items: Heading[] = elements
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      }));
    setHeadings(items);
  }, []);

  /* Intersection observer for scroll spy */
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
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

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="font-['Source_Sans_3',sans-serif] text-sm"
    >
      <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
        En esta página
      </h4>
      <ul className="list-none space-y-1 pl-0">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'pl-3' : ''}>
            <a
              href={`#${h.id}`}
              className={`block rounded px-2 py-0.5 text-sm no-underline transition-colors ${
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
    </nav>
  );
}
