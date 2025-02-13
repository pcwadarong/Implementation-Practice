import SearchableLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';
import BookItem from '@/components/book-item';
import { InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books copy';

export const getServerSideProps = async () => {
  // const allBooks = await fetchBooks();
  // const randomBooks = await fetchRandomBooks();

  const [allBooks, randomBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);
  // 직렬 실행 대신 promise.all로 병렬 실행 유도

  return {
    props: { allBooks, randomBooks },
  };
};

/*
getServerSideProps라고 약속된 서버사이드함수
컴포넌트보다 먼저 실행되어 컴포넌트에 필요한 데이터를 불러오는 함수

export const getServerSideProps = () => {
return {
  props: {
    data,
  },
}

무조건 props를 가진 객체를 반환해야 함. 이 형태가 기본
서버사이드에서만 실행하기 때문에 window.location 등의 프론트 인터렉션이 불가능
*/

export default function Home({
  allBooks,
  randomBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <section>
        <h2 className="font-bold">New Books</h2>
        {randomBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h2 className="font-bold">All Books</h2>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

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

/* 
Home 컴포넌트는 서버사이드에서 한 번, js 번들링할 때 한 번 총 두 번 렌더링이 된다
window 등의 프론트 인터렉션을 그냥 사용할 경우 첫 번째 렌더링에서 오류가 발생한다
따라서 이런 건 useEffect로 감싸줘야 함
 */
