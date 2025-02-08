import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation-menu">
      <ol>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
