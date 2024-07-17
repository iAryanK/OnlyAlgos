"use client";

import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useAlgos } from "@/hooks/useAlgoStore";

type CardProps = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  contributor?: string;
};

const Algos = () => {
  const { algos } = useAlgos();
  return (
    <section className="max-w-5xl mx-auto mb-5">
      <Card
        slug="contribute"
        title="Want to Contribute to OnlyAlgos?"
        description="You can contribute to OnlyAlgos, the Open Source project, on Github, by adding new algorithms or improving the existing ones."
        tags={["Your name will Shine as a contributor."]}
      />

      <div className="mx-5 mt-6">
        <Separator />
      </div>

      <div className="mt-10">
        {algos.map((algo, index) => (
          <Card key={index} {...algo} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ slug, title, description, tags, contributor }: CardProps) => {
  const colors = [
    "bg-slate-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-orange-200",
  ];

  return (
    <Link href={`/algos/${slug}`}>
      <div
        className={`dark:bg-zinc-800 shadow-lg rounded-lg p-4 m-4 hover:scale-105 transition-transform duration-300 ${
          colors[Math.floor(Math.random() * colors.length)]
        }`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>

        <div className="flex max-sm:flex-col sm:justify-between sm:items-center">
          <div className="flex flex-wrap mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-zinc-300 dark:bg-zinc-700 text-gray-500 rounded-full px-2 py-1 text-xs font-semibold mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          {contributor && (
            <p className="text-gray-500 text-sm mt-2">
              Contributor: {contributor}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Algos;
