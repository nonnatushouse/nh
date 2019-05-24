import React from "react";
import "./Quiz.css";
import "./Info.css";

export default function QuizSplashScreen({onQuizRequest}) {

    return (
    <div className="quiz-splash">
        <div className="info-title">Welcome to an unofficial</div>
        <div className="info-big-title">Call the Midwife Quiz!</div>
        <div className="quiz-splash-text">Cannot wait for series 9? To pass some time while you wait, why not test your 'Call the Midwife' knowledge, with questions from the previous 8 series! Press the button below to get started.</div>
        <div className="info-title">Have fun!</div>
        <button
          className="quiz-start-button"
          onClick={onQuizRequest}
        >
          Start Quiz
        </button>
        </div>);
}