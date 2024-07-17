import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between border-b rounded-b-xl py-3 px-5">
      <Link href="/">
        <p className="w-fit text-2xl font-serif font-bold">
          <span className="italic font-normal">Only</span>Algos
        </p>
      </Link>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
