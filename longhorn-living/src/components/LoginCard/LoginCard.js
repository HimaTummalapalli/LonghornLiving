import React from "react";
import "./LoginCard.css"
import "../Card/Card.css";
import {Link} from 'react-router-dom';
import { useState } from 'react';
// import { Highlight } from 'react-highlight-regex'
// import Highlighter from "react-highlight-words";

export default function LoginCard() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    // const navigate = useNavigate();

    const handleSubmit = () => {
       alert("Hello, world!");
    };

  return (
    <>
        <div className="card_outer">
            <div className="login_card_div">
                <form onSubmit={handleSubmit}> 
                    <h2 className="sign_in"><label>Sign In</label></h2>
                    <input
                        className="sign_in_input"
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Username"
                    />
                    <br></br>
                    <br></br>
                    <input
                        className="sign_in_input"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="login_div">
                        <input type="submit" className="message"/>
                    </div>
                    <p className="new_user">New User? <Link to="/create_acc">Create Account</Link></p>
                </form>
            </div>
        </div>
    </>
  );
}
