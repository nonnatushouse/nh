import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";
import uuidv4 from "uuid/v4";
import Timer from "./Timer";
import Quiz from "./Quiz";
import Home from "./Home";
import Contact from "./Contact";
import DrinkingGame from "./DrinkingGame";

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
              Countdown
            </NavLink>
            <NavLink to="/quiz" className="nav-link" activeClassName="selected">
              Quiz
            </NavLink>
            <NavLink to="/drinking-game" className="nav-link" activeClassName="selected">
              Drinking Game
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="selected">
              Contact
            </NavLink>
          </div>
        </div>

        {/* <div className="page-sidebar">
        <NavLink
              to="/"
              className="sidebar-link"
              activeClassName="selected"
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/timer"
              className="sidebar-link"
              activeClassName="selected"
            >
              Countdown
            </NavLink>
            <NavLink to="/quiz" className="sidebar-link" activeClassName="selected">
              Quiz
            </NavLink>
            <NavLink to="/about" className="sidebar-link" activeClassName="selected">
              About
            </NavLink>
        </div> */}

        <div className="page-container">
          <Route path="/timer" component={Timer} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/drinking-game" component={DrinkingGame} />
        </div>
      </>
    );
  }
}

export default App;
