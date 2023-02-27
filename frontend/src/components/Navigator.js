import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import DarkMode from './DarkMode';

function Navigator() {
  const location = useLocation();

  return (

    <Navbar bg="light" expand="lg">
      <NavLink to="/" className="navbar-brand btn-navlinks">Home</NavLink>
      <NavLink to="/helpful-resources" className="navbar-brand btn-navlinks">Resources</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {location.pathname !== '/helpful-resources'  && location.pathname !== '/login' && location.pathname !== '/register' && <NavLink to="/login" className="nav-link btn-navlinks">Sign In</NavLink>}
          {location.pathname !== '/helpful-resources'  && location.pathname !== '/login' && location.pathname !== '/register' && <NavLink to="/register" className="nav-link btn-navlinks">Sign Up</NavLink>}
          {location.pathname === '/helpful-resources'  && <NavLink to="#" className="nav-link btn-navlinks">My Profile</NavLink>}
          {location.pathname === '/helpful-resources'  && <NavLink to="#" className="nav-link btn-navlinks">Log Out</NavLink>}
          {location.pathname !== '/helpful-resources'  && location.pathname !== '/login' && location.pathname !== '/register' && <NavLink to="/peopleNearBy" className="nav-link btn-navlinks">Near me</NavLink>}
          {location.pathname !== '/helpful-resources'  && location.pathname !== '/login' && location.pathname !== '/register' && <NavLink to="/ChatRoom" className="nav-link btn-navlinks">chat room</NavLink>}
        </Nav>
      
      </Navbar.Collapse>
      <DarkMode />
    </Navbar>
  );
}

export default Navigator;
