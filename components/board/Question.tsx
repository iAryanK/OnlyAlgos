import React from "react";

type QuestionProps = {
  title: string;
  description: string;
  remark?: string;
};

const Question = ({ title, description, remark }: QuestionProps) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-700 p-2 m-2 rounded-xl">
      <h2 className="text-xl font-bold pb-2">{title}</h2>
      <p className="text-pretty">{description}</p>
      <p className="pt-2">{remark}</p>
    </div>
  );
};

export default Question;
