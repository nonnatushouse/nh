import React from "react";
import "./Cards.css";
import "./CrackerJoke.js"
import CrackerJoke from "./CrackerJoke.js";

import shelagh from "./Music/ShelaghNonnatunsS5E0.mp3"



import pic from "./Images/kam.png"
import { Link } from "react-router-dom";


export default function Kam() {
  return (
    <div className="card-wrapper">
    <img className="img" src={pic} alt="Call the Midwife inspired holiday card"></img>
    <CrackerJoke text="Why did Mother Jesu-Emanuel forbid the Sisters from wearing perfume at the Motherhouse?" punchline="She would not tolerate such nun-scents"></CrackerJoke>

    <audio controls autoPlay className="audio-elem">
     <source src={shelagh} type="audio/mpeg"/>
     Your browser does not support the audio element.
    </audio> 

    <Link to="/nun-puns">For more excellent jokes, click here!</Link>
    </div>
  );
}