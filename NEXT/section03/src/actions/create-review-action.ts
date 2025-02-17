'use server';

import { revalidateTag } from 'next/cache';

// 원래 1번째 인수로 state를 받는데, 굳이 사용하지 않겠다면 _ 바로 표시함
export async function createReviewAction(_: any, formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!content || !author)
    return { status: false, error: '리뷰 내용과 작성자를 입력해주세요.' };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API_URL}/review`,
      { method: 'POST', body: JSON.stringify({ bookId, content, author }) },
    );
    if (!response.ok) throw new Error(response.statusText);
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: '',
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다: ${err}`,
    };
  }
}
