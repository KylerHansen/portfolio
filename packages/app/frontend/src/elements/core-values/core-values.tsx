import "./core-values.css";
import { useState } from "react";
import * as React from "react";
import { areArraysStrictlyEqual } from "@portfolio/common/src/utils/arrays";
import { BicepsFlexed, HeartHandshake, Scale, Sprout } from "lucide-react";

export function CoreValues(): React.ReactElement {
  const [clickedIcons, setClickedIcons] = useState<Array<number>>([]);
  const [computerIcons, setComputerIcons] = useState<Array<number>>([]);
  const [doubleBlink, setDoubleBlink] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [singleBlink, setSingleBlink] = useState(-1);
  const [roundCount, setRoundCount] = useState(0);

  async function triggerDoubleBlink() {
    setDoubleBlink(true);
    await wait(2000);
    setDoubleBlink(false);
  }

  async function triggerSingleBlink(index: number) {
    setSingleBlink(index);
    await wait(500);
    setSingleBlink(-1);
    await wait(500);
  }

  async function cpuTakesTurn() {
    const move = Math.floor(Math.random() * 4);
    const nextPattern = [...computerIcons, move];
    setComputerIcons(nextPattern);
    await wait(500);
    for (const index of nextPattern) {
      await triggerSingleBlink(index);
    }

    setRoundCount(roundCount + 1);
    console.log("waiting for next pattern", nextPattern);
  }

  function resetGameState() {
    setIsGameRunning(false);
    setComputerIcons([]);
    setRoundCount(0);
  }

  async function coreValueIconClick(index: number) {
    if (isGameRunning) {
      const playerIconPattern = [...clickedIcons, index];

      if (playerIconPattern.length < computerIcons.length) {
        setClickedIcons(playerIconPattern);
        return;
      }

      if (areArraysStrictlyEqual(playerIconPattern, computerIcons)) {
        setClickedIcons([]);

        if (roundCount === 10) {
          alert(
            `Winner! You completed clue #4. Put the answer to this riddle in the chat widget.

            Here is the riddle:
            I have keys, but open no locks;
            I have space, but no room;
            You can enter, but cannot leave.`
          );
          resetGameState();
          return;
        }
        await triggerDoubleBlink();
        await cpuTakesTurn();
      } else {
        alert(`Game over, ${roundCount - 1} out of 10 rounds completed`);
        setClickedIcons([]);

        resetGameState();
      }
    } else {
      if (areArraysStrictlyEqual(clickedIcons, [0, 1, 2])) {
        await triggerDoubleBlink();
        setClickedIcons([]);
        setIsGameRunning(true);
        cpuTakesTurn();
      } else if (clickedIcons.length >= 3) {
        setClickedIcons([]);
      } else {
        setClickedIcons([...clickedIcons, index]);
      }
    }
  }

  const coreValues: ReadonlyArray<{
    icon: JSX.Element;
    title: string;
    description: string;
  }> = [
    {
      icon: <Scale color="var(--primary-color)" size={48} />,
      title: "WORK LIFE BALANCE",
      description:
        "Work-life balance means managing my time between work and personal life to avoid burnout, while nurturing relationships and prioritizing my physical, mental, and spiritual well-being.",
    },
    {
      icon: <Sprout color="var(--primary-color)" size={48} />,
      title: "CONTINUOUS GROWTH",
      description:
        "Driven to improve myself in my career, personal life, and relationships, always seeking to be better.",
    },
    {
      icon: <HeartHandshake color="var(--primary-color)" size={48} />,
      title: "SERVICE & ACHIEVEMENT",
      description:
        "Finding fulfillment in helping others and ensuring that I accomplish something meaningful every day.",
    },
    {
      icon: <BicepsFlexed color="var(--primary-color)" size={48} />,
      title: "INTEGRITY & AUTHENTICITY",
      description:
        "I am committed to being honest, reliable, and true to my values in all aspects of life, both personally and professionally.",
    },
  ];
  return (
    <div>
      <h1 title="“Values are like fingerprints. Nobody's are the same, but you leave [them] all over everything you do.” – Elvis Presley">
        CORE VALUES
      </h1>
      <div className="core-values">
        {coreValues.map((value, index) => {
          return (
            <div className={"core-value-container"} key={index}>
              <div
                onAnimationEnd={() => {}}
                className={`core-value-icon ${doubleBlink ? "start" : ""} ${
                  singleBlink === index ? "select" : ""
                }`}
                onClick={async () => {
                  coreValueIconClick(index);
                }}
              >
                {value.icon}
              </div>
              <div className="core-value-title">{value.title}</div>
              <div className="core-value-description">{value.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
