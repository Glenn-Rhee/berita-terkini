import Container from "@/components/Container";
import NewsListContent from "@/components/NewListContent";

export default function EntertaintPage() {
  return (
    <Container>
      <NewsListContent
        apiUrl="https://berita-indo-api-next.vercel.app/api/antara-news/hiburan"
        itemsPerPage={16}
        title="Hiburan"
        category="Hiburan"
      />
    </Container>
  );
}
