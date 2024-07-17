import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center text-sm py-5 border-t rounded-t-2xl">
      <Link href={"/"} className="font-serif font-bold">
        <span className="italic font-normal">Only</span>Algos
      </Link>
      &nbsp;
      <p>
        | Developed by{" "}
        <Link
          href="https://www.iaryan.tech"
          target="_blank"
          className="text-blue-500"
        >
          Aryan
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
