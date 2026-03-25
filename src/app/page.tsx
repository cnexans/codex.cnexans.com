import Link from 'next/link';
import { getBookConfig } from '@/lib/content';

export const dynamic = 'force-static';

export default function HomePage() {
  const bookConfig = getBookConfig();
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="mb-2 font-['Crimson_Text',serif] text-5xl font-bold text-[#29313d]">
          {bookConfig.title}
        </h1>
        <p className="font-['Source_Sans_3',sans-serif] text-lg text-[#5985a6]">
          {bookConfig.author}
        </p>
        <p className="mt-4 font-['Source_Sans_3',sans-serif] text-base text-gray-500">
          Mis apuntes compilados y pasados en limpio.
        </p>
      </header>

      {/* TOC — CSS columns (masonry) */}
      <div className="columns-1 gap-10 md:columns-2">
        {bookConfig.parts.map((part, i) => (
          <section key={part.slug} className={`break-inside-avoid ${i > 0 ? 'mt-6' : ''}`}>
            <h2 className="mt-0 mb-3 border-b border-[#dee9ed] pb-2 font-['Source_Sans_3',sans-serif] text-sm font-bold uppercase tracking-[0.10em]">
              {part.roman}. <span className="text-[#5985a6]">{part.title}</span>
            </h2>

            <ul className="list-none space-y-2 pl-0">
              {part.chapters.map((ch) => (
                <li key={ch.slug}>
                  <Link
                    href={`/${part.slug}/${ch.slug}`}
                    className="group block no-underline"
                  >
                    <span className="font-['Source_Sans_3',sans-serif] text-md leading-6 text-[#29313d] transition-colors group-hover:text-[#5985a6]">
                      {ch.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
