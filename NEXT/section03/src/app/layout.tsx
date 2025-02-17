import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: '한입북스',
  description: '한입 북스에서 다양한 도서들을 만나보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col max-w-xl min-h-screen p-8 pb-20 m-auto gap-8 bg-white shadow-xl antialiased">
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
      </body>
    </html>
  );
}
