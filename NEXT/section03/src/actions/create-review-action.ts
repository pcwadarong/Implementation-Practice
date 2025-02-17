'use server';

import { revalidateTag } from 'next/cache';

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!content || !author) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API_URL}/review`,
      { method: 'POST', body: JSON.stringify({ bookId, content, author }) },
    );
    console.log(response.status);
    revalidateTag(`review-${bookId}`);
  } catch (err) {
    console.error(err);
    return;
  }
}

/*
리뷰를 새로 작성하고 바로 새로고침 하기 위해 사용함
revalidatePath(`/book/${bookId}`);

서버 컴포넌트에서만 호출 가능. 해당 페이지, 모든 데이터 재생성. - 같은 페이지 내의 풀 라우트, 캐시 모두 삭제됨
하지만 풀 라우트를 삭제만 할 뿐 새롭게 생성하진 않음. 다음 차례 접속 요청을 해야 다이나믹 페이지로 다시 생성됨.


이외의 revalidate 활용 방법

1. 특정 주소의 해당 페이지만 재검증: revalidate(`/book/${bookId}`);
2. 특정 경로의 모든 동적 페이지를 재검증: revalidate("/book/${id}", "page"); - 폴더 혹은 파일의 경로 명시
3. 특정 경로의 레이아웃을 갖는 모든 페이지 재검증: revalidate("/(with-searchbar)", "layout");
4. 모든 데이터 재검증:  revalidate("", "layout");
5. 태그 기준, 데이터 캐시 재검증: revalidateTag(`review-${id}`);
   -> const response = await fetch('path'), {next: {tags: [`review-${id}`]}};
   해당 태그를 갖는 모든 데이터를 재검증함
*/
