import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";
import uuidv4 from "uuid/v4";
import Timer from "./Timer";
import Quiz from "./Quiz";

class App extends Component {
  state = {
    date: new Date(Date.UTC(2019, 11, 25, 20, 0, 0)),
    score: 0,
    currentQuestion: 0,
    questions: Questions(),
    isQuizOver: false,
    personalBest: 0
  };

  onAnswerClick(answer) {
    var score = answer.isCorrect ? (this.state.score += 100) : this.state.score;

    if (this.state.currentQuestion === this.state.questions.length - 1) {
      this.setState({
        isQuizOver: true,
        score: score,
        personalBest: Math.max(score, this.state.personalBest)
      });
    } else {
      var nextQuestion = this.state.currentQuestion + 1;
      shuffleArray(this.state.questions[nextQuestion].answers);
      this.setState({ currentQuestion: nextQuestion });
    }
  }

  resetQuiz() {
    this.setState({ score: 0, currentQuestion: 0, isQuizOver: false });
    shuffleArray(this.state.questions);
  }

  render() {
    return (
      <>
        <div className="page-header">
        <div className="nav-container">
          <NavLink to="/" className='nav-link' activeClassName="selected" exact>Home</NavLink>
          <NavLink to="/timer" className='nav-link' activeClassName="selected" >The Final Countdown</NavLink>
          <NavLink to="/quiz" className='nav-link' activeClassName="selected" >Quiz</NavLink>
        </div>
        </div>
        <div className="page-container">
          <Route
            path="/timer"
            render={() => <Timer />}
          />
          <Route
            path="/quiz"
            render={() => (
              <Quiz
                currentQuestion={
                  this.state.questions[this.state.currentQuestion]
                }
                onAnswerClick={answer => this.onAnswerClick(answer)}
                score={this.state.score}
                isQuizOver={this.state.isQuizOver}
                resetQuiz={() => this.resetQuiz()}
                personalBest={this.state.personalBest}
              />
            )}
          />
        </div>
      </>
    );
  }
}

export default App;

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function Questions() {
  return [
    {
      id: uuidv4(),
      question:
        "What was Sister Julienne's name before she joined the order of St Raymond Nonnatus?",
      answers: [
        { id: uuidv4(), answer: "Louise", isCorrect: true },
        { id: uuidv4(), answer: "Enid", isCorrect: false },
        { id: uuidv4(), answer: "Antonia", isCorrect: false },
        { id: uuidv4(), answer: "Mary", isCorrect: false }
      ]
    },
    {
      id: uuidv4(),
      question:
        "Which of the following people was the last to join Nonnatus House?",
      answers: [
        { id: uuidv4(), answer: "Chummy", isCorrect: false },
        { id: uuidv4(), answer: "Barbara", isCorrect: false },
        { id: uuidv4(), answer: "Phyllis", isCorrect: false },
        { id: uuidv4(), answer: "Valerie", isCorrect: true }
      ]
    },
    {
      id: uuidv4(),
      question: "What is the phone number for Nonnatus House?",
      answers: [
        { id: uuidv4(), answer: "Poplar 594", isCorrect: false },
        { id: uuidv4(), answer: "Poplar 945", isCorrect: false },
        { id: uuidv4(), answer: "Poplar 999", isCorrect: false },
        { id: uuidv4(), answer: "Poplar 459", isCorrect: true }
      ]
    },
    {
      id: uuidv4(),
      question:
        "Where do the Nonnatuns travel to in the 2016 Christmas Special?",
      answers: [
        { id: uuidv4(), answer: "The West End", isCorrect: false },
        { id: uuidv4(), answer: "Wales", isCorrect: false },
        { id: uuidv4(), answer: "Australia", isCorrect: false },
        { id: uuidv4(), answer: "South Africa", isCorrect: true }
      ]
    },
    {
      id: uuidv4(),
      question:
        "What was Sister Monica Joan's name before she joined the order of St Raymond Nonnatus?",
      answers: [
        { id: uuidv4(), answer: "Louise", isCorrect: false },
        { id: uuidv4(), answer: "Enid", isCorrect: false },
        { id: uuidv4(), answer: "Antonia", isCorrect: true },
        { id: uuidv4(), answer: "Mary", isCorrect: false }
      ]
    },
    {
      id: uuidv4(),
      question: "What color is Dr Turner's car (series 1-7)?",
      answers: [
        { id: uuidv4(), answer: "Red", isCorrect: false },
        { id: uuidv4(), answer: "Yellow", isCorrect: false },
        { id: uuidv4(), answer: "Blue", isCorrect: false },
        { id: uuidv4(), answer: "Green", isCorrect: true }
      ]
    },
    {
      id: uuidv4(),
      question: "Who was the first midwife shown delivering a breech baby?",
      answers: [
        { id: uuidv4(), answer: "Cynthia", isCorrect: false },
        { id: uuidv4(), answer: "Jenny", isCorrect: false },
        { id: uuidv4(), answer: "Trixie", isCorrect: false },
        { id: uuidv4(), answer: "Chummy", isCorrect: true }
      ]
    },
    {
      id: uuidv4(),
      question: "'Toxemia' is another word for...?",
      answers: [
        { id: uuidv4(), answer: "Tokophobia", isCorrect: false },
        { id: uuidv4(), answer: "Cancer", isCorrect: false },
        { id: uuidv4(), answer: "Spina Bifida", isCorrect: false },
        { id: uuidv4(), answer: "Pre-Eclampsia", isCorrect: true }
      ]
    },
    {
      id: uuidv4(),
      question: "During which year does the first series take place?",
      answers: [
        { id: uuidv4(), answer: "1959", isCorrect: false },
        { id: uuidv4(), answer: "1958", isCorrect: false },
        { id: uuidv4(), answer: "1956", isCorrect: false },
        { id: uuidv4(), answer: "1957", isCorrect: true }
      ]
    },
    {
      id: uuidv4(),
      question:
        "What was Sister Evangelina's name before she joined the order of St Raymond Nonnatus?",
      answers: [
        { id: uuidv4(), answer: "Louise", isCorrect: false },
        { id: uuidv4(), answer: "Enid", isCorrect: true },
        { id: uuidv4(), answer: "Antonia", isCorrect: false },
        { id: uuidv4(), answer: "Mary", isCorrect: false }
      ]
    }
  ];
}
