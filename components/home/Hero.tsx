import React from "react";
import SearchBar from "./SearchBar";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <SearchBar />
    </section>
  );
};

export default Hero;
