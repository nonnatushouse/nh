import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";
import uuidv4 from "uuid/v4";
import Timer from "./Timer";
import Quiz from "./Quiz";
import Home from "./Home";
import Contact from "./Contact";
import DrinkingGame from "./DrinkingGame";
import classNames from "classnames";
import Randomizer from "./Randomizer";
import RcMenu from "./RcMenu";

class App extends Component {
  state = { menuIsExpanded: true }; //TODO: set to false

  toggleSidebarMenu() {
    this.setState(prevState => ({ menuIsExpanded: !prevState.menuIsExpanded }));
  }

  render() {
    return (
      <>
        {/*       
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
            <NavLink
              to="/drinking-game"
              className="nav-link"
              activeClassName="selected"
            >
              Drinking Game
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="selected"
            >
              Contact
            </NavLink>
          </div>
        </div> */}

        <button
          className="sidebar-hamburger-button"
          type="button"
          onClick={this.toggleSidebarMenu.bind(this)}
        >
          ☰
        </button>
        {/*         
        <div
          className={classNames({
            "page-sidebar": true,
            open: this.state.menuIsExpanded
          })}
        >
          <NavLink
            to="/"
            className="sidebar-link"
            activeClassName="selected"
            exact
            onClick={this.toggleSidebarMenu.bind(this)}
          >
            Home
          </NavLink>
          <NavLink
            to="/timer"
            className="sidebar-link"
            activeClassName="selected"
            onClick={this.toggleSidebarMenu.bind(this)}
          >
            Countdown
          </NavLink>
          <NavLink
            to="/quiz"
            className="sidebar-link"
            activeClassName="selected"
            onClick={this.toggleSidebarMenu.bind(this)}
          >
            Quiz
          </NavLink>
          <NavLink
            to="/contact"
            className="sidebar-link"
            activeClassName="selected"
            onClick={this.toggleSidebarMenu.bind(this)}
          >
            Contact
          </NavLink>
        </div> */}
        <RcMenu
          toggleMenu={this.toggleSidebarMenu.bind(this)}
          menuIsExpanded={this.state.menuIsExpanded}
        />
        <div className="page-container">
          <Route path="/timer" component={Timer} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/drinking-game" component={DrinkingGame} />
          <Route path="/episode-randomizer" component={Randomizer} />
        </div>
      </>
    );
  }
}

export default App;
