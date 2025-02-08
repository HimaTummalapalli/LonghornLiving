import React from "react";
// import "../Card/Card.css";
// import { useNavigate } from 'react-router-dom';
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
        <form onSubmit={handleSubmit}>
            <label>Sign In</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit"/>
        </form>
    </>
  );
}
