import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>book {id}</h1>;
}

// 1개의 슬래시만 허용할 경우 [id].tsx
// 1개 이상의 슬래시일 경우 catch all seg : [...id].tsx
// 모든 경로를 허용할 경우 optional catch all segment [[...id]].tsx
