export default function NewsCardSkeleton() {
  return (
    <div className="flex gap-x-4">
      <div className="relative shrink-0">
        <div className="w-22 h-22 rounded-xl bg-gray-200 animate-pulse" />
        <div className="size-9 absolute -top-3 -left-3 rounded-full bg-gray-200 animate-pulse" />
      </div>

      <div className="flex flex-col justify-between pb-4 flex-1 gap-y-2">
        <div className="flex flex-col gap-y-2 pe-12">
          <div className="h-3.5 w-full rounded-md bg-gray-200 animate-pulse" />
          <div className="h-3.5 w-[85%] rounded-md bg-gray-200 animate-pulse" />
          <div className="h-3.5 w-[60%] rounded-md bg-gray-200 animate-pulse" />
        </div>

        <div className="flex items-center gap-x-3">
          <div className="h-3 w-12 rounded-md bg-gray-200 animate-pulse" />
          <div className="size-1 rounded-full bg-gray-200" />
          <div className="h-3 w-16 rounded-md bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
