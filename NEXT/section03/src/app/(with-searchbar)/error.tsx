'use client';
import { useRouter } from 'next/navigation';
// 서버, 클라이언트 측 오류에 모두 대응하도록 클라이언트 컴포넌트로 적용
// (클라이언트 컴포넌트는 서버와 클라이언트에 2번 실행되기 때문)

import { startTransition, useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="text-center">
      <h3>오류가 발생했습니다.</h3>
      {/* <button onClick={() => reset()}>reload</button> */}
      {/* <button onClick={() => window.location.reload()}>reload</button> */}
      {/* <button
        onClick={() => {
          router.refresh();
          reset();
        }}
      >
        reload
      </button> */}
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        reload
      </button>
    </div>
  );
}