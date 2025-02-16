import BookItem from '@/components/book-item';
import { BookDataType } from '@/types';

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
