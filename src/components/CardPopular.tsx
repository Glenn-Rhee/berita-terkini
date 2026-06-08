import getFormattedDate from "@/helper/getFormattedDate";
import { NewsDataNormalized as NewsData } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CardPopoularProps {
  no: number;
  dataPopular: NewsData;
}

export default function CardPopular(props: CardPopoularProps) {
  const { no, dataPopular } = props;
  return (
    <Link
      href={dataPopular.link}
      className="flex items-center md:items-start gap-x-4"
    >
      <div className="relative w-60 h-28 md:w-56 md:h-28">
        <Image
          src={dataPopular.image}
          alt={dataPopular.title + " image"}
          fill
          className="w-auto object-cover aspect-square rounded-xl"
        />
        <span className="size-9 absolute -top-3 -left-3 rounded-full bg-dark-700 text-white font-nunitoSans font-bold text-lg flex items-center justify-center">
          {no}
        </span>
      </div>
      <div className="flex flex-col justify-between md:pb-4">
        <h6 className="font-bold text-gray-1 font-nunitoSans text-start pe-12">
          {dataPopular.title}
        </h6>
        <div className="flex items-center gap-x-3">
          <span className="font-inter font-semibold text-sm text-brand-color">
            Populer
          </span>
          <div className="size-1 rounded-full bg-[#D9D9D9]" />
          <span className="font-medium font-inter text-sm text-dark-400">
            {getFormattedDate(dataPopular.isoDate)}
          </span>
        </div>
      </div>
    </Link>
  );
}
