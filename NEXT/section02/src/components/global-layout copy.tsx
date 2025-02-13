import Link from 'next/link';
import { ReactNode } from 'react';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col max-w-xl min-h-screen p-8 pb-20 m-auto gap-8 bg-white shadow-xl">
      <header>
        <nav>
          <Link href={'/'}>
            <h1 className="font-bold size-4 w-fit">📚 ONE BITE BOOKS</h1>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-400">
        © CHAEN winterlood
      </footer>
    </div>
  );
}
