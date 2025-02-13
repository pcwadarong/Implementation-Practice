import { BookDataType } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookDataType) {
  return (
    <Link href={`/book/${id}`} className="flex gap-4 py-4 border-b-[1px]">
      <Image src={coverImgUrl} alt="Book cover Image" width="80" height="100" />
      <div>
        <p className="font-bold">{title}</p>
        <p>{subTitle}</p>
        <div className="text-gray-400 mt-4">
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
