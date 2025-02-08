import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid/Grid";
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
<<<<<<< Updated upstream
        <Navbar />
=======
        <MyNavbar />
>>>>>>> Stashed changes
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
<<<<<<< Updated upstream
=======

      <Card
        firstName="Hima"
        lastName="T"
        housingLoc="Off campus"
        major="CS"
        year="Senior"
      ></Card>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
