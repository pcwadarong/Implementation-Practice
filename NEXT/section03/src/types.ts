export interface BookDataType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  author: string;
  publisher: string;
  coverImgUrl: string;
}

export interface ReviewDataType {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  bookId: number;
}
