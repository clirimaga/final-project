import React from 'react';
import {NavLink} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigator() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="gap-3 header">
          
          <NavLink to="/logo" className="text-decoration-none text-dark ">
            login
          </NavLink>
          <NavLink to="/register" className="text-decoration-none text-dark  ">
            Register
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}
