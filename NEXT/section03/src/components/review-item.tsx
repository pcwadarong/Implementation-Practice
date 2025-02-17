import { ReviewDataType } from '@/types';
import ReviewItemDeleteButton from './review-item-delete-button';

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  bookId,
}: ReviewDataType) {
  return (
    <div className="mb-4 pb-4 border-b">
      <div className="flex justify-between">
        <span className="font-bold">{author}</span>
        <ReviewItemDeleteButton reviewId={id} bookId={bookId}/>
      </div>
      <p className="mb-2">{content}</p>
      <p className="text-gray-700 text-xs">
        {new Date(createdAt).toLocaleString()}
      </p>
    </div>
  );
}
