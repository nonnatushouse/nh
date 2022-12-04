import React from "react";
import "./Info.css"

export default function TotalTime({ totalTime, text }) {

    const seconds = Math.floor((totalTime / 1000) % 60);
    const minutes = Math.floor((totalTime / (1000 * 60)) % 60);
    const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
  
    const dayString = days === 1 ? "Day" : "Days";
    const hourString = hours === 1 ? "Hour" : "Hours";
    const minuteString = minutes === 1 ? "Minute" : "Minutes";
    const secondString = seconds === 1 ? "Second" : "Seconds";
    
    if (totalTime === 0) {
        return null;
    }
    

    return (
      <>
        <p>{text}</p>
        <div className="timer-slots-container">
        <div className="timer-slot-container">
          <time className="timer-slot">{days}</time>
          <div className="timer-slot-text">{dayString}</div>
        </div>
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

