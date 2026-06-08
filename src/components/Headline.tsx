import ResponseError from "@/error/ResponseError";
import { NewsDataNormalized, ResponsePayload } from "@/types";
import HeadlineContent from "./HeadlineContent";

export default async function Headline() {
  let errorMsg = null;
  let dataHeadline: NewsDataNormalized[] = [];
  try {
    const res = await fetch(
      "https://berita-indo-api-next.vercel.app/api/antara-news/terkini",
    );
    if (!res.ok) {
      throw new ResponseError(res.status, "Failed get data!");
    }
    const dataRes = (await res.json()) as ResponsePayload<NewsDataNormalized[]>;
    dataHeadline = dataRes.data;
  } catch (error) {
    if (error instanceof ResponseError) {
      errorMsg = error.message;
    } else {
      errorMsg = "Internal server error!";
    }
  }

  return (
    <main className="h-[50dvh] flex flex-col items-center gap-y-4 md:gap-y-16 w-full my-4 md:my-16">
      <HeadlineContent errorMsg={errorMsg} dataHeadline={dataHeadline} />
    </main>
  );
}
