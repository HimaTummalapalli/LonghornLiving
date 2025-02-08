import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Card";
import AppRoutes from "./routes/AppRoutes";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Profile from "./pages/profile.js";

function App() {
  return (
    <>
      <Card
        firstName="Hima"
        lastName="T"
        housingLoc="Off campus"
        major="CS"
        year="Senior"
      ></Card>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
