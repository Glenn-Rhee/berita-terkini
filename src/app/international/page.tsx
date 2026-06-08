import Container from "@/components/Container";
import NewsListContent from "@/components/NewListContent";

export default function InternationalPage() {
  return (
    <Container>
      <NewsListContent
        apiUrl="https://berita-indo-api-next.vercel.app/api/cnn-news/internasional"
        itemsPerPage={16}
        title="Internasional"
        category="Internasional"
      />
    </Container>
  );
}
