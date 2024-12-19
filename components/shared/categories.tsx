"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
  { id: 8, name: "Десерты" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const { activeId } = useCategoryStore();
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 rounded-2xl p-1", className)}
    >
      {categories.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === id && "bg-white text-primary shadow-md shadow-gray-200"
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
