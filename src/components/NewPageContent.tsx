import NewsListContent from "./NewListContent";

export default function NewPageContent() {
  return (
    <NewsListContent
      apiUrl="https://berita-indo-api-next.vercel.app/api/antara-news/terkini"
      itemsPerPage={16}
      title="Cari di sini..."
    />
  );
}
