import React, { useState } from "react";
import "./Timer.css";
import TimerDisplay from "./TimerDisplay";
import useInterval from "./useInterval";

export default function Timer(props) {
  const [date, setDate] = useState(new Date());
  const targetDate = new Date(Date.UTC(2019, 11, 25, 20, 0, 0));

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  const timeLeft = targetDate - date;
  return (
    <>
      <h1 className="timer-title">
        Time until Call the Midwife Series 9 airs:
      </h1>
      <TimerDisplay timeLeft={timeLeft} />
    </>
  );
}
