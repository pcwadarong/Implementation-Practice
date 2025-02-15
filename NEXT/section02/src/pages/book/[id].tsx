import Image from 'next/image';
import { useRouter } from 'next/router';
import fetchBook from '@/lib/fetch-book';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { convertToHyperlinks } from '@/utils/convertToHyperlinks';

// 동적 경로일 때 paths의 예시를 몇 가지 제공해야만 가능
export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
    ],
    fallback: 'blocking',
  };
};
// fallback: false - 나머지 페이지를 not found
// blocking - 나머지 페이지를 SSR로 생성
// true - 빈껍데기만 보여줬다가 생성해서 보여줌

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = Number(context.params!.id);
  const book = await fetchBook(id);

  if (!book) {
    // 404 페이지로 return
    return {
      notFound: true,
    };
  }

  return {
    props: { book },
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return '상세 정보를 불러오는 중입니다...'; //fallback 상태
  // if (!book) return '문제가 발생했습니다.'; //데이터가 아예 없는 상태 -> 위에서 notFound로 return하여 주석처리

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

// 1개의 슬래시만 허용할 경우 [id].tsx
// 1개 이상의 슬래시일 경우 catch all seg : [...id].tsx
// 모든 경로를 허용할 경우 optional catch all segment [[...id]].tsx
