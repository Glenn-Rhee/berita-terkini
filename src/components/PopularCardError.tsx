import { AlertCircleIcon } from "lucide-react";

export function PopularCardError({ message }: { message: string }) {
  return (
    <div className="flex flex-col font-inter items-center justify-center gap-y-2 text-center min-h-35 bg-gray-50 rounded-xl border border-gray-200 px-4 py-5">
      <div className="size-9 rounded-full bg-red-50 flex items-center justify-center">
        <AlertCircleIcon className="size-10 text-error-500" />
      </div>
      <p className="text-sm font-semibold text-gray-900">Gagal memuat</p>
      <p className="text-xs text-gray-400 leading-relaxed">{message}</p>
    </div>
  );
}
