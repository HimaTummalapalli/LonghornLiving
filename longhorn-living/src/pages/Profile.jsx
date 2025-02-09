import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [curUserInfo, setCurUserInfo] = useState({
    firstName: "", 
    lastName: "", 
    major: "", 
    housingType: "",
    classLevel: "",
    gender: ""
  });
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  

  const handleClick = () => {
    navigate("/form"); // or any route you want
  };

  useEffect(() => {
    const getUserInfo = async() => {
      try {
        const response = await axios.get("http://localhost:3000/users")
        setUserInfo(response.data)
      } catch (e) {
        throw setError(e)
      } finally {
        setLoading(false)
      }
    }

    getUserInfo()
  }, [])

  useEffect(() => {
    const getCurrentUserInfo = () => {
      const username = sessionStorage.getItem('username')
      for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].id === username) {
          setCurUserInfo(userInfo[i])
        }
      }

      console.log(curUserInfo)
    }

    getCurrentUserInfo()
  }, [userInfo])

  if (loading) {
    return <p>Loading Data ...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <div>
        <img src="/LonghornLivingIcon.jpg" alt="Logo" className="logo" />
      </div>
      <br />
      <p className="paragraph">
        {curUserInfo.firstName} {curUserInfo.lastName}
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
        Major: {curUserInfo.major}
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
        Housing Type: {curUserInfo.housingLoc}
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
        Class Level: {curUserInfo.year}
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
