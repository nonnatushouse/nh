import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";
import Player from "./Player.js";
import shelagh from "./Music/ShelaghNonnatunsS5E0.mp3"
import bagpipes from "./Music/BagpipesS9E0.mp3";


export default function FourteenTeacups() {
  return (
    <div className="card-wrapper">
    <div>
        levinson-mannion
    </div>
    <img></img>
    <CrackerJoke text="Hello" punchline="Goodbye"></CrackerJoke>
    <Player url={bagpipes}></Player>

    </div>
    
  );
}