import Container from "@/components/Container";
import HeaderSection from "@/components/HeaderSection";
import NewPageContent from "@/components/NewPageContent";

export default function NewPage() {
  return (
    <Container>
      <section className="flex flex-col gap-y-8">
        <HeaderSection title="Terbaru" />
        <NewPageContent />
      </section>
    </Container>
  );
}
