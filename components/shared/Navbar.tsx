import React from "react";
import ThemeToggle from "./ThemeToggle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-end py-5 px-5">
      <p className="max-w-6xl mx-auto text-center text-2xl font-serif hidden">
        <span className="italic font-normal">Only</span>Algos
      </p>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
