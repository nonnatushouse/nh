import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";

import shelagh from "./Music/ShelaghNonnatunsS5E0.mp3"



import pic from "./Images/hanne.png"
import { Link } from "react-router-dom";


export default function Hanne() {
  return (
    <div className="card-wrapper">
    <img className="img" src={pic}></img>
    <CrackerJoke text="If Laura lived in the US, what state would she live in?" punchline="Main(e)"></CrackerJoke>

    <audio controls autoPlay className="audio-elem">
     <source src={shelagh} type="audio/mpeg"/>
     Your browser does not support the audio element.
    </audio> 

    <Link to="/nun-puns">For more excellent jokes, click here!</Link>
    </div>
  );
}