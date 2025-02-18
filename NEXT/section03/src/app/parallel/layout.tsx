import { ReactNode } from 'react';

export default async function Layout({
  children,
  chat,
  notifications,
}: {
  children: ReactNode;
  chat: ReactNode;
  notifications: ReactNode;
}) {
  return (
    <div className="flex">
      <main className="flex-1">{children}</main>
      <aside className="w-1/4">{chat}</aside>
      <aside className="w-1/4">{notifications}</aside>
    </div>
  );
}
