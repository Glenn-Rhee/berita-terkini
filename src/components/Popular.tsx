"use client";
import SubHeading from "./SubHeading";
import CardPopular from "./CardPopular";
import { useEffect, useState } from "react";
import { NewsDataNormalized as NewsData, ResponsePayload } from "@/types";
import ResponseError from "@/error/ResponseError";
import NewsCardSkeleton from "./NewsCardSkeleton";
import { PopularCardError } from "./PopularCardError";

export default function Popular() {
  const [dataPopular, setDataPopular] = useState<NewsData[] | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          "https://berita-indo-api-next.vercel.app/api/antara-news/top-news",
        );
        if (!res.ok) {
          throw new ResponseError(res.status, "Failed get data!");
        }

        const data = (await res.json()) as ResponsePayload<NewsData[]>;
        setDataPopular(data.data.slice(0, 3));
      } catch (error) {
        if (error instanceof ResponseError) {
          setErrorMsg(error.message);
        } else {
          setErrorMsg("Internal server error!");
        }
      }
    };

    fetchedData();
  }, []);
  return (
    <section className="my-32 md:my-16 flex flex-col md:gap-y-8">
      <SubHeading>Berita Terpopuler</SubHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-0 gap-4 px-2 md:px-4">
        {errorMsg
          ? Array.from({ length: 3 }).map((_, i) => (
              <PopularCardError key={i} message={errorMsg} />
            ))
          : dataPopular
            ? dataPopular.map((data, i) => (
                <CardPopular dataPopular={data} key={data.title} no={i + 1} />
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))}
      </div>
    </section>
  );
}
