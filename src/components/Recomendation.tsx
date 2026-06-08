"use client";
import Card from "./Card";
import FooterSection from "./FooterSection";
import { useEffect, useState } from "react";
import { NewsData, ResponsePayload } from "@/types";
import ResponseError from "@/error/ResponseError";
import { PopularCardError } from "./PopularCardError";
import CardSkeleton from "./CardSkeleton";
import SearchIcon from "@/icon/SearchIcon";

const ITEMS_PER_PAGE = 8;

export default function Recomendation() {
  const [dataRecomendation, setDataRecomendation] = useState<NewsData[] | null>(
    null,
  );
  const [originalData, setOriginalData] = useState<NewsData[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [valueSearch, setValueSearch] = useState<string>("");

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          "https://berita-indo-api-next.vercel.app/api/antara-news/terkini",
        );
        if (!res.ok) throw new ResponseError(res.status, "Failed get data!");
        const data = (await res.json()) as ResponsePayload<NewsData[]>;
        setDataRecomendation(data.data);
        setOriginalData(data.data);
      } catch (error) {
        if (error instanceof ResponseError) setErrorMsg(error.message);
        else setErrorMsg("Internal server error!");
      }
    };
    fetchedData();
  }, []);

  const totalPages = dataRecomendation
    ? Math.ceil(dataRecomendation.length / ITEMS_PER_PAGE)
    : 0;

  const paginatedData = dataRecomendation
    ? dataRecomendation.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      )
    : null;

  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(
    currentPage * ITEMS_PER_PAGE,
    dataRecomendation?.length ?? 0,
  );
  const totalItems = dataRecomendation?.length ?? 0;

  return (
    <section className="my-16 flex flex-col gap-y-8">
      <header className="flex items-center justify-between w-full">
        <div
          className={
            "w-full ps-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-color before:rounded-full"
          }
        >
          <h4 className="font-bold text-2xl font-nunitoSans text-black">
            Rekomendasi untuk anda
          </h4>
        </div>
        <div className="flex w-2xl h-14 pe-4 items-center bg-white border border-surface-soft rounded-lg">
          <input
            type="text"
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                if (valueSearch === "") {
                  setDataRecomendation(originalData);
                  return;
                }
                const dataFilttered =
                  originalData?.filter((data) =>
                    data.title
                      .toLowerCase()
                      .includes(valueSearch.toLowerCase()),
                  ) ?? [];
                setDataRecomendation(dataFilttered);
              }
            }}
            className="border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none shadow-none focus:shadow-none h-full w-full px-4 rounded-lg m-0 placeholder:text-disable font-inter text-dark-800 group/input"
            placeholder="Cari disini..."
          />
          <button>
            <SearchIcon />
          </button>
        </div>
      </header>{" "}
      <div className="flex flex-col gap-y-32 justify-between">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {errorMsg ? (
            Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <PopularCardError key={i} message={errorMsg} />
            ))
          ) : paginatedData === null ? (
            Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
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
              <p className="font-inter text-sm text-dark-400 max-w-xs">
                Tidak ada berita yang cocok dengan{" "}
                <span className="font-semibold">{valueSearch}</span>. Coba kata
                kunci lain.
              </p>
              <button
                onClick={() => {
                  setDataRecomendation(originalData);
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
