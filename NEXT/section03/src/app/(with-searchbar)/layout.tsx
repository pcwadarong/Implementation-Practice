import SearchBar from '../components/searchbar';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: '한입북스 - 검색결과',
//   description: '한입 북스에서 다양한 도서들을 만나보세요.',
// };

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
