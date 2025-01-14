"use client";

import React from "react";
import { Title } from "./title";
import { ChechboxFiltersGroup, FilterCheckbox } from ".";
import { Input } from "../ui";
import { RangeSlider } from "../shared";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients();
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 4990,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );

  const filters = {
    ...prices,
    pizzaTypes: Array.from(pizzaTypes),
    sizes: Array.from(sizes),
    ingredients: Array.from(selectedIngredients),
  };

  React.useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };
  }, [filters]);

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({ ...prices, [name]: value });
  };

  return (
    <div className={className}>
      {/* Фильтрация */}
      <Title text="Фильтрация" size="lg" className="mb-5 font-bold" />
      {/* Самые верхние чекбоксы */}
      <ChechboxFiltersGroup
        limit={2}
        name="sizes"
        className="mb-5"
        title="Тип теста"
        onClickCheckbox={togglePizzaTypes}
        selectedValue={pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />
      <ChechboxFiltersGroup
        limit={3}
        name="sizes"
        className="mb-5"
        title="Размеры"
        onClickCheckbox={toggleSizes}
        selectedValue={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />
      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <Title text="Цена от и до" size="sm" className="font-bold" />
        <div className="flex gap-3 my-4">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={4990}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="4990"
            min={1490}
            max={4990}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={4990}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrices({ priceFrom, priceTo })
          }
        />
      </div>

      <ChechboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        name="ingredients"
        onClickCheckbox={onAddId}
        selectedValue={selectedIngredients}
      />
    </div>
  );
};
