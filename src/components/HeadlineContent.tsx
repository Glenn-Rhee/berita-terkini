"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowuprightIcon from "@/icon/ArrowuprightIcon";
import CalendarIcon from "@/icon/CalendarIcon";
import ChevronLeft from "@/icon/ChevronLeft";
import ChevronRight from "@/icon/ChevronRight";
import { NewsData } from "@/types";
import { useState } from "react";
import { RefreshCcw, WifiOffIcon } from "lucide-react";

interface HeadlineContentProps {
  dataHeadline: NewsData[];
  errorMsg: string | null;
}

export default function HeadlineContent(props: HeadlineContentProps) {
  const { dataHeadline: initialData, errorMsg } = props;
  const [dataHeadline, setDataHeadline] = useState<NewsData>(initialData[0]);
  const [pagination, setPagination] = useState<number>(1);
  const formattedDate = new Date(dataHeadline.isoDate).toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  if (errorMsg) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 font-inter text-center h-[50dvh] w-full bg-gray-50 rounded-2xl border border-gray-200 p-8">
        <div className="size-12 rounded-full bg-red-50 flex items-center justify-center">
          <WifiOffIcon className="text-error-500 w-5 h-5" />
        </div>
        <p className="font-semibold text-gray-900">Gagal memuat headline</p>
        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
          {errorMsg}
        </p>
        <button className="text-sm font-semibold text-error-500 border border-red-200 rounded-lg px-4 py-1.5 hover:bg-red-50 flex items-center gap-1.5">
          <RefreshCcw className="w-4 h-4" /> Coba lagi
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="font-inter flex flex-col gap-y-3 w-lg lg:">
          <h6 className="text-dark-400 font-semibold">Headline</h6>
          <h1 className="font-nunitoSans font-bold text-4xl text-gray-1">
            {dataHeadline.title}
          </h1>
          <p className="text-gray-2">{dataHeadline.description}</p>
          <span className="text-sm flex items-center gap-x-2 font-medium text-dark-400">
            <CalendarIcon /> {formattedDate}
          </span>
          <Link
            href={dataHeadline.link}
            target="_blank"
            className="text-brand-color font-medium flex items-center gap-x-2 mt-4"
          >
            Baca Selengkapnya <ArrowuprightIcon />
          </Link>
        </div>
        <Image
          src={dataHeadline.image}
          alt="Headline Image"
          width={500}
          height={417}
          loading="eager"
          className="object-cover rounded-[20px] aspect-video w-auto h-auto"
        />
      </div>
      <div className="flex items-center gap-x-4 font-inter">
        <button
          className="cursor-pointer"
          disabled={pagination <= 1}
          onClick={() => {
            setPagination((prev) => prev - 1);
            setDataHeadline(initialData[pagination - 1]);
          }}
        >
          <ChevronLeft />
        </button>
        <span className="text-dark-400 font-medium text-sm">{pagination}</span>
        <span className="text-dark-400 font-medium text-sm">dari</span>
        <span className="text-dark-400 font-medium text-sm">5</span>
        <button
          className="cursor-pointer"
          disabled={pagination >= 5}
          onClick={() => {
            setPagination((prev) => prev + 1);
            setDataHeadline(initialData[pagination - 1]);
          }}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
}
