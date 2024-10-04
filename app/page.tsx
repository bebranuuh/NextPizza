import {
  TopBar,
  Container,
  Title,
  Filters,
  ProductCard,
} from "@/components/shared";

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
            <div className="flex flex-col gap-16">
              <ProductCard
                imageUrl="https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif"
                price={1590}
                id={0}
                name="pizaa asd"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
