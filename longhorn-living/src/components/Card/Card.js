import React from "react";
import "./Card.css";
// import { Highlight } from 'react-highlight-regex'
// import Highlighter from "react-highlight-words";

export default function Card({ firstName, lastName, housingLoc, major, year }) {
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
        <p className="other_info">{housingLoc + " | " + major + " | " + year}</p>
        <br></br>
        <br></br>
        <div className="message_outer">
          <div className="message">
            <a
              href="/"
            >
            Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
