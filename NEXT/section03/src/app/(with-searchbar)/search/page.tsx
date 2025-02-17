import BookItem from '@/components/book-item';
import { BookDataType } from '@/types';

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book/search?q=${params.q}`,
  );

  if (!response.ok) return <div>오류가 발생했습니다...</div>;

  const searchedData: BookDataType[] = await response.json();
  return (
    <div>
      {searchedData.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
