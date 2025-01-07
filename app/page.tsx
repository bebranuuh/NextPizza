import {
  TopBar,
  Container,
  Title,
  Filters,
  ProductGroupList,
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
              <ProductGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 1,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 2,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 3,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 4,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 5,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 6,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 7,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 8,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 9,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 1,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 2,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 3,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 4,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 5,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 6,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 7,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 8,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
                    id: 9,
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
