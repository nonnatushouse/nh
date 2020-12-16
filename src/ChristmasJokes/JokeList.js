import React from "react";
import JokeItem from "./JokeItem";
import "./Joke.css";

export default function JokeList() {

    const jokes = [
        {question: "What is Sister Monica Joan's head full of?", punchline: "Nun-sense!"},
        {question: "How come Sister Julienne saw The Sound of Music a second time?", punchline: "She got into a habit"},
        {question: "Which is the most up-lifting CtM character?", punchline: "Phyllis CRANE"},
        {question: "Why did Mother Jesu-Emanuel forbid the Sister from wearing perfume at the Motherhouse?", punchline: "She would not tolerate such nun-scents"},
        {question: "How many Nonnatuns does it take to change a lightbulb?", punchline: "Nun! (Fred does it)"},
        {question: "How come Sister Bernadette quit being a nun?", punchline: "She kicked the habit"},
        {question: "Who handles the biggest Nonnatus deliveries?", punchline: "Nurse Crane"},
        {question: "What did Sister Julienne say when Trixie asked for an opinion on her new hairstyle?", punchline: "\"Franklin my dear, I don't give a damn\""},
        {question: "What do you get if you borrow money from Patrick and Shelagh?", punchline: "Turner-debt"},
    ]

    const jokeList = jokes.map(({question, punchline}) => <JokeItem question={question} punchline={punchline} />);

    return(
        <div className="joke-list">
            {jokeList}
        </div>
    )
}