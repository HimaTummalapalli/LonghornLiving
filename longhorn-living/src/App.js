import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import MyNavbar from "./components/MyNavBar";
import CreateAccPage from "./pages/CreateAccPage.jsx";
import FormPage from "./pages/FormPage";
function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create_acc" element={<CreateAccPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
