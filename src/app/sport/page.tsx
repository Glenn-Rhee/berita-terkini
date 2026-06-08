import Container from "@/components/Container";
import NewsListContent from "@/components/NewListContent";

export default function SportPage() {
  return (
    <Container>
      <NewsListContent
        apiUrl="https://berita-indo-api-next.vercel.app/api/antara-news/olahraga"
        itemsPerPage={16}
        title="Olahraga"
        category="Olahraga"
      />
    </Container>
  );
}
