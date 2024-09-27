import React, { useEffect, useLayoutEffect, useState } from "react";
import classNames from "classnames";
import "./LegacyRandomizer.css";

const colors = ["#f00", "#00bf00", "#00f", "#ff0", "#f0f", "#0ff"];

export default function LegacyRandomizer() {
  const [isVisible, setIsVisible] = useState(false);
  const [lights] = useState(() =>
    Array.from(
      { length: Math.min(Math.round((document.body.clientWidth * document.body.clientHeight) / 20000), 50) },
      () => rnd(0, colors.length)
    )
  );
  const [flakes] = useState(() =>
    Array.from(
      { length: Math.min(Math.round((document.body.clientWidth * document.body.clientHeight) / 20000), 50) },
      (_v, i) => i
    )
  );

  useLayoutEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    function listener(event) {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    }

    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className={classNames("legacy-randomizer", isVisible && "active")}>
      {lights.map((index, i) => (
        <span
          key={i}
          className="legacy-light"
          style={{
            backgroundColor: colors[index],
            animation: `${rnd(500, 1500)}ms ${rnd(0, 500)}ms infinite legacy-lights-${index}`,
            top: `${rnd(0, 100)}%`,
            left: `${rnd(0, 100)}%`,
          }}
        ></span>
      ))}
      {flakes.map((_v, i) => (
        <span
          key={i}
          className="legacy-flake"
          style={{
            left: `${rnd(0, 100)}%`,
            animationDuration: `${rnd(10000, 12000)}ms, ${rnd(1500, 3000)}ms`,
            animationDelay: `${rnd(0, 11000)}ms, ${rnd(-2000, 0)}ms`,
          }}
        ></span>
      ))}
      <h1 className="legacy-message">Merry Christmas!</h1>
    </div>
  );
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
