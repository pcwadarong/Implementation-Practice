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
    { cache: 'force-cache' },
  ); // 검색어 자체를 캐시할 순 없으므로, 검색 결과를 cache함 (book 리스트의 업데이트가 발생하지 않기 때문에)

  if (!response.ok) return <div>오류가 발생했습니다...</div>;

  const searchedData: BookDataType[] = await response.json();
  return (
    <div>ㄴ
      {searchedData.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
