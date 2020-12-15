import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";
import Player from "./Player.js";


export default function LevinsonMannion() {
  return (
    <div className="card-wrapper">
    <div>
        levinson-mannion
    </div>
    <img></img>
    <CrackerJoke text="Hello" punchline="Goodbye"></CrackerJoke>
    <Player url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></Player>
    </div>
    
  );
}