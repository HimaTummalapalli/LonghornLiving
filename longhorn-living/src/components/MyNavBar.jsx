// src/components/MyNavbar.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // IMPORTANT for client-side nav

function MyNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#BF5700" }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
          <img
            src="/LonghornLivingIcon.jpg"
            alt="Logo"
            width="50"
            height="30"
            className="d-inline-block align-top"
            style={{ marginRight: "8px" }}
          />
          LonghornLiving
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
              Login
            </Nav.Link>
            <Navbar.Brand as={Link} to="/profile" style={{ color: "white" }}>
              <img
                src="/LonghornLivingIcon.jpg"
                alt="profilePic"
                width="50"
                height="30"
                className="d-inline-block align-top"
                style={{ marginRight: "8px" }}
              />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
