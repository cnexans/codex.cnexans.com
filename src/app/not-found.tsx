import Link from 'next/link';

export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-2 font-['Crimson_Text',serif] text-6xl font-bold text-[#29313d]">
        404
      </h1>
      <p className="mb-8 font-['Source_Sans_3',sans-serif] text-lg text-gray-500">
        Esta página no existe.
      </p>
      <Link
        href="/"
        className="font-['Source_Sans_3',sans-serif] text-sm uppercase tracking-wide text-[#5985a6] no-underline transition-colors hover:text-[#29313d]"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
