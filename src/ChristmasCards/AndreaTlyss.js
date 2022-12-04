import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";

import choir from "./Music/ChoirS5E0.mp3";

import pic from "./Images/andrea.png"
import { Link } from "react-router-dom";


export default function AndreaTlyss() {
  return (
    <div className="card-wrapper">
    <img className="img" src={pic} alt="Call the Midwife inspired holiday card"></img>
    <CrackerJoke text="Who handles the biggest Nonnatus deliveries?" punchline="Nurse Crane"></CrackerJoke>

    <audio controls autoPlay className="audio-elem">
     <source src={choir} type="audio/mpeg"/>
     Your browser does not support the audio element.
    </audio> 

    <Link to="/nun-puns">For more excellent jokes, click here!</Link>
    </div>
  );
}



