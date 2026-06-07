import Breadcrum, { BreadcrumProps } from "@/components/Breadcrum";
import Container from "@/components/Container";
import NewsContent from "@/components/NewsContent";

export default function NewDetail() {
  const dataLinks: BreadcrumProps["dataLinks"] = [
    {
      href: "/",
      title: "Beranda",
    },
    {
      href: "/new",
      title: "Terbaru",
    },
    {
      href: "/new/1",
      title: "Detail",
    },
  ];

  return (
    <Container className="bg-white">
      <Breadcrum dataLinks={dataLinks} />
      <NewsContent />
    </Container>
  );
}
