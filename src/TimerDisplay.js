import React from "react";
import "./Timer.css";

export default function TimerDisplay({ timeLeft }) {

    const seconds = Math.floor((timeLeft/ 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <div className="timer-slots-container">
      <div className="timer-slot-container">
        <div className="timer-slot">{days}</div>
        <div className="timer-slot-text">Days</div>
      </div>
      <div className="timer-slot-container">
        <div className="timer-slot">{hours}</div>
        <div className="timer-slot-text">Hours</div>
      </div>
      <div className="timer-slot-container">
        <div className="timer-slot">{minutes}</div>
        <div className="timer-slot-text">Minutes</div>
      </div>
      <div className="timer-slot-container">
        <div className="timer-slot">{seconds}</div>
        <div className="timer-slot-text">Seconds</div>
      </div>
    </div>
  );
}
