import React from "react";
import QuizAnswerList from "./QuizAnswerList";
import './Quiz.css';

export default function Quiz({
  currentQuestion,
  onAnswerClick,
  score,
  isQuizOver,
  resetQuiz,
  personalBest
}) {
  return (
    <div className="quiz-container">
      {isQuizOver ? (
        <div className="quiz-over-container">
          <div className="quiz-over-title">Quiz Over - Well done!</div>
          <div className="quiz-final-score-title">Final score:</div>
          <div className="quiz-final-score">{score}</div>
          <div className='quiz-pb-title'>Personal best this session:</div>
          <div className='quiz-pb-score'>{personalBest}</div>
          <button className='quiz-reset-button' type='button' onClick={() => resetQuiz()}>Play Again</button>
        </div>
      ) : (
        <div>
          <div className="quiz-score-container">
            <div className="quiz-score-title">Score: </div>
            <div className="quiz-score">{score}</div>
          </div>
          <div className="quiz-question-container">
          <div className="quiz-question">{currentQuestion.question}</div>
          
          <QuizAnswerList
            answers={currentQuestion.answers}
            onAnswerClick={answer => onAnswerClick(answer)}
          />
          </div>
        </div>
      )}
    </div>
  );
}
