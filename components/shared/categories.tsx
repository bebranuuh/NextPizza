import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 rounded-2xl p-1", className)}
    >
      {categories.map((category, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          key={index}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};
