import React from "react";
import { Badge } from "../ui/badge";

type Props = {
  tags: string[];
};

const Tags = (props: Props) => {
  return (
    <div className="flex gap-2 mx-2">
      {props.tags.map((tag, index) => (
        <Badge variant="secondary" key={index} className="">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
