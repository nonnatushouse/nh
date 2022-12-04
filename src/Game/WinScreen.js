import React from "react";
import "./Info.css"
import TotalTime from "./TotalTime";

export default function WinScreen({hasWon, totalTime, onClickExit, onClickReset}) {

    if (!hasWon) {
        return null;
    }

    return (
        <>
        <div className="info-background" onClick={() => onClickExit(false)}></div>
        <div className="info-box">
            <div className="info-exit" onClick={() => onClickExit(false)}>✖</div>

            <h1 className="info-title">You won!</h1>
            <p>You delivered ALL the babies. Well done!</p>

            <TotalTime
            totalTime={totalTime}
            text={"And it only took you a mere"}/>
            <p>Close this window to continue playing, or reset the game below.</p>
            {/* <a href="https://orteil.dashnet.org/cookieclicker/" rel="noopener noreferrer" target="_blank">Cookie Clicker</a> and 
            <a href="https://www.decisionproblem.com/paperclips/" rel="noopener noreferrer" target="_blank">Universal Paperclips</a>  */}

            <p>Note: Resetting is irreversible</p>
            <div className="reset" onClick={() => onClickReset()}>Reset game</div>
            
            

        </div>



        </>
      );
}

