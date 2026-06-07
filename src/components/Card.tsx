import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <Link href={"/"} className="flex gap-y-4 flex-col w-64">
      <Image
        src={"/img/headline-ex.png"}
        alt="1"
        width={220}
        height={220}
        className="aspect-square w-full object-cover rounded-xl"
      />
      <h6 className="line-clamp-3 text-justify font-semibold font-inter text-lg text-gray-1">
        Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di
        RSUD Dr. Soetomo
      </h6>
      <div className="flex gap-x-3 font-inter">
        <span className="text-brand-color font-semibold text-sm">Nasional</span>
        <div className="size-1 rounded-full bg-[#D9D9D9]" />
        <span className="font-medium font-inter text-sm text-dark-400">
          22 Jan 2024
        </span>
      </div>
    </Link>
  );
}
