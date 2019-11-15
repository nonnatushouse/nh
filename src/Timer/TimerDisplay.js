import React from "react";
import "./Timer.css";

export default function TimerDisplay({ timeLeft }) {
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  let secondString = "Seconds";
  let minuteString = "Minutes";
  let hourString = "Hours";
  let dayString = "Days";

  if (days === 1) {
    dayString = "Day";
  }

  if (hours === 1) {
    hourString = "Hour";
  }

  if (minutes === 1) {
    minuteString = "Minute";
  }
  if (seconds === 1) {
    secondString = "Second";
  }

  return (
    <>
      <div className="day-slot-container">
        <div className="day-slot">{days}</div>
        <div className="day-slot-text">{dayString}</div>
      </div>
      <div className="timer-slots-container">
        <div className="timer-slot-container">
          <div className="timer-slot">{hours}</div>
          <div className="timer-slot-text">{hourString}</div>
        </div>
        <div className="timer-slot-container">
          <div className="timer-slot">{minutes}</div>
          <div className="timer-slot-text">{minuteString}</div>
        </div>
        <div className="timer-slot-container">
          <div className="timer-slot">{seconds}</div>
          <div className="timer-slot-text">{secondString}</div>
        </div>
      </div>
    </>
  );
}
