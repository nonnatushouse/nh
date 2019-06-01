import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Timer from "./Timer";
import Quiz from "./Quiz";
import Home from "./Home";
import Contact from "./Contact";
import DrinkingGame from "./DrinkingGame";
import Randomizer from "./Randomizer";
import RcMenu from "./RcMenu";
import Bingo from "./Bingo";

class App extends Component {
  state = { menuIsExpanded: false };

  toggleSidebarMenu() {
    this.setState(prevState => ({ menuIsExpanded: !prevState.menuIsExpanded }));
  }

  render() {
    return (
      <>
        <button
          className="sidebar-hamburger-button"
          type="button"
          onClick={this.toggleSidebarMenu.bind(this)}
        >
          ☰
        </button>

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
          <Route path="/bingo" component={Bingo} />
        </div>
      </>
    );
  }
}

export default App;
