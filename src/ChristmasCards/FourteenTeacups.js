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

    <img></img>
    <CrackerJoke text="What is Sister Monica Joan's head full of?" punchline="Nun-sense!"></CrackerJoke>
    <Player url={bagpipes}></Player>

    </div>
    
  );
}