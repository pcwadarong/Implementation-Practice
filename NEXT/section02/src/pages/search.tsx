import { ReactNode } from 'react';
import SearchableLayout from '@/components/searchable-layout';
import BookItem from '@/components/book-item';
import fetchBooks from '@/lib/fetch-books';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const q = context.query.q;
  const searchedBooks = await fetchBooks(q as string);
  // 가져온 모든 데이터를 거의 다 소유하고 있는 게 context.

  return {
    props: { searchedBooks },
  };
};

export default function Search({
  searchedBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return searchedBooks.length > 1 ? (
    <div>
      {searchedBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  ) : (
    <div className='my-10 w-full text-center'> 검색 결과가 없습니다. </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
