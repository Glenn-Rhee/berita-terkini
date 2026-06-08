import Banner from "@/components/Banner";
import Container from "@/components/Container";
import Headline from "@/components/Headline";
import Popular from "@/components/Popular";
import Recomendation from "@/components/Recomendation";

export default function HomePage() {
  return (
    <Container className="min-h-full w-full flex flex-col gap-y-4 md:gap-y-16">
      <Headline />
      <Popular />
      <Recomendation />
      <Banner />
    </Container>
  );
}
