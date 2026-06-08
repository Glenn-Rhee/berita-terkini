import NewsListContent from "./NewListContent";

export default function Recomendation() {
  return (
    <NewsListContent
      apiUrl="https://berita-indo-api-next.vercel.app/api/antara-news/terkini"
      itemsPerPage={8}
      title="Rekomendasi untuk anda"
    />
  );
}
