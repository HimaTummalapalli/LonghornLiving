/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import { Highlight } from 'react-highlight-regex'
// import Highlighter from "react-highlight-words";

export default function Card({ firstName, lastName, housingLoc, major, year }) {
  return (
    <>
      çß
      <div className="flex flex-col items-center text-center gap-3 border rounded-xl shadow-md p-4 w-[25rem] h-min">
        <div>
          <img
            src="%PUBLIC_URL%/LonghornLivingIcon.jpg"
            alt={"Profile Pic"}
            className="object-cover h-64 w-64"
          />
        </div>
        <p className="font-bold">{firstName + " " + lastName}</p>
        <p className="font-bold">{housingLoc + "|" + major + "|" + year}</p>
        <a
          href={instancePage}
          className="btn btn-primary"
          style={{ marginTop: "30px" }}
        >
          Message
        </a>
      </div>
    </>
  );
}
