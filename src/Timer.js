import React from "react";
import "./Timer.css";

export default function Timer(props) {
  var t = props.date - Date.now();
  console.log(t);
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  return (
    <>
      <h1 className="timer-title">
        Time until Call the Midwife Series 9 airs:
      </h1>
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
    </>
  );
}
