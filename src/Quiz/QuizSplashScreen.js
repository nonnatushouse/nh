import React from "react";
import "./Quiz.css";
import "../Info.css";

import {
  GENERAL,

  // QUOTES,
  // NAMES_PLACES,
  // S1_S4,
  // S5_S8,
  // CAST_CREW,
  // MEDICAL
} from "./Questions";

export default function QuizSplashScreen({ onQuizRequest }) {
  return (
    <div className="quiz-splash">
      <div className="info-title">Welcome to an unofficial</div>
      <div className="info-big-title">Call the Midwife Quiz!</div>
      <div className="quiz-splash-text">
        Cannot wait for series 10? To pass some time while you wait, why not test
        your 'Call the Midwife' knowledge, with questions from the previous 9
        series!
        
         {/* Choose a quiz below and click it to get started. */}
      </div>
      {/* <div className="info-title">Quiz Categories</div> */}
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(GENERAL)}
      >
        Start Quiz
        {/* General Quiz */}
      </button>
{/*       
      <div className="quiz-category-buttons">
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(S1_S4)}
      >
        Series 1-4
      </button>
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(S5_S8)}
      >
        Series 5-8
      </button>
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(NAMES_PLACES)}
      >
        Names & Places
      </button>
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(QUOTES)}
      >
        Quotes
      </button>
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(CAST_CREW)}
      >
        Cast & Crew
      </button>

      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(MEDICAL)}
      >
        Medical
      </button> 
      </div>*/}

    </div>
  );
}
