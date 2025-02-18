import BookItem from '@/components/book-item';
import { BookDataType } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '한입북스',
  description: '한입 북스에서 다양한 도서들을 만나보세요.',
  openGraph: {
    title: '한입 북스',
    description: '한입 북스에서 다양한 도서들을 만나보세요.',
    images: ['/thumbnail.png'],
  },
};

export const dynamic = 'auto';
// 특정 페이지의 유형을 !강제로! Static, Dynamic 페이지로 설정
// 1. auto : 기본값, 아무것도 강제하지 않음
// 2. force-dynamic : 강제로 dynamic
// 3. force-static : 강제로 static
// 4. error : 강제로 static으로 변환하려고 하지만 오류가 발생할 경우 build 로그에 error를 표시

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book`,
  );
  if (!response.ok) return <div>오류가 발생했습니다...</div>;
  const allBooks: BookDataType[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book/random`,
    { next: { revalidate: 3 } },
  );
  if (!response.ok) return <div>오류가 발생했습니다...</div>;
  const recoBooks: BookDataType[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <section>
        <h2 className="font-bold">New Books</h2>
        <RecoBooks />
      </section>
      <section>
        <h2 className="font-bold">All Books</h2>
        <AllBooks />
      </section>
    </div>
  );
}

/*
데이터 캐시(data cache) : 불 필요한 데이터 요청의 수를 줄여서 웹 서비스의 성능을 크게 개선할 수 있음
const response = await fetch(`~/api`, {cache: options});
* 오직 fetch 메서드로만 가능. axios 등은 불가능

1. { cache: 'no-store' } : 데이터를 절대 캐싱 x 매번 업데이트 // 기본값
2. { cache: 'force-cache' } : 요청의 결과를 무조건 캐싱하여 한 번 호출된 이후에는 다시 호출하지 않음 (=SSG)
3. { next: { revalidate: 10 } } : 일정 주기로 업데이트함 (=ISR)
4. { next: { tags: ['a'] } } : 트리거가 나타나면 업데이트함 (=ON DEMAND ISR)
*/
