import React, { useState } from "react";
import useInterval from "../useInterval";
import TimerDisplay from "./TimerDisplay";
import "./Timer.css";
import "../Info.css";

export default function Timer({targetDate, title}) {
  const [date, setDate] = useState(new Date());

  console.log("target date = ", targetDate)

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  const timeLeft = targetDate - date;


  return (
    <div className="timer-container">
      <div className="info-big-title">{title}</div>
      <TimerDisplay timeLeft={timeLeft} />
    </div>
  );
}


