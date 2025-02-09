import React from "react";
import "./Card.css";
// import { Highlight } from 'react-highlight-regex'
// import Highlighter from "react-highlight-words";

export default function Card({ firstName, lastName, housingLoc, major, year }) {

  const handleClick = () => {
    alert("We've let them know!")
  }

  return (
    <>
      <div id="bob" className="card_div">
        <div className="img_div">
          <img
            src="LonghornLivingIcon.jpg"
            alt="Profile Pic"
            className="profile_pic"
          />
        </div>
        <p className="name">{firstName + " " + lastName}</p>
        <p className="other_info">
          {housingLoc + " | " + major + " | " + year}
        </p>
        <div className="message_outer">
          <button className="message" onClick={handleClick}>Interested!</button>
        </div>
      </div>
    </>
  );
}
