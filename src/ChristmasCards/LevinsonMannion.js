import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";
import Player from "./Player.js";
import shelagh from "./Music/ShelaghNonnatunsS5E0.mp3"
import bagpipes from "./Music/BagpipesS9E0.mp3";

import pic from "./Images/levman.png"


export default function LevinsonMannion() {
  return (
    <div className="card-wrapper">
    <img className="img" src={pic}></img>
    <CrackerJoke text="Why did Sister Bernadette quit being a nun?" punchline="She got out of the habit"></CrackerJoke>
    <Player url={shelagh}></Player>

    </div>
    
  );
}