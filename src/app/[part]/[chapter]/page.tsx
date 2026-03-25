import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBookConfig, getAllChapters, getChapter, getAdjacentChapters } from '@/lib/content';
import { NumberingProvider } from '@/components/numbering-context';
import { PageNav } from '@/components/page-nav';

export const dynamic = 'force-static';

/* ---------- static params ---------- */

export function generateStaticParams() {
  return getAllChapters().map((fc) => ({
    part: fc.part.slug,
    chapter: fc.chapter.slug,
  }));
}

/* ---------- metadata ---------- */

interface PageProps {
  params: Promise<{ part: string; chapter: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { part, chapter } = await params;
  const fc = getChapter(part, chapter);
  if (!fc) return { title: 'Not Found' };
  return {
    title: `${fc.chapter.title} — ${getBookConfig().title}`,
  };
}

/* ---------- page ---------- */

export default async function ChapterPage({ params }: PageProps) {
  const { part, chapter } = await params;
  const fc = getChapter(part, chapter);
  if (!fc) notFound();

  // Dynamic MDX import
  let Content: React.ComponentType;
  try {
    const mod = await import(`@/../content/${part}/${fc.chapter.file}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  const title = fc.chapter.title;
  const { prev, next } = getAdjacentChapters(part, chapter);

  return (
    <article className="prose prose-slate max-w-none relative">
      <h1 className="font-['Crimson_Text',serif]">{title}</h1>
      <NumberingProvider>
        <Content />
      </NumberingProvider>

      <PageNav
        prev={
          prev
            ? { href: `/${prev.part.slug}/${prev.chapter.slug}`, title: prev.chapter.title }
            : undefined
        }
        next={
          next
            ? { href: `/${next.part.slug}/${next.chapter.slug}`, title: next.chapter.title }
            : undefined
        }
      />
    </article>
  );
}
