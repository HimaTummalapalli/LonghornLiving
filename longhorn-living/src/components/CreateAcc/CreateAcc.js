import React from "react";
import "./CreateAcc.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Highlight } from 'react-highlight-regex'
// import Highlighter from "react-highlight-words";
import axios from "axios";

export default function CreateAcc() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [major, setMajor] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [housingLoc, setHousingLoc] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
        const response = await axios.post("http://localhost:3000/users", {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            major: major,
            year: classLevel,
            housingLoc: housingLoc
        });
        console.log('Success: ', response.data);
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  return (
    <>
      <div className="create_card_outer">
        <div className="create_acc_div">
          <form onSubmit={handleSubmit}>
            <h2 className="create_acc">Create Account</h2>
            <input
              className="create_acc_input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              className="create_acc_input"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <input
              className="create_acc_input"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Gender"
            />
            <input
              className="create_acc_input"
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="Major"
            />
            <input
              className="create_acc_input"
              type="text"
              value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}
              placeholder="Class Level"
            />
            <input
              className="create_acc_input"
              type="text"
              value={housingLoc}
              onChange={(e) => setHousingLoc(e.target.value)}
              placeholder="Housing Location"
            />
            <br></br>
            <br></br>
            <br></br>
            <div className="create_acc_btn_div">
              <input type="submit" className="create_acc_btn" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
