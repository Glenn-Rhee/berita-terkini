import getFormattedDate from "@/helper/getFormattedDate";
import { NewsDataNormalized as NewsData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { NewsListContentProps } from "./NewListContent";

interface CardProps {
  data: NewsData;
  category: NewsListContentProps["category"];
}

export default function Card(props: CardProps) {
  const { data, category } = props;
  return (
    <Link href={data.link} className="flex gap-y-4 flex-col w-full">
      <div className="w-full relative h-48">
        <Image
          src={data.image}
          alt={data.title + " image"}
          fill
          loading="lazy"
          className="aspect-square w-full object-cover rounded-xl"
        />
      </div>
      <h6 className="line-clamp-3 text-justify font-semibold font-inter text-lg text-gray-1">
        {data.description}
      </h6>
      <div className="flex gap-x-3 font-inter">
        <span className="text-brand-color font-semibold text-sm">
          {category}
        </span>
        <div className="size-1 rounded-full bg-[#D9D9D9]" />
        <span className="font-medium font-inter text-sm text-dark-400">
          {getFormattedDate(data.isoDate)}
        </span>
      </div>
    </Link>
  );
}
