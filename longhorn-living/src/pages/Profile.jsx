import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
function Profile() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form"); // or any route you want
  };

  return (
    <div>
      <div>
        <img src="/LonghornLivingIcon.jpg" alt="Logo" className="logo" />
      </div>
      <br />
      <p className="paragraph">
        FirstName LastName
        <button
          style={{
            background: "none",
            backgroundColor: "none",
            border: "none",
            padding: 0,
            marginLeft: 5,
            width: 10,
            height: 5,
            cursor: "pointer",
          }}
          onClick={() => console.log("Edit clicked!")}
        >
          <img src="/editIcon.png" alt="edit" className="edit-icon" />
        </button>
      </p>
      <p className="paragraph">
        Major: Computer Science
        <button
          style={{
            background: "none",
            backgroundColor: "none",
            border: "none",
            padding: 0,
            marginLeft: 5,
            width: 10,
            height: 5,
            cursor: "pointer",
          }}
          onClick={() => console.log("Edit clicked!")}
        >
          <img src="/editIcon.png" alt="edit-icon" className="edit-icon" />
        </button>
      </p>
      <p className="paragraph">
        Housing Type: Off-Campus
        <button
          style={{
            background: "none",
            backgroundColor: "none",
            border: "none",
            padding: 0,
            marginLeft: 5,
            width: 10,
            height: 5,
            cursor: "pointer",
          }}
          onClick={() => console.log("Edit clicked!")}
        >
          <img src="/editIcon.png" alt="edit-icon" className="edit-icon" />
        </button>
      </p>
      <p className="paragraph">
        Class Level: Freshman
        <button
          style={{
            background: "none",
            backgroundColor: "none",
            border: "none",
            padding: 0,
            marginLeft: 5,
            width: 10,
            height: 5,
            cursor: "pointer",
          }}
          onClick={() => console.log("Edit clicked!")}
        >
          <img src="/editIcon.png" alt="edit-icon" className="edit-icon" />
        </button>
      </p>
      <div>
        <button onClick={handleClick} className="changeInfoBttn">
          Change My Info
        </button>
      </div>
    </div>
  );
}

export default Profile;
