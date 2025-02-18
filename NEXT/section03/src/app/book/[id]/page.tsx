import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BookDataType, ReviewDataType } from '@/types';
import ReviewEditor from '@/components/review-editor';
import ReviewItem from '@/components/review-item';
import { convertToHyperlinks } from '@/utils/convertToHyperlinks';
import type { Metadata } from 'next';

// 현재 page 컴포넌트가 받는 매개변수를 그대로 전달 받을 수 있음
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book/${id}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const book: BookDataType = await response.json();

  return {
    title: `${book.title} : 한입 북스`,
    description: book.description,
    openGraph: {
      title: `${book.title} : 한입 북스`,
      description: book.description,
      images: [book.coverImgUrl],
    },
  };
}

//export const dynamicParams = false;

export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book/`,
  );
  if (!response.ok) throw new Error(`${response.statusText}`);
  const books: BookDataType[] = await response.json();

  return books.map((book) => ({ id: book.id.toString() }));
}
// page router의 미리 빌드할 예시 페이지를 제공하는 기능과 같음.

// return [{ id: '1' }, { id: '2' }, { id: '3' }];
// 아래에서 미리 작성한 1,2,3 외에는 모두 404로 반환함
// 실제로 build할 때 1,2,3 페이지가 미리 만들어져서 풀 라우트 캐시로 작동함.

async function BookDetail({ id }: { id: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book/${id}`,
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    throw new Error(`Book info fetch failed: ${response.statusText}`);
  }

  const book: BookDataType = await response.json();
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

async function ReviewList({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/review/book/${bookId}`,
    { next: { tags: [`review-${bookId}`] } },
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed: ${response.statusText}`);
  }

  const reviews: ReviewDataType[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
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
      <hr className="border-t border-gray-300 my-4" />
      <ReviewEditor bookId={id} />
      <hr className="border-t border-gray-300 my-4" />
      <h3 className="font-bold text-lg">Reviews</h3>
      <ReviewList bookId={id} />
    </div>
  );
}
