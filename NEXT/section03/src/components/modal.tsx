'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      // 모달이 닫혀있다면 열고, 맨 위로 이동
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
    }
  }, []);

  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        // 모달의 바깥 영역 클릭 시 뒤로가기 (아래에서 후술)
        if ((e.target as any).nodeName === 'DIALOG') router.back();
      }}
      className="w-3/4 max-w-lg mt-5 rounded-sm backdrop:bg-black/50 p-8"
      ref={dialogRef}
    >
      {children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement,
  );
}

// modal-root 라는 아이디를 갖는 dom 요소 아래에 <dialog>children</dialog> 를 렌더링
// return <dialog>...</dialog> 로 그냥 작성하게 되면, page 컴포넌트 하위에 작성되게 됨 (div나 section 아래에 작성됨)
// 따라서 modal-root 아이디를 갖는 요소 아래에 고정적으로 배치해버리는 코드

/*
✅ 왜 (e.target as any).nodeName === 'DIALOG'가 모달의 바깥 영역을 의미할까?
📌 이벤트 타겟 (e.target)이 DIALOG 요소라면, 모달 바깥 영역이 클릭된 것!

모달(dialog) 요소는 HTML 기본 제공 태그이며, DIALOG 요소 내부를 클릭하면 e.target은 클릭된 내부 요소가 됨.
하지만 모달의 바깥쪽(배경 부분)을 클릭하면, dialog 자체가 이벤트 타겟이 됨!
*/
