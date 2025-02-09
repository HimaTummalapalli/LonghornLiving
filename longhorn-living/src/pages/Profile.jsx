import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form"); // or any route you want
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleClick}>Open Form</button>
    </div>
  );
}

export default Profile;
