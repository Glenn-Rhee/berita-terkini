import Container from "@/components/Container";
import NewsListContent from "@/components/NewListContent";

export default function LifeStylePage() {
  return (
    <Container>
      <NewsListContent
        apiUrl="https://berita-indo-api-next.vercel.app/api/antara-news/lifestyle"
        itemsPerPage={16}
        title="Gaya Hidup"
        category="Gaya Hidup"
      />
    </Container>
  );
}
