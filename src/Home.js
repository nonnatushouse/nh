import React from "react";
import "./App.css";

export default function Home() {
  const score = 8;
  const noQ = 10;

  const perCentage = Math.round((score * 100) / noQ);

  const circleFillIn = 820 - 820 * (score / noQ);

  return (
    <svg width="350" height="350" className="circle">
      <path
        className="score-path-br"
        d="M45,175a130,130 0 1,0 260,0a130,130 0 1,0 -260,0"
        stroke-width="30"
        stroke="#756A56"
        fill="transparent"
      />
      <path
        className="score-path"
        d="M175,45a130,130 0 0,1 0,260a130,130 0 0,1 0,-260"
        stroke-width="31"
        stroke="#F7C66A"
        stroke-opacity="1"
        fill="transparent"
        style={{ strokeDasharray: 820, strokeDashoffset: 820 }}
      >
        <animate
          attributeType="CSS"
          attributeName="stroke-dashoffset"
          from="820"
          to={circleFillIn}
          begin="1s"
          dur="3"
          fill="freeze"
          calcMode="spline"
          keySplines="0.26 0.51 0.41 0.84"
        />
      </path>

      <text x="175" y="175" textAnchor="middle" fontSize="70px" dy="25px">
        {circleFillIn}
      </text>
    </svg>
  );
}
