'use client';

import { useEffect } from 'react';
import { useActionState } from 'react';
import { createReviewAction } from '@/actions/create-review-action';

export default function ReviewEditor({ bookId }: { bookId: string }) {
  // pending 결과, 실행되는 액션, 상태(진행중인지) = useActionState(실행할 것, 초기값)
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );

  // state는 있지만 status가 false가 될 때마다 (실패할 때마다) alert통해 알림.
  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form action={formAction} className="grid grid-cols-6 gap-2">
        <input name="bookId" value={bookId} hidden readOnly />
        <div className="flex gap-4">
          <label htmlFor="author" className="text-base/10 min-w-fit">
            작성자
          </label>
          <input
            name="author"
            required
            disabled={isPending}
            placeholder="이름을 입력해주세요."
            className="border p-2 rounded-sm"
          />
        </div>
        <label htmlFor="content" className="text-base/10 col-span-6">
          리뷰 작성
        </label>
        <textarea
          name="content"
          required
          disabled={isPending}
          className="border p-2 rounded-sm col-span-6"
          placeholder="주제와 무관한 댓글, 악플 등의 글은 임의로 삭제될 수 있습니다."
        />
        <button
          type="submit"
          disabled={isPending}
          className="col-end-7 justify-self-end w-fit px-4 py-2 rounded-sm bg-gray-700 text-white"
        >
          {isPending ? '...' : 'submit'}
        </button>
      </form>
    </section>
  );
}
