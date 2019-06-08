import React from "react";
import "./App.css";
import "./Info.css";
import { NavLink} from "react-router-dom";

export default function Home() {
  return (
    <div className="info-container">
    <div className="info-big-title">Welcome to Nonnatus House</div>
      <div className="info-title">an unofficial 'Call the Midwife' website</div>
      <div className="info-text">This is a website created by fans of Call the Midwife, for fans of Call the Midwife. Here you will find a <NavLink 
              to="/timer"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Countdown Timer
            </NavLink> to when the next episode airs (in the UK).            
            </div>
            <div className="info-text">You will also find a <NavLink
              to="/quiz"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Quiz
            </NavLink> you can take to test your Call the Midwife knowledge. Or if you want to play with a friend, why not create a <NavLink
              to="/bingo"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Bingo
            </NavLink> board each, and challenge each other while watching an episode?</div>

            <div className="info-text">Want to watch an episode, but can't decide which one? Try out the <NavLink
              to="/episode-randomizer"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Episode Randomizer
            </NavLink> which will help you select a random episode to watch!</div>
    </div>
  );
}
