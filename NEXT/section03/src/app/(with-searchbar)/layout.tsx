import SearchBar from '../../components/searchbar';
import { Suspense } from 'react';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
