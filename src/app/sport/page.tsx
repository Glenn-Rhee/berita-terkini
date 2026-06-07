import Card from "@/components/Card";
import Container from "@/components/Container";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";

export default function SportPage() {
  return (
    <Container>
      <section className="flex flex-col gap-y-8">
        <HeaderSection title="Terbaru" />
        <div className="flex flex-col gap-y-32 justify-between">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {Array.from({ length: 16 }).map((_, i) => (
              <Card key={i} />
            ))}
          </div>
          <FooterSection />
        </div>
      </section>
    </Container>
  );
}
