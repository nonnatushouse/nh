import React from "react";
import "./DrinkingGame.css"
import "./Info.css";

export default function DrinkingGame() {
  return (
    <div className="drinking-game-container">
      <div className="info-big-title">Unofficial Drinking Game</div>
      <div className="info-title">Rules</div>
      <div className="info-text">
        The rules are simple. When watching an episode, keep the list below
        avaliable close by, and as soon as one of the things listed happens, you
        take a sip from your drink. The drink can be any of your choosing of course,
        but our recommendation would be a cup of tea. Preferrably well-sugared.{" "}
      </div>
      <div className="info-text">Please note that the list is under construction, and will be expanded in due course.</div>
      <div className="info-title">The List</div>
      <div className="drinking-game-item">Take a drink whenever...</div>
        <div className="drinking-game-item">someone mentions the Commercial Road </div>
        <div className="drinking-game-item">Fred mentions El Alemain </div>
        <div className="drinking-game-item">Phyllis mentions being a member of the Institute of Advanced Motorists</div>
        <div className="drinking-game-item">someone is offered a barley sugar</div>
        <div className="drinking-game-item">Sister Monica Joan gets excited about cake</div>
        <div className="drinking-game-item">Sister Monica Joan mentions astronomy or astrology</div>
        <div className="drinking-game-item"></div>
        <div className="drinking-game-item">(list to be expanded)</div>

    </div>
  );
}
