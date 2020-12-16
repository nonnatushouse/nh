import React from "react";
import JokeList from "./JokeList";

export default function Jokes() {

    return (
    <div className="jokes-container">
    <div>Click a card to reveal the punchline. Click it again to flip it back!</div>
    <JokeList/>
    </div>)
}