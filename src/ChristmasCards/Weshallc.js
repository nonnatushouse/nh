import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";

import bagpipes from "./Music/BagpipesS9E0.mp3";


import pic from "./Images/weshallc.png"
import { Link } from "react-router-dom";


export default function Weshallc() {
  return (
    <div className="card-wrapper">
    <img className="img" src={pic}></img>
    <CrackerJoke text="What do you get if you borrow money from Patrick and Shelagh?" punchline="Turner-debt"></CrackerJoke>

    <audio controls autoPlay className="audio-elem">
     <source src={bagpipes} type="audio/mpeg"/>
     Your browser does not support the audio element.
    </audio> 

    <Link to="/nun-puns">For more excellent jokes, click here!</Link>
    </div>
  );
}