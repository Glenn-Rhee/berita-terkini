import getFormattedDate from "@/helper/getFormattedDate";
import { NewsData } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  data: NewsData;
}

export default function Card(props: CardProps) {
  const { data } = props;
  return (
    <Link href={data.link} className="flex gap-y-4 flex-col w-64">
      <Image
        src={data.image}
        alt={data.title + " image"}
        width={220}
        height={220}
        className="aspect-square w-full object-cover rounded-xl"
      />
      <h6 className="line-clamp-3 text-justify font-semibold font-inter text-lg text-gray-1">
        {data.description}
      </h6>
      <div className="flex gap-x-3 font-inter">
        <span className="text-brand-color font-semibold text-sm">Nasional</span>
        <div className="size-1 rounded-full bg-[#D9D9D9]" />
        <span className="font-medium font-inter text-sm text-dark-400">
          {getFormattedDate(data.isoDate)}
        </span>
      </div>
    </Link>
  );
}
