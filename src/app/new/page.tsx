import Container from "@/components/Container";
import NewPageContent from "@/components/NewPageContent";

export default function NewPage() {
  return (
    <Container>
      <section className="flex flex-col gap-y-8">
        <NewPageContent />
      </section>
    </Container>
  );
}
