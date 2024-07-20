"use client";

import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Question from "@/components/board/Question";
import { ArrayExample } from "@/components/board/Example";
import Tags from "@/components/board/Tags";
import { Button } from "@/components/ui/button";
import { useInput } from "@/hooks/useInputStore";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
  const [clickedPlay, setClickedPlay] = useState(false);

  return (
    <section>
      <div className="max-sm:hidden sm:h-[80vh]">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <QuestionPanel setClickedPlay={setClickedPlay} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <SolutionPanel
              setClickedPlay={setClickedPlay}
              clickedPlay={clickedPlay}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="hidden max-sm:block sm:h-[80vh]">
        <QuestionPanel setClickedPlay={setClickedPlay} />
        <SolutionPanel
          setClickedPlay={setClickedPlay}
          clickedPlay={clickedPlay}
        />
      </div>
    </section>
  );
};

const QuestionPanel = ({
  setClickedPlay,
}: {
  setClickedPlay: (value: boolean) => void;
}) => {
  return (
    <div className="h-full sm:overflow-y-scroll relative">
      <Question
        title="Lemonade Change"
        description="At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time. Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer, so that the net transaction is that the customer pays $5."
        remark="Note that you don't have any change in hand at first. Return true if and only if you can provide every customer with correct change."
      />

      <ArrayExample input="[5,5,5,10,20]" output="true" />

      <Tags tags={["Array", "Greedy"]} />

      <div className="flex sm:justify-end mb-2 mr-2">
        <Button
          onClick={() => setClickedPlay(true)}
          variant={"secondary"}
          className="rounded-xl max-sm:w-[80%] my-5 max-sm:mx-auto"
        >
          Play
        </Button>
      </div>
    </div>
  );
};

const SolutionPanel = ({
  clickedPlay,
  setClickedPlay,
}: {
  clickedPlay: boolean;
  setClickedPlay: (value: boolean) => void;
}) => {
  const { toast } = useToast();
  const { inputValue } = useInput();

  if (clickedPlay) {
    let arrayData;
    try {
      const inputData = inputValue && JSON.parse(inputValue);
      arrayData = inputData;
    } catch (error) {
      setClickedPlay(false);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please enter a valid input.",
      });
    }

    let five = 0,
      ten = 0,
      twenty = 0;
    const result = [];
    for (let index = 0; index < arrayData.length; index++) {
      let data = arrayData[index];
      let flag = true;
      if (data === 5) five++;
      else if (data === 10) {
        if (five) {
          five--;
          ten++;
        } else {
          flag = false;
        }
      } else if (data === 20) {
        if (ten && five) {
          ten--;
          five--;
          twenty++;
        } else if (five >= 3) {
          five -= 3;
          twenty++;
        } else flag = false;
      }

      if (!flag) {
        result.push(
          <div key={index} className="flex flex-col">
            <p className="text-md font-medium underline pt-2">
              Step {index + 1}
            </p>
            <p>
              Loop breaks! Customer {index + 1} cannot be served because we have
              <ul>
                <li>{five} note of $5</li>
                <li>{ten} note of $10</li>
                <li>{twenty} note of $20</li>
              </ul>
              and the customer is paying ${arrayData[index]}.
            </p>
          </div>
        );
        break;
      }

      result.push(
        <div key={index} className="flex flex-col">
          <p className="text-md font-medium underline pt-2">Step {index + 1}</p>
          <p>
            Customer {index + 1} pays ${data}
          </p>
          <p>Change in hand: ${five * 5 + ten * 10 + twenty * 20}</p>
        </div>
      );
    }

    return (
      <div className="h-full sm:overflow-y-scroll">
        <div className="bg-gray-100 dark:bg-zinc-700 p-2 m-2 rounded-xl text-sm">
          <h2 className="text-xl font-bold pb-2">Solution</h2>

          <p>It&apos;s okay to be GREEDY sometimes.</p>
          <p className="pb-2">
            Initially, we don&apos;t have any change in hand. Let&apos; start
            selling the lemonades.
          </p>

          {result.map((data) => data)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full w-full sm:overflow-y-scroll flex flex-col items-center justify-center">
        <Image
          src={"/bubble.gif"}
          alt="loading"
          width={100}
          height={100}
          unoptimized
        />
        <p className="text-sm text-zinc-400 pb-10">
          Click on Play to see the solution
        </p>
      </div>
    );
  }
};

export default Page;
