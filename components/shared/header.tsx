import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center py-8 justify-between">
        {/* Логотип (слева) */}
        <div className="flex items-center gap-4">
          <Image src={"/logo.png"} width={35} height={35} alt={"logo"} />
          <div>
            <h1 className="text-2xl font-black">Next Pizza</h1>
            <h2 className="text-sm text-gray-400 leading-3">
              Вкусней уже некуда
            </h2>
          </div>
        </div>

        {/* Кнопки (справа) */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} /> Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>1590 ₸</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
