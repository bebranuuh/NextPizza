"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useClickAway } from "react-use";
import React from "react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  const ref = React.useRef(null);
  const [focused, setFocused] = React.useState(false);

  useClickAway(ref, () => {
    setFocused(false);
  });

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
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          <Link
            href="/product/1"
            className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
          >
            <img
              src="https://media.dodostatic.net/image/r:292x292/11EE7D5FECCD3AC0B2E2C417625FCB02.avif"
              alt="Пицца 1"
              className="h-8 w-8"
            />
            <span>Пицца 1</span>
          </Link>
        </div>
      </div>
    </>
  );
};
