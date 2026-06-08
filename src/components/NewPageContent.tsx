"use client";
import Card from "@/components/Card";
import FooterSection from "@/components/FooterSection";
import ResponseError from "@/error/ResponseError";
import { NewsData, ResponsePayload } from "@/types";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import { PopularCardError } from "./PopularCardError";
const ITEMS_PER_PAGE = 16;

export default function NewPageContent() {
  const [dataNews, setDataNews] = useState<NewsData[] | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          "https://berita-indo-api-next.vercel.app/api/antara-news/terkini",
        );
        if (!res.ok) throw new ResponseError(res.status, "Failed get data!");
        const data = (await res.json()) as ResponsePayload<NewsData[]>;
        setDataNews(data.data);
      } catch (error) {
        if (error instanceof ResponseError) setErrorMsg(error.message);
        else setErrorMsg("Internal server error!");
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  const totalPages = dataNews ? Math.ceil(dataNews.length / ITEMS_PER_PAGE) : 0;

  const paginatedData = dataNews
    ? dataNews.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      )
    : null;

  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, dataNews?.length ?? 0);
  const totalItems = dataNews?.length ?? 0;

  return (
    <div className="flex flex-col gap-y-32 justify-between">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
        {errorMsg
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <PopularCardError key={i} message={errorMsg} />
            ))
          : paginatedData
            ? paginatedData.map((data, i) => <Card data={data} key={i} />)
            : Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
      </div>
      <FooterSection
        currentPage={currentPage}
        totalPages={totalPages}
        startItem={startItem}
        endItem={endItem}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
