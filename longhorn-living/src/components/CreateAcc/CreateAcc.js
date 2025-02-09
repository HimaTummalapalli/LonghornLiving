import React from "react";
import "./CreateAcc.css"
import "../Card/Card.css";
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { Highlight } from 'react-highlight-regex'
// import Highlighter from "react-highlight-words";

export default function CreateAcc() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [major, setMajor] = useState("")
    const [classLevel, setClassLevel] = useState("")
    const [housingLoc, setHousingLoc] = useState("")
    // const navigate = useNavigate();

    const handleSubmit = () => {
       alert("Hello, world!");
    };

  return (
    <>
        <div className="create_card_outer">
            <div className="create_acc_div">
                <form onSubmit={handleSubmit}> 
                    <h2 className="create_acc"><label>Create Account</label></h2>
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
                        <input type="submit" className="message"/>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
}
