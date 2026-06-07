import Image from "next/image";
import ArrowLeftIcon from "@/icon/ArrowLeftIcon";
import ArrowRightIcon from "@/icon/ArrowRightIcon";
import SearchIcon from "@/icon/SearchIcon";

export default function Recomendation() {
  return (
    <section className="my-16 flex flex-col gap-y-8">
      <div className="flex items-center justify-between w-full">
        <div
          className={
            "w-full ps-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-color before:rounded-full"
          }
        >
          <h4 className="font-bold text-2xl font-nunitoSans text-black">
            Rekomendasi Untuk Anda
          </h4>
        </div>
        <div className="flex w-2xl h-14 pe-4 items-center bg-white border border-surface-soft rounded-lg">
          <input
            type="text"
            className="
                        border-none
                        outline-none
                        ring-0
                        focus:ring-0
                        focus:outline-none
                        focus:border-none
                        shadow-none
                        focus:shadow-none
                        h-full w-full
                        px-4
                        rounded-lg
                        m-0
                        placeholder:text-disable
                        font-inter
                        text-dark-800
                        group/input
                    "
            placeholder="Cari disini..."
          />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-32 justify-between">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex gap-y-4 flex-col w-64">
              <Image
                src={"/img/headline-ex.png"}
                alt="1"
                width={220}
                height={220}
                className="aspect-square w-full object-cover rounded-xl"
              />
              <h6 className="line-clamp-3 text-justify font-semibold font-inter text-lg text-gray-1">
                Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
                Session di RSUD Dr. Soetomo
              </h6>
              <div className="flex gap-x-3 font-inter">
                <span className="text-brand-color font-semibold text-sm">
                  Nasional
                </span>
                <div className="size-1 rounded-full bg-[#D9D9D9]" />
                <span className="font-medium font-inter text-sm text-dark-400">
                  22 Jan 2024
                </span>
              </div>
            </div>
          ))}
        </div>
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
      </div>
    </section>
  );
}
