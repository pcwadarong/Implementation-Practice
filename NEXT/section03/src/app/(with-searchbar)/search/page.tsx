import BookItem from '@/components/book-item';
import { BookDataType } from '@/types';
import { Suspense } from 'react';
import BookListSkeleton from '@/components/skeleton/book-list-skeleton';

import type { Metadata } from 'next';

// 현재 page 컴포넌트가 받는 매개변수를 그대로 전달 받을 수 있음
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: `${q} : 한입 북스 검색`,
    description: '검색 결과입니다..',
    openGraph: {
      title: `${q} : 한입 북스 검색`,
      description: '한입 북스에서 다양한 도서들을 만나보세요.',
      images: ['/thumbnail.png'],
    },
  };
}

async function SearchResult({ q }: { q: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book/search?q=${q}`,
    { cache: 'force-cache' },
  ); // 검색어 자체를 캐시할 순 없으므로, 검색 결과를 cache함 (book 리스트의 업데이트가 발생하지 않기 때문에)

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

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <Suspense key={q || ''} fallback={<BookListSkeleton count={3} />}>
      <SearchResult q={q || ''} />
    </Suspense>
  );
}

/*
key = {q || ''} 브라우저의 q=?가 바뀔 때마다 업데이트
부모 요소의 비동기 여부와 상관 없이, suspense 내부의 비동기 함수가 스트리밍 되도록 함
*/
