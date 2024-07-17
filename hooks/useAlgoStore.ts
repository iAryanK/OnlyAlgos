import { algos } from "@/data/algos";
import { create } from "zustand";

interface IOneAlgo {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  contributor: string;
}

interface IAlgos {
  algos: IOneAlgo[];
  setAlgos: (newAlgos: IOneAlgo[]) => void;
}

export const useAlgos = create<IAlgos>()((set) => ({
  algos: algos,
  setAlgos: (newAlgos: IOneAlgo[]) => set({ algos: newAlgos }),
}));
