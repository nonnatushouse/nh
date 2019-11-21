import React from "react";
import PropTypes from "prop-types";
import "./Timer.css";

export default function TimerDisplay({ timeLeft }) {
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const dayString = days === 1 ? "Day" : "Days";
  const hourString = hours === 1 ? "Hour" : "Hours";
  const minuteString = minutes === 1 ? "Minute" : "Minutes";
  const secondString = seconds === 1 ? "Second" : "Seconds";

  return (
    <>
      <div className="day-slot-container">
        <time className="day-slot">{days}</time>
        <div className="day-slot-text">{dayString}</div>
      </div>
      <div className="timer-slots-container">
        <div className="timer-slot-container">
          <time className="timer-slot">{hours}</time>
          <div className="timer-slot-text">{hourString}</div>
        </div>
        <div className="timer-slot-container">
          <time className="timer-slot">{minutes}</time>
          <div className="timer-slot-text">{minuteString}</div>
        </div>
        <div className="timer-slot-container">
          <time className="timer-slot">{seconds}</time>
          <div className="timer-slot-text">{secondString}</div>
        </div>
      </div>
    </>
  );
}

TimerDisplay.propTypes = {
  timeLeft: PropTypes.number.isRequired
};
