import Link from 'next/link';

export const convertToHyperlinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <Link
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          {part}
        </Link>
      );
    }
    return <span key={index}>{part}</span>;
  });
};
