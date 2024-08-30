import React from "react";
import { Categories, SortPopup, Container } from ".";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className="py-5 sticky top-0 bg-white shadow-lg shadow-black/5 z-10">
      <Container className={cn("flex items-center justify-between", className)}>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
