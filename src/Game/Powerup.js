import React from "react";
import "./Game.css";
import classNames from "classnames";


export default function Powerup({count, onPowerupClick, powerup }) {

    const cls = classNames("powerup", {
        "visible": powerup.unlocked && !powerup.bought,
        "bought": powerup.bought
      });

      const cls2 = classNames("powerup-img");

    return (
        <li
          key={powerup.id}
          className={cls}
          onClick={() => onPowerupClick(powerup)}
        >
            <img src={powerup.img} className={cls2} alt="Powerup icon"></img>
            <div className="powerup-dialog"></div>
            <div className="powerup-container">
            <div className="powerup-multiplyer"> bps x{powerup.bps}</div>
            <div className="powerup-cost">{getCostString(powerup.cost)}</div>
            </div>

        </li>
      );
}

const ENDS = ["k", "M", "B", "T"]

function getCostString(cost) {
  for (let i = ENDS.length; i >= 1; i--) {
    if(cost >= Math.pow(1000, i)) {
      return (cost/1000).toString() + ENDS[i-1];
    }
  }

  return cost;

}