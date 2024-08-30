import { TopBar, Container, Title } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Вcе пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
