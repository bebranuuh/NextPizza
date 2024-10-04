import { TopBar, Container, Title, Filters } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Вcе пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-9 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список пицц */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список пицц</div>
          </div>
        </div>
      </Container>
    </>
  );
}
