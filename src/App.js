import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";
import uuidv4 from "uuid/v4";
import Timer from "./Timer";
import Quiz from "./Quiz";
import Home from "./Home";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="page-header">
          <div className="nav-container">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="selected"
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/timer"
              className="nav-link"
              activeClassName="selected"
            >
              The Final Countdown
            </NavLink>
            <NavLink to="/quiz" className="nav-link" activeClassName="selected">
              Quiz
            </NavLink>
          </div>
        </div>
        <div className="page-container">
          <Route path="/timer" component={Timer} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/" component={Home} exact />
        </div>
      </>
    );
  }
}

export default App;
