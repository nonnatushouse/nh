import React, { Component } from "react";
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
    var score = answer.isCorrect ? this.state.score += 100 : this.state.score;
    
    if (this.state.currentQuestion === this.state.questions.length -1) {
      this.setState({ isQuizOver: true, score: score, personalBest: Math.max(score, this.state.personalBest)});
    } else {
      var nextQuestion = this.state.currentQuestion + 1;
      shuffleAnswers(this.state.questions[nextQuestion].answers);
      this.setState({currentQuestion: nextQuestion});
    }
  }

  resetQuiz() {
    this.setState({ score: 0 });
    this.setState({currentQuestion: 0});
    this.setState({ isQuizOver: false});
  }

  render() {
    return (
      <>
        <div className="page-container">
          {/* <Timer date={this.state.date} /> */}
        </div>
        <Quiz
          currentQuestion={this.state.questions[this.state.currentQuestion]}
          onAnswerClick={answer => this.onAnswerClick(answer)}
          score={this.state.score}
          isQuizOver={this.state.isQuizOver}
          resetQuiz={() => this.resetQuiz()}
          personalBest={this.state.personalBest}
        />
      </>
    );
  }
}

export default App;

function shuffleAnswers(answers) {
  for (var i = answers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
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
        "What was Sister Evangelina's name before she joined the order of St Raymond Nonnatus?",
      answers: [
        { id: uuidv4(), answer: "Louise", isCorrect: false },
        { id: uuidv4(), answer: "Enid", isCorrect: true },
        { id: uuidv4(), answer: "Antonia", isCorrect: false },
        { id: uuidv4(), answer: "Mary", isCorrect: false }
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
    }
  ];
}
