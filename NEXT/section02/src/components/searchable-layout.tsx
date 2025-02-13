import { useRouter } from 'next/router';
import { useState } from 'react';
import { ReactNode } from 'react';

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = () => {
    if (!query) return;
    router.push(`/search?q=${query}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('hello');
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div>
      <div className="flex">
        <input
          type="search"
          value={query}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
          placeholder="Search Books .."
          className="border p-2 flex-1"
        />
        <button type="submit" className="p-2" onClick={onSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 transform scale-x-[-1]"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 1 1-4.9 14.32l-4.38 4.38a1 1 0 1 1-1.42-1.42l4.38-4.38A8 8 0 0 1 10 2zm0 2a6 6 0 1 0 3.53 10.94l.11-.1.1-.11A6 6 0 0 0 10 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
}
