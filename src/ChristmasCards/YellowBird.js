import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";

import choir from "./Music/ChoirS5E0.mp3";

import pic from "./Images/yelbir.png"
import { Link } from "react-router-dom";


export default function YellowBird() {
  return (
    <div className="card-wrapper">
    <img className="img" src={pic}></img>
    <CrackerJoke text="What did Sister Julienne say when Trixie asked for an opinion on her new hairstyle?" punchline="'Franklin my dear, I don't give a damn'"></CrackerJoke>

    <audio controls autoPlay className="audio-elem">
     <source src={choir} type="audio/mpeg"/>
     Your browser does not support the audio element.
    </audio> 

    <Link to="/nun-puns">For more excellent jokes, click here!</Link>
    </div>
  );
}