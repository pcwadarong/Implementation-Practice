export default async function BookInfo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>Book Info</div>;
}
