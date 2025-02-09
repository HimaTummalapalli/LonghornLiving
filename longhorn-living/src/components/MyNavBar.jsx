// src/components/MyNavbar.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // IMPORTANT for client-side nav

function MyNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#BF5700" }}>
      <Container>
        <div className="logo-container">
          <Link to="/">
            <img
              src="/LonghornLivingIcon.jpg"
              className="img-fluid"
              alt="Logo"
              width="50"
              height="50"
            />
          </Link>
        </div>
        <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
          LonghornLiving
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" style={{ color: "white" }}>
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
