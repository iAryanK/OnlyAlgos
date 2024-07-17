import { create } from "zustand";

interface IInput {
  inputValue: string;
  setInputValue: (newInputValue: string) => void;
}

export const useInput = create<IInput>()((set) => ({
  inputValue: "",
  setInputValue: (newInputValue: string) => set({ inputValue: newInputValue }),
}));
