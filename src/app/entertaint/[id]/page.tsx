import Breadcrum, { BreadcrumProps } from "@/components/Breadcrum";
import Container from "@/components/Container";
import NewsContent from "@/components/NewsContent";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EntertaintDetailPage(props: Props) {
  const { params } = props;
  const { id } = await params;
  const dataLinks: BreadcrumProps["dataLinks"] = [
    {
      href: "/",
      title: "Beranda",
    },
    {
      href: "/entertaint",
      title: "Hiburan",
    },
    {
      href: "/entertaint/1",
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
