import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function MessagePage() {
    const location = useLocation();
    const toMessage = location.state?.toMessage || "No message provided";
    const [messages, setMessages] = useState([])
    const [newMessage, setMessage] = useState("")

    const handleSendMessage = () => {
        setMessages([...messages, newMessage])
        setMessage("")
    }
  
    return (
        <div className="message_div">
            <img
                src="LonghornLivingIcon.jpg"
                alt="Profile Pic"
                className="profile_pic"
            />
            <h2 className="message_h"><label>{toMessage}</label></h2>
            <div className="message_list">
                {messages.map((message, index) => (
                    <>
                        <div key={index} className="message">
                            {message}
                        </div>
                        <p></p>
                    </>
                ))}
            </div>
            <div className="message_input_div">
                <input
                type="text"
                value={newMessage}
                onChange={(e) => setMessage(e.target.value)}
                className="message_input"
                />
                <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
    )
}