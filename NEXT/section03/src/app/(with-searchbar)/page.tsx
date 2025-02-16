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
