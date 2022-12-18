import React from "react";
import "./Game.css";
import classNames from "classnames";


export default function Producer({count, onProducerClick, producer }) {

    const cls = classNames("producer", {
        "is-dimmed": count < producer.cost, 
        "is-fullcolor": count >= producer.cost, 
        "is-displayed": producer.unlocked
      });

      const cls2 = classNames("producer-img", {
        "is-dimmed": count < producer.cost, 
        "is-fullcolor": count >= producer.cost, 
      });      

    return (
        <li
          key={producer.id}
          className={cls}
          onClick={() => onProducerClick(producer)}
        >
          <div className="producer-container">
            <img src={producer.img} className={cls2} alt="Producer icon"></img>
            <div className="producer-name">{producer.name}</div>
            <div className="producer-info">
                <div className="producer-info-item">bps: {producer.bps.toLocaleString('en')}</div>
                <div className="producer-info-item">cost: {producer.cost.toLocaleString('en')}</div>
                
            </div>
              
          </div>
          <div className="producer-howmany">{producer.howManyBought === 0 ? "" : producer.howManyBought }</div>
        </li>
      );
}

