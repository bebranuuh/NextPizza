"use client";

import React from "react";
import { Title } from "./title";
import { ChechboxFiltersGroup, FilterCheckbox } from ".";
import { Input } from "../ui";
import { RangeSlider } from "../shared";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

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
          <Input type="number" placeholder="4990" min={1490} max={4990} />
        </div>
        <RangeSlider min={0} max={4990} step={10} value={[0, 4990]} />
      </div>

      <ChechboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
