import books from '@/mock/books.json';
import BookItem from '@/components/book-item';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <section>
        <h2 className="font-bold">New Books</h2>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h2 className="font-bold">All Books</h2>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}
