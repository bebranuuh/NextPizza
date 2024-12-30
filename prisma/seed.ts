import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.kz",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Test",
        email: "admin@test.kz",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: 1,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 2,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 3,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 4,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 5,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 6,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 7,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 8,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 9,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 10,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 11,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 12,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 13,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 14,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 15,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 16,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: 17,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 30,
        price: randomDecimalNumber(1490, 3790),
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
        price: randomDecimalNumber(1490, 3790),
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
