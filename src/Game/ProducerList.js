import React from "react";
import "./Game.css";
import Producer from './Producer'

export default function ProducerList({count, onProducerClick, producers}) {

    return (
        <ul className="producer-list">
            {producers.map(producer => (
                <Producer
                key={producer.id}
                count={count}
                onProducerClick={(producer) => onProducerClick(producer)}
                producer={producer}
                />
            ))}
        </ul>
      );
}