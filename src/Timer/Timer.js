import React, { useState } from "react";
import useInterval from "../useInterval";
import TimerDisplay from "./TimerDisplay";
import "./Timer.css";
import "../Info.css";

export default function Timer() {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  const timeLeft = getTargetDate() - date;

  const note = timeLeft > 0 ? "Note: This is assuming that the episode airs on December 25th, 2019 at 20:00 UTC" : "";

  return (
    <div className="timer-container">
      <div className="info-big-title">Time until the Call the Midwife 2019 Christmas Special airs:</div>
      <TimerDisplay timeLeft={timeLeft} />
      {/* <div className="timer-note">{note}</div> */}
    </div>
  );
}

function getTargetDate() {
  return new Date(Date.UTC(2019, 11, 25, 19, 0, 0));
}
