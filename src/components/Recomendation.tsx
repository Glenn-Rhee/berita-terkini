import HeaderSection from "./HeaderSection";
import Card from "./Card";
import FooterSection from "./FooterSection";

export default function Recomendation() {
  return (
    <section className="my-16 flex flex-col gap-y-8">
      <HeaderSection title="Rekomendasi Untuk Anda" />
      <div className="flex flex-col gap-y-32 justify-between">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
        <FooterSection />
      </div>
    </section>
  );
}
