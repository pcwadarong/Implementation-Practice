export default function BookItemSkeleton() {
  return (
    <div className="flex gap-4 py-4 border-b-[1px]">
      <div className="w-20 h-24 bg-gray-300" />
      <div className="flex flex-col gap-2">
        <div className="w-52 h-5 bg-gray-300"></div>
        <div className="w-80 h-5 bg-gray-300"></div>
        <div className="w-32 h-5 mt-4 bg-gray-300"></div>
      </div>
    </div>
  );
}
