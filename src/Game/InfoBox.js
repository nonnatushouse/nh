import React from "react";
import "./Info.css"
import TotalTime from "./TotalTime";

export default function InfoBox({totalTime, showInfoBox, onClickExit, onClickReset}) {

    if (!showInfoBox) {
        return null;
    }

    let text = totalTime ? "Well done you! You won in a mere" : ""

    return (
        <>
        <div className="info-background" onClick={() => onClickExit(false)}></div>
        <div className="info-box">
            <div className="info-exit" onClick={() => onClickExit(false)}>✖</div>

            <h1 className="info-title">Deliveroo</h1>
            <p>Welcome to Deliveroo! This is a very, very silly little game based on games such as Cookie Clicker and Universal Paperclips.</p>

            <p> You play by clicking the 'Deliver a baby' button. Again. And again. Until you unlock a helper that will deliver babies for you.</p>
            {/* <a href="https://orteil.dashnet.org/cookieclicker/" rel="noopener noreferrer" target="_blank">Cookie Clicker</a> and 
            <a href="https://www.decisionproblem.com/paperclips/" rel="noopener noreferrer" target="_blank">Universal Paperclips</a>  */}

            <p>Once helpers appear, they can be bought at price 'cost'. This will subtract the cost from your total number of delivered babies. (Please do not think about the horrifying implications of this - again, it's just a very silly game and this is the classic cookie clicker mechanic).</p>
            <p>'bps' stands for 'babies per second', aka how many in total that are delivered every second.</p>

            <TotalTime
            text={text}
            totalTime={totalTime}/>           


            <p>Note: Resetting is irreversible</p>
            <div className="reset" onClick={() => onClickReset()}>Reset game</div>
            

        </div>



        </>
      );
}

