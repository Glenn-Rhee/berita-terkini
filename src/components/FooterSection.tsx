import ArrowLeftIcon from "@/icon/ArrowLeftIcon";
import ArrowRightIcon from "@/icon/ArrowRightIcon";

interface FooterSectionProps {
  currentPage: number;
  totalPages: number;
  startItem: number;
  endItem: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export default function FooterSection({
  currentPage,
  totalPages,
  startItem,
  endItem,
  totalItems,
  onPageChange,
}: FooterSectionProps) {
  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <div className="hidden md:flex justify-between items-center font-inter">
      <span className="text-gray-1">
        Showing {startItem} to {endItem} of {totalItems} results
      </span>
      <div className="flex items-center gap-x-5">
        <button
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="flex items-center cursor-pointer gap-x-1 rounded-lg hover:bg-dark-8 h-10 px-3 text-dark-400 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ArrowLeftIcon /> Previous
        </button>

        {getPageNumbers().map((page, i) =>
          page === "..." ? (
            <button
              key={`ellipsis-${i}`}
              disabled
              className="font-medium text-dark-400 flex items-center justify-center size-10 rounded-lg"
            >
              ...
            </button>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`font-medium flex items-center justify-center size-10 rounded-lg transition-colors ${
                currentPage === page
                  ? "bg-brand-color text-white"
                  : "hover:bg-dark-8 text-dark-400 cursor-pointer"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="flex items-center cursor-pointer gap-x-1 rounded-lg hover:bg-dark-8 h-10 px-3 text-dark-400 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
