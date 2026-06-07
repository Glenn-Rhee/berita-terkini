import Container from "@/components/Container";
import Headline from "@/components/Headline";
import Popular from "@/components/Popular";

export default function HomePage() {
  return (
    <Container className="min-h-full w-full flex flex-col gap-y-16">
      <Headline />
      <Popular />
    </Container>
  );
}
