import Link from 'next/link';
import type { Metadata } from 'next';
import { getBookConfig } from '@/lib/content';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return getBookConfig().parts.map((p) => ({ part: p.slug }));
}

interface PageProps {
  params: Promise<{ part: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { part } = await params;
  const partMeta = getBookConfig().parts.find((p) => p.slug === part);
  if (!partMeta) return { title: 'Not Found' };
  return { title: `${partMeta.title} — ${getBookConfig().title}` };
}

export default async function PartPage({ params }: PageProps) {
  const { part } = await params;
  const bookConfig = getBookConfig();
  const partMeta = bookConfig.parts.find((p) => p.slug === part);
  if (!partMeta) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <Link
          href="/"
          className="font-['Source_Sans_3',sans-serif] text-sm text-[#5985a6] no-underline hover:text-[#29313d]"
        >
          ← {bookConfig.title}
        </Link>
        <h1 className="mt-4 mb-1 font-['Crimson_Text',serif] text-4xl font-bold text-[#29313d]">
          {partMeta.title}
        </h1>
        <p className="font-['Source_Sans_3',sans-serif] text-sm uppercase tracking-[0.10em] text-[#5985a6]">
          Parte {partMeta.roman}
        </p>
      </header>

      <ul className="list-none space-y-3 pl-0">
        {partMeta.chapters.map((ch, i) => (
          <li key={ch.slug}>
            <Link
              href={`/${partMeta.slug}/${ch.slug}`}
              className="group block no-underline"
            >
              <span className="font-['Source_Sans_3',sans-serif] text-sm text-[#5985a6]">
                {i + 1}.
              </span>{' '}
              <span className="font-['Source_Sans_3',sans-serif] text-lg text-[#29313d] transition-colors group-hover:text-[#5985a6]">
                {ch.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
