import Image from 'next/image';
import fetchBook from '@/lib/fetch-book';
import { GetServerSidePropsContext } from 'next';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = Number(context.params!.id);
  const book = await fetchBook(id);

  return {
    props: { book },
  };
};

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return '문제가 발생했습니다.';

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
        {description}
      </p>
    </section>
  );
}

// 1개의 슬래시만 허용할 경우 [id].tsx
// 1개 이상의 슬래시일 경우 catch all seg : [...id].tsx
// 모든 경로를 허용할 경우 optional catch all segment [[...id]].tsx
