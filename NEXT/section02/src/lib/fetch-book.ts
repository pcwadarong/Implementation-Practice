import { BookDataType } from '@/types';

export default async function fetchBook(
  id: number,
): Promise<BookDataType | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
