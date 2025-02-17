'use client';
import { deleteReviewAction } from '@/actions/delete-review.action';
import { useActionState } from 'react';
import { useRef, useEffect } from 'react';

export default function ReviewItemDeleteButton({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction} ref={formRef}>
      <input name="reviewId" value={reviewId} hidden readOnly />
      <input name="bookId" value={bookId} hidden readOnly />
      {isPending ? (
        <div>...</div>
      ) : (
        <div
          onClick={() => formRef.current?.requestSubmit()}
          className="text-sm cursor-pointer"
        >
          delete
        </div>
      )}
    </form>
  );
}

// 버튼이 아니라 div, a 태그 등으로 제출해야 할 때 위와 같이 활용함.
