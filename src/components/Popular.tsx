import SubHeading from "./SubHeading";
import CardPopular from "./CardPopular";

export default function Popular() {
  return (
    <section className="my-16 flex flex-col gap-y-8">
      <SubHeading>Berita Terpopuler</SubHeading>
      <div className="grid grid-cols-3 gap-x-4 px-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardPopular key={i} no={i + 1} />
        ))}
      </div>
    </section>
  );
}
