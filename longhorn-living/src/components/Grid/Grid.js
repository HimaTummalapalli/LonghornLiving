import React from "react";
import Card from "../Card/Card";
import './Grid.css'

export default function Grid({ cards }) {
  return (
    <>
      <div className="grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            firstName={card.firstName}
            lastName={card.lastName}
            housingLoc={card.housingLoc}
            major={card.major}
            year={card.year}
          />
        ))}
      </div>
    </>
  );
}
