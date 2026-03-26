import { Sidebar } from '@/components/sidebar';
import { getChapter, getAdjacentChapters, getBookConfig } from '@/lib/content';

export const dynamic = 'force-static';

interface ChapterLayoutProps {
  children: React.ReactNode;
  params: Promise<{ part: string; chapter: string }>;
}

export default async function ChapterLayout({
  children,
  params,
}: ChapterLayoutProps) {
  const { part, chapter } = await params;
  const chapterMeta = getChapter(part, chapter);
  const partMeta = getBookConfig().parts.find((p) => p.slug === part);
  const { prev, next } = getAdjacentChapters(part, chapter);

  return (
    <div className="lg:flex">
      <Sidebar
        currentPart={part}
        currentChapter={chapter}
        chapterTitle={chapterMeta?.chapter.title ?? ''}
        partTitle={partMeta?.title ?? ''}
        bookTitle={getBookConfig().title}
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

      {/* Sidebar spacer */}
      <div className="hidden w-[280px] shrink-0 lg:block" />

      {/* Main content — overflow visible for margin notes */}
      <main className="min-w-0 flex-1 px-6 pt-16 pb-12 lg:pt-12 lg:px-16 lg:pr-[220px] overflow-visible">
        {children}
      </main>
    </div>
  );
}
