import ArrowLeftIcon from "@/icon/ArrowLeftIcon";
import ArrowRightIcon from "@/icon/ArrowRightIcon";

export default function FooterSection() {
  return (
    <div className="flex justify-between items-center font-inter">
      <span className="text-gray-1">Showing 1 to 10 of 97 results</span>
      <div className="flex items-center gap-x-5">
        <button className="flex items-center cursor-pointer gap-x-1 rounded-lg hover:bg-dark-8 h-10 px-3 text-dark-400">
          <ArrowLeftIcon /> Previous
        </button>
        <button className="bg-brand-color cursor-pointer font-medium text-white flex items-center justify-center size-10 rounded-lg">
          1
        </button>
        <button className="font-medium cursor-pointer hover:bg-dark-8 transition-colors text-dark-400 flex items-center justify-center size-10 rounded-lg">
          2
        </button>
        <button className="font-medium cursor-pointer hover:bg-dark-8 transition-colors text-dark-400 flex items-center justify-center size-10 rounded-lg">
          ...
        </button>
        <button className="font-medium cursor-pointer hover:bg-dark-8 transition-colors text-dark-400 flex items-center justify-center size-10 rounded-lg">
          8
        </button>
        <button className="font-medium cursor-pointer hover:bg-dark-8 transition-colors text-dark-400 flex items-center justify-center size-10 rounded-lg">
          9
        </button>
        <button className="flex items-center cursor-pointer gap-x-1 rounded-lg hover:bg-dark-8 h-10 px-3 text-dark-400">
          Next <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
