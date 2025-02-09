import React from "react";
import "./LoginCard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Highlight } from 'react-highlight-regex'
// import Highlighter from "react-highlight-words";

export default function LoginCard() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState([]);
//   const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async() => {
      try {
        const response = await axios.get("http://localhost:3000/logins")
        setUserInfo(response.data)
      } catch (e) {
        console.log(e)
      }
    }

    getUserInfo()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = userInfo.find(
        (user) => user.id === username && user.password === password
    );

    if (user) {
        setIsAuthenticated(true);
        navigate("/form", {state:{username:username}});
      } else {
        alert('Invalid username and password')
        setUserName("")
        setPassword("")
        // setError(null)
      }
  };

  return (
    <div className="card_outer">
      <div className="login_card_div">
        <form className="login_card_form" onSubmit={handleSubmit}>
          <h2 className="sign_in">Sign In</h2>
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br></br>
          <br></br>
          <br></br>
          <div className="login_div">
            <input type="submit" className="login" />
          </div>
          <p className="new_user">
            New User? <Link to="/create_acc">Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
