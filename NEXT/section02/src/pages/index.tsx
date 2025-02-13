import localFont from 'next/font/local';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header>
        <nav>
          <Link href={'/'}>
            <h1>한입 북스</h1>
          </Link>
          <Link href={'/search'}>search</Link>
          <Link href={'/book'}>books</Link>
        </nav>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

/* 
라우터를 사용하여 프로그래메틱하게 이동시키면 따로 지정해야 함.

useEffect(()=>{
  router.prefetch("/link");
},[]);
 */

/* 
링크 컴퍼넌트를 사용하면 자동으로 프리패칭이 된다. 
링크 컴퍼넌트의 프리패칭을 해제하려면,

<Link href={'/search'} prefetch={false}>search</Link>
 */
