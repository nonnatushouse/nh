import React from "react";
import "./Game.css";
import classNames from "classnames";


export default function Powerup({count, onPowerupClick, powerup }) {

    const cls = classNames("powerup", {
        "visible": powerup.unlocked && !powerup.bought,
        "bought": powerup.bought,
        "is-dimmed": count < powerup.cost, 
        "is-fullcolor": count >= powerup.cost, 
      });
      
      const cls2 = classNames("powerup-img", {
        "is-dimmed": count < powerup.cost, 
        "is-fullcolor": count >= powerup.cost, 
      });   

      const cls3 = classNames("powerup-multiplyer", {
        "is-dimmed": count < powerup.cost, 
        "is-fullcolor": count >= powerup.cost, 
      });

      const cls4 = classNames("powerup-cost", {
        "is-dimmed": count < powerup.cost, 
        "is-fullcolor": count >= powerup.cost, 
      });

      const cls5 = classNames("powerup-dialog", {
        "is-dimmed": count < powerup.cost, 
        "is-fullcolor": count >= powerup.cost, 
      });


    return (
        <li
          key={powerup.id}
          className={cls}
          onClick={() => onPowerupClick(powerup)}
        >
            <img src={powerup.img} className={cls2} alt="Powerup icon"></img>
            <div className={cls5}></div>
            <div className="powerup-container">
            <div className={cls3} >{powerup.sign}{powerup.bps}</div>
            <div className={cls4} >{getCostString(powerup.cost)}</div>
            </div>

        </li>
      );
}

const ENDS = ["k", "M", "B", "T"]

function getCostString(cost) {
  for (let i = ENDS.length; i >= 1; i--) {
    if(cost >= Math.pow(1000, i)) {
      return (cost/Math.pow(1000, i)).toString() + ENDS[i-1];
    }
  }

  return cost;

}