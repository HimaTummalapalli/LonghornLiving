import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid/Grid";
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
