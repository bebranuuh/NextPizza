import { create } from "zustand";

type Store = {
  activeId: number;
  setActiveId: (activeId: number) => void;
};

export const useCategoryStore = create<Store>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
