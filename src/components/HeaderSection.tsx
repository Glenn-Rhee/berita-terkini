import SearchIcon from "@/icon/SearchIcon";

interface HeaderSectionProps {
  title: string;
}

export default function HeaderSection(props: HeaderSectionProps) {
  const { title } = props;
  return (
    <header className="flex items-center justify-between w-full">
      <div
        className={
          "w-full ps-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-color before:rounded-full"
        }
      >
        <h4 className="font-bold text-2xl font-nunitoSans text-black">
          {title}
        </h4>
      </div>
      <div className="flex w-2xl h-14 pe-4 items-center bg-white border border-surface-soft rounded-lg">
        <input
          type="text"
          className="border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none shadow-none focus:shadow-none h-full w-full px-4 rounded-lg m-0 placeholder:text-disable font-inter text-dark-800 group/input"
          placeholder="Cari disini..."
        />
        <button>
          <SearchIcon />
        </button>
      </div>
    </header>
  );
}
