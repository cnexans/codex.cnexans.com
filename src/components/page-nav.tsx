import Link from 'next/link';

interface NavLink {
  href: string;
  title: string;
}

interface PageNavProps {
  prev?: NavLink;
  next?: NavLink;
}

export function PageNav({ prev, next }: PageNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      className="mt-12 flex items-center justify-between border-t border-[#dee9ed] pt-6 font-['Source_Sans_3',sans-serif]"
      aria-label="Chapter navigation"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="text-sm uppercase tracking-wide text-[#7aa0b8] no-underline transition-colors hover:text-[#dee9ed]"
        >
          &larr; {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="text-sm uppercase tracking-wide text-[#7aa0b8] no-underline transition-colors hover:text-[#dee9ed]"
        >
          {next.title} &rarr;
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
