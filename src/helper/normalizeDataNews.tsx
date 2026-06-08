import {
  DataInternasional,
  NewsDataNormalized as NewsData,
  NewsDataNormalized,
} from "@/types";

export const normalizeNews = (data: NewsData[]): NewsDataNormalized[] =>
  data.map((item) => ({
    title: item.title,
    link: item.link,
    isoDate: item.isoDate,
    image: item.image,
    description: item.description,
  }));

export const normalizeInternational = (
  data: DataInternasional[],
): NewsDataNormalized[] =>
  data.map((item) => ({
    title: item.title,
    link: item.link,
    isoDate: item.isoDate,
    image: item.image.small,
    description: item.contentSnippet,
  }));
