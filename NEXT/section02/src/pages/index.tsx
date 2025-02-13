import SearchableLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';

export default function Home() {
  return <div>book lists</div>;
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
