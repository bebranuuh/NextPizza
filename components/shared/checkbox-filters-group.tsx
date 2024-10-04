"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const ChechboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchvalue] = React.useState("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);
  console.log(list);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => setSearchvalue(e.target.value)}
            placeholder={searchInputPlaceholder}
            value={searchValue}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => {
              console.log(ids);
            }}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-3" : ""}>
          <button
            className="text-primary mt-3"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
