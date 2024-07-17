"use client";

import { useEffect, useState } from "react";
import { useInput } from "@/hooks/useInputStore";

type ArrayExampleProps = {
  input: string;
  output: string;
};

export const ArrayExample = ({ input, output }: ArrayExampleProps) => {
  const { inputValue, setInputValue } = useInput();

  useEffect(() => {
    setInputValue(input);
  }, [input, setInputValue]);

  return (
    <div className="bg-slate-100 dark:bg-zinc-700 p-2 m-2 rounded-xl relative">
      <h3 className="text-xl font-bold pb-2">Example</h3>
      <p className="font-medium">
        {inputValue === input ? "Sample Input" : "Input"}
      </p>
      <p className="text-pretty">
        <input
          type="text"
          className="w-full bg-transparent border-none focus:outline-none"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </p>
      <p className="font-medium pt-2">Output</p>
      <p className="text-pretty">{output}</p>
      <p className="pt-2 text-sm italic font-sans">
        Customize the sample input and click on Play button.
      </p>
    </div>
  );
};
