import React, { Component } from "react";
import "./App.css";
import uuidv4 from "uuid/v4";
import Timer from "./Timer";

import QuizAnswerItem from "./QuizAnswerItem";
import QuizAnswerList from "./QuizAnswerList";
import Quiz from './Quiz';

class App extends Component {
  state = {
    date: new Date(Date.UTC(2019, 11, 25, 20, 0, 0)),
    score: 0,
    currentQuestion: 0,
    questions: [
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
      }
    ]
  };

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onAnswerClick(answer) {
    if (answer.isCorrect === true) {
      this.setState({ score: this.state.score + 100 });
    }
  }

  render() {
    return (
      <>
        <div className="page-container">
          <Timer date={this.state.date} />
        </div>
        <Quiz currentQuestion={this.state.questions[this.state.currentQuestion]} onAnswerClick={answer => this.onAnswerClick(answer)} score={this.state.score}></Quiz>

      </>
    );
  }
}

export default App;
