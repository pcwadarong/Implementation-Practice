import Image from 'next/image';
import { convertToHyperlinks } from '@/utils/convertToHyperlinks';
import { notFound } from 'next/navigation';

//export const dynamicParams = false;
// 아래에서 미리 작성한 1,2,3 외에는 모두 404로 반환함

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
// page router의 미리 빌드할 예시 페이지를 제공하는 기능과 같음.
// 실제로 build할 때 1,2,3 페이지가 미리 만들어져서 풀 라우트 캐시로 작동함.

async function BookDetail({ id }: { id: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book/${id}`,
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book = await response.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section className="flex flex-col gap-4">
      <div
        className="bg-coverImgUrl bg-center relative flex min-w-full justify-center p-5 h-96"
        style={{ backgroundImage: `url(${coverImgUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <Image
          src={coverImgUrl}
          alt="book cover image"
          width={270}
          height={350}
          className="relative z-10"
        />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p>{subTitle}</p>
        <div className="text-gray-400">
          {author} | {publisher}
        </div>
      </div>
      <p className="border p-2 flex-1 rounded-sm whitespace-pre-wrap">
        {convertToHyperlinks(description)}
      </p>
    </section>
  );
}

function ReviewEditor({ bookId }: { bookId: string }) {
  async function createReviewAction(formData: FormData) {
    'use server';
    const content = formData.get('content')?.toString();
    const author = formData.get('author')?.toString();

    if (!content || !author) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API_URL}/review`,
        { method: 'POST', body: JSON.stringify({ bookId, content, author }) },
      );
      console.log(bookId, content, author);
      console.log(response.status);
    } catch (err) {
      console.error(err);
      return;
    }
  }

  return (
    <section>
      <form action={createReviewAction}>
        <input name="content" required placeholder="리뷰 내용" />
        <input name="author" required placeholder="작성자" />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default async function BookInfo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-8">
      <BookDetail id={id} />
      <ReviewEditor bookId={id} />
    </div>
  );
}
