import React, {useContext} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';

function Navigator() {
  const location = useLocation();
  const {user, logout} = useContext(AuthContext);
  return (

    <Navbar bg="light" expand="lg">
      <NavLink to="/" className="navbar-brand btn-navlinks">Home</NavLink>
      <NavLink to="/helpful-resources" className="navbar-brand btn-navlinks">Resources</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        {user ? (
          
            <NavLink to="/profile">Profile</NavLink>
          
        ) : null}
        

          {user ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <>
            <NavLink to="/login">Sign in</NavLink>
            <NavLink to="/register">Sign up</NavLink>
            </>
          )}  
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigator;
