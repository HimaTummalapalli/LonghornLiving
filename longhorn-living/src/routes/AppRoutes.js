import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Navbar from "../components/MyNavBar.jsx";
import CreateAccPage from "../pages/CreateAccPage.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create_acc" element={<CreateAccPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
