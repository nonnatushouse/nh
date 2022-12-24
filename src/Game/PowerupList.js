import React from "react";
import "./Game.css";
import Powerup from "./Powerup";

export default function PowerupList({count, onPowerupClick, powerups}) {

    return (
        <>
        <div className="powerup-title">Powerups</div>
        <ul className="powerup-list">
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