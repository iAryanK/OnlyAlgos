"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { useAlgos } from "@/hooks/useAlgoStore";
import { AlgoCard } from "./AlgoCard";

const Algos = () => {
  const { algos } = useAlgos();
  return (
    <section className="max-w-5xl mx-auto mb-5">
      <AlgoCard
        slug="contribute"
        title="Want to Contribute to OnlyAlgos?"
        description="You can contribute to OnlyAlgos, the Open Source project, on Github, by adding new algorithms or improving the existing ones."
        tags={["Shine as a contributor on OnlyAlgos."]}
      />
      <div className="mx-5 mt-6">
        <Separator />
      </div>

      <div className="mt-10">
        {algos.map((algo, index) => (
          <AlgoCard key={index} {...algo} />
        ))}
      </div>
    </section>
  );
};

export default Algos;
