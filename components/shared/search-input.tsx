"use client";

import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useClickAway, useDebounce } from "react-use";
import React from "react";
import Link from "next/link";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const ref = React.useRef(null);
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => setProducts(items));
    },
    250,
    [searchQuery]
  );

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>
      )}

      <div
        ref={ref}
        className={cn(
          "flex flex-1 rounded-2xl justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <X
          className="absolute top-1/2 translate-y-[-50%] right-3 h-5 text-gray-400 cursor-pointer"
          onClick={() => setSearchQuery("")}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`products/${product.id}`}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-8 w-8"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
