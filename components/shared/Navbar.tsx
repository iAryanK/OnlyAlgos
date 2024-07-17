import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

type Props = {
  home?: boolean;
};

const Navbar = ({ home }: Props) => {
  return (
    <nav
      className={`flex justify-end items-center rounded-b-xl py-3 px-5 ${
        !home && "border-b justify-between"
      }`}
    >
      <Link href="/" className={`${home && "hidden"}`}>
        <p className="w-fit text-2xl font-serif font-bold">
          <span className="italic font-normal">Only</span>Algos
        </p>
      </Link>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
