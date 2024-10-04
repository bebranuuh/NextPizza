import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  className?: string;
  imageUrl: string;
  price: number;
  id: number;
  name: string;
}

export const ProductCard: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  imageUrl,
  price,
  name,
  id,
}) => {
  return (
    <div className={className}>
      <Link href={`product/${id}`}>
        <div className="flex jusctify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} className="mb-1 mt-3 font-bold" size="sm" />
        <p className="text-sm text-gray-400">
          Ингредиенты с бэкенда, Ингредиенты с бэкенда, Ингредиенты с бэкенда
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₸</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
