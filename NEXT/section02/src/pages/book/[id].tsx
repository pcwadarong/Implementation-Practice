// import { BookDataType } from '@/types';
import Image from 'next/image';

const mockData = {
  title: '한 입 크기로 잘라 먹는 리액트',
  subTitle: '자바스크립트 기초부터 애플리케이션 배포까지',
  description:
    '자바스크립트 기초부터 애플리케이션 배포까지\n처음 시작하기 딱 좋은 리액트 입문서\n\n이 책은 웹 개발에서 가장 많이 사용하는 프레임워크인 리액트 사용 방법을 소개합니다. 인프런, 유데미에서 5000여 명이 수강한 베스트 강좌를 책으로 엮었습니다. 프런트엔드 개발을 희망하는 사람들을 위해 리액트의 기본을 익히고 다양한 앱을 구현하는 데 부족함이 없도록 만들었습니다. \n\n자바스크립트 기초 지식이 부족해 리액트 공부를 망설이는 분, 프런트엔드 개발을 희망하는 취준생으로 리액트가 처음인 분, 퍼블리셔나 백엔드에서 프런트엔드로 직군 전환을 꾀하거나 업무상 리액트가 필요한 분, 뷰, 스벨트 등 다른 프레임워크를 쓰고 있는데, 실용적인 리액트를 배우고 싶은 분, 신입 개발자이지만 자바스크립트나 리액트 기초가 부족한 분에게 유용할 것입니다.',
  author: '이정환',
  publisher: '프로그래밍인사이트',
  coverImgUrl:
    'https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg',
};

export default function Page() {
  const { title, subTitle, description, author, publisher, coverImgUrl } =
    mockData;

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
      <p className="border p-2 flex-1 rounded-sm whitespace-pre-wrap">{description}</p>
    </section>
  );
}

// 1개의 슬래시만 허용할 경우 [id].tsx
// 1개 이상의 슬래시일 경우 catch all seg : [...id].tsx
// 모든 경로를 허용할 경우 optional catch all segment [[...id]].tsx
