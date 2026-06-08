export default function CardSkeleton() {
  return (
    <div className="flex gap-y-4 flex-col w-full">
      <div className="aspect-square w-full rounded-xl bg-gray-200 animate-pulse" />

      <div className="flex flex-col gap-y-2">
        <div className="h-4 w-full rounded-md bg-gray-200 animate-pulse" />
        <div className="h-4 w-[90%] rounded-md bg-gray-200 animate-pulse" />
        <div className="h-4 w-[65%] rounded-md bg-gray-200 animate-pulse" />
      </div>

      <div className="flex items-center gap-x-3">
        <div className="h-3 w-14 rounded-md bg-gray-200 animate-pulse" />
        <div className="size-1 rounded-full bg-gray-200" />
        <div className="h-3 w-16 rounded-md bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
}
