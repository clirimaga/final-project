import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

function Navigator() {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">
      <NavLink to="/" className="navbar-brand">Home</NavLink>
      <NavLink to="/helpful-resources" className="navbar-brand">Resources</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {location.pathname !== '/helpful-resources'  && location.pathname !== '/login' && location.pathname !== '/register' && <NavLink to="/login" className="nav-link">Sign In</NavLink>}
          {location.pathname !== '/helpful-resources'  && location.pathname !== '/login' && location.pathname !== '/register' && <NavLink to="/register" className="nav-link">Sign Up</NavLink>}
          {location.pathname === '/helpful-resources'  && <NavLink to="#" className="nav-link">My Profile</NavLink>}
          {location.pathname === '/helpful-resources'  && <NavLink to="#" className="nav-link">Log Out</NavLink>}
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigator;
