import React, { useState } from "react";
import "./Timer.css";
import TimerDisplay from "./TimerDisplay";
import useInterval from "../useInterval";
import "../Info.css";

export default function Timer(props) {
  const [date, setDate] = useState(new Date());
  const targetDate = getTargetDate();

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  const note = new Date(Date.UTC(2019, 11, 25, 20, 0, 0)) - date > 0 ?  "Note: This is assuming that the episode airs on December 25th, 2019 at 20:00 UTC" : "";

  const timeLeft = targetDate - date;
  return (
    <>
    <div className="timer-container">
      <div className="info-big-title">
        Time until Call the Midwife Series 9 airs:
      </div>
      <TimerDisplay timeLeft={timeLeft} />
      <div className="timer-note">{note}</div>
      </div>
    </>
    
  );
}

function getTargetDate() {
  return new Date(Date.UTC(2019, 11, 25, 20, 0, 0));
}