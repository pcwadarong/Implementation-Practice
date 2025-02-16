import Image from 'next/image';
import { convertToHyperlinks } from '@/utils/convertToHyperlinks';

export default async function BookInfo({ params }: { params: { id: string } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/book/${params.id}`,
  );
  if (!response.ok) return <div>오류가 발생했습니다...</div>;

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
