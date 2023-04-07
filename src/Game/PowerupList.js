import React from "react";
import "./Game.css";
import Powerup from "./Powerup";
import classNames from "classnames";

export default function PowerupList({count, totalCount, onPowerupClick, powerups}) {

    const targetCount = 95;
    const visible = totalCount >= targetCount;
    const cls1 = classNames("powerup-title", {
        "powerups-visible": visible
      });
    const cls2 = classNames("powerup-list", {
    "powerups-visible": visible
    });


    return (
        <>
        <div className={cls1}>Powerups</div>
        <ul className={cls2}>
            {powerups.map(powerup => (
                <Powerup
                key={powerup.id}
                count={count}
                onPowerupClick={(powerup) => onPowerupClick(powerup)}
                powerup={powerup}
                />
            ))}
        </ul>
        </>
      );
}