import React from "react";
import StyledList from "../styledComponents/StyledUl";

type CanDoProps = {
  minutes: number;
  seconds: number;
};

export default function CanDo({ minutes, seconds }: CanDoProps) {
  const checkTime = (minutes: number, seconds: number) => {
    const totalTime = seconds + minutes * 60;
    let activities: string[] = [];
    if (totalTime < 60 && totalTime > 0) {
      activities = smallWindow;
    } else if (totalTime >= 60 && totalTime < 180) {
      activities = medWindow;
    } else if (totalTime >= 180) {
      activities = largeWindow;
    }
    if (activities.length > 0){
        return activities.map(toDo => {
            return <li>{toDo}</li>
        })
    }
  };

  const smallWindow: string[] = [
    "take a few deep breaths",
    "refill your water glass",
  ];
  const medWindow: string[] = [
    "empty the dishwasher",
    "grab a snack",
    "do a few jumping jacks or a stretch",
  ];
  const largeWindow: string[] = [
    "call a friend",
    "go for a walk",
    "check your email",
  ];

  return (
    <StyledList>
        {checkTime(minutes, seconds)}
    </StyledList>
    );
}
