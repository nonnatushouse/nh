import React from "react";
import QuizAnswerList from './QuizAnswerList';

export default function Quiz({ currentQuestion, onAnswerClick, score}) {
  return (
    <div className="quiz-container">
      <div className="quiz-score-container">
        <div className="quiz-score-title">Score: </div>
        <div className="quiz-score">{score}</div>
      </div>
      <div className="quiz-question">
        {currentQuestion.question}
      </div>
      <QuizAnswerList
        answers={currentQuestion.answers}
        onAnswerClick={answer => onAnswerClick(answer)}
      />
    </div>
  );
}
