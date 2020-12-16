import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";
import Player from "./Player.js";
import shelagh from "./Music/ShelaghNonnatunsS5E0.mp3"
import bagpipes from "./Music/BagpipesS9E0.mp3";

import pic from "./Images/levman.png"
import { Link } from "react-router-dom";


export default function LevinsonMannion() {
  return (
    <div className="card-wrapper">
    <img className="img" src={pic}></img>
    <CrackerJoke text="Why did Sister Bernadette quit being a nun?" punchline="She got out of the habit"></CrackerJoke>

    <audio controls autoPlay className="audio-elem">
     <source src={shelagh} type="audio/mpeg"/>
     Your browser does not support the audio element.
    </audio> 

    {/* <Player url={shelagh}></Player> */}
    <Link to="/nun-puns">For more excellent jokes, click here!</Link>
    </div>

    
  );
}