"use client";
import Card from "@/components/Card";
import FooterSection from "@/components/FooterSection";
import ResponseError from "@/error/ResponseError";
import { NewsData, ResponsePayload } from "@/types";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import { PopularCardError } from "./PopularCardError";
import SearchIcon from "@/icon/SearchIcon";

interface NewsListContentProps {
  apiUrl: string;
  itemsPerPage: number;
  title: string;
}

export default function NewsListContent({
  apiUrl,
  itemsPerPage,
  title,
}: NewsListContentProps) {
  const [dataNews, setDataNews] = useState<NewsData[] | null>(null);
  const [originalData, setOriginalData] = useState<NewsData[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [valueSearch, setValueSearch] = useState<string>("");

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new ResponseError(res.status, "Failed get data!");
        const data = (await res.json()) as ResponsePayload<NewsData[]>;
        setDataNews(data.data);
        setOriginalData(data.data);
      } catch (error) {
        if (error instanceof ResponseError) setErrorMsg(error.message);
        else setErrorMsg("Internal server error!");
      }
    };
    fetchedData();
  }, [apiUrl]);

  const totalPages = dataNews ? Math.ceil(dataNews.length / itemsPerPage) : 0;
  const paginatedData = dataNews
    ? dataNews.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    : null;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, dataNews?.length ?? 0);
  const totalItems = dataNews?.length ?? 0;

  const handleSearch = () => {
    if (valueSearch === "") {
      setDataNews(originalData);
      setCurrentPage(1);
      return;
    }
    const filtered = originalData.filter((data) =>
      data.title.toLowerCase().includes(valueSearch.toLowerCase()),
    );
    setDataNews(filtered);
    setCurrentPage(1);
  };

  return (
    <section className="flex flex-col gap-y-8">
      <header className="flex items-center justify-between w-full">
        <div className="w-full ps-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-color before:rounded-full">
          <h4 className="font-bold text-2xl font-nunitoSans text-black">
            {title}
          </h4>
        </div>
        <div className="flex w-2xl h-14 pe-4 items-center bg-white border border-surface-soft rounded-lg">
          <input
            type="text"
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSearch()}
            className="border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none shadow-none focus:shadow-none h-full w-full px-4 rounded-lg m-0 placeholder:text-disable font-inter text-dark-800"
            placeholder="Cari disini..."
          />
          <button onClick={handleSearch}>
            <SearchIcon />
          </button>
        </div>
      </header>

      <div className="flex flex-col gap-y-32 justify-between">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {errorMsg ? (
            Array.from({ length: itemsPerPage }).map((_, i) => (
              <PopularCardError key={i} message={errorMsg} />
            ))
          ) : paginatedData === null ? (
            Array.from({ length: itemsPerPage }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          ) : paginatedData.length === 0 ? (
            <div className="col-span-2 md:col-span-4 flex flex-col font-inter items-center justify-center gap-y-3 py-16 text-center">
              <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center">
                <SearchIcon />
              </div>
              <p className="font-nunitoSans font-bold text-xl text-gray-1">
                Hasil tidak ditemukan
              </p>
              <p className="text-sm text-dark-400 max-w-xs">
                Tidak ada berita yang cocok dengan{" "}
                <span className="font-semibold">{valueSearch}</span>. Coba kata
                kunci lain.
              </p>
              <button
                onClick={() => {
                  setDataNews(originalData);
                  setValueSearch("");
                  setCurrentPage(1);
                }}
                className="mt-2 text-sm font-semibold text-brand-color hover:underline"
              >
                Tampilkan semua berita
              </button>
            </div>
          ) : (
            paginatedData.map((data, i) => <Card data={data} key={i} />)
          )}
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
    </section>
  );
}
