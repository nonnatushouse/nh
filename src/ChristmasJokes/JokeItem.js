import React, { useState } from "react";
import classNames from "classnames";



export default function JokeItem({
  question,
  punchline
})

{
    const [isRevealed, setRevealed] = useState(false)

    const cls=classNames("flip-card", {"is-revealed": isRevealed})

    function toggle() {
        setRevealed((prev) => !prev)
    }

    return (
    <div className={cls} onClick={toggle}>
        <div className="flip-card-inner">
            <div className="flip-card-question">
                {question}
            </div>

            <div className="flip-card-punchline">
                {punchline}
            </div>
        </div>
    </div>
    )
}