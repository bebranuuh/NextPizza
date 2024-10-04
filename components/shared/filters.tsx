import React from "react";
import { Title } from "./title";
import { ChechboxFiltersGroup, FilterCheckbox } from ".";
import { Input } from "../ui";
import { RangeSlider } from "../shared";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {/* Фильтрация */}
      <Title text="Фильтрация" size="lg" className="mb-5 font-bold" />
      {/* Самые верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <Title text="Цена от и до" size="sm" className="font-bold" />
        <div className="flex gap-3 my-4">
          <Input type="number" placeholder="0" min={0} max={4990} />
          <Input type="number" placeholder="4990" min={1490} max={5000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <ChechboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Соленные огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
        ]}
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Соленные огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
          { text: "Сырный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Соленные огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
        ]}
      />
    </div>
  );
};
