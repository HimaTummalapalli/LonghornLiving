import logo from "./logo.svg";
import "./App.css";
import LoginCard from "./components/LoginCard/LoginCard";
import AppRoutes from "./routes/AppRoutes";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import MyNavbar from "./components/MyNavBar";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <LoginCard></LoginCard>
    </>
  );
}

export default App;
