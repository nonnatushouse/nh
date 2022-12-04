import React from "react";
import "./Game.css";

export default function CountDisplay({count, manualClicks, allProducers }) {

    let bps = manualClicks.reduce((a, b) => a+b, 0);

    for (let i = 0; i < allProducers.length; i++) {
        bps += allProducers[i].bps * allProducers[i].howManyBought;
    }

    return (
        <>
        <div>Babies delivered:</div>
        <div className="count">{count.toLocaleString('en') }</div>
        <div className="bps">bps: {bps.toLocaleString('en')}</div>
        
        </>
      );
}

