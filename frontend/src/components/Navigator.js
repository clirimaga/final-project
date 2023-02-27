import React, {useContext} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './components.css'
import { AuthContext } from './context/AuthProvider';
import DarkMode from './DarkMode';

function Navigator() {
  const location = useLocation();
  const {user, logout} = useContext(AuthContext);
  return (

    <Navbar className='navbar' expand="lg">
      <NavLink to="/" className="navbar-brand navlink">Home</NavLink>
      <NavLink to="/helpful-resources" className="navbar-brand navlink">Resources</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        {user ? (
          
            <NavLink to="/profile" className='navlink'>Profile</NavLink>
          
        ) : null}
        
          {user ? (
            <button className='button text-white' onClick={() => logout()}>Logout</button>
          ) : (
            <>
            <NavLink to="/login" className='navlink'>Sign in</NavLink>
            <NavLink to="/register" className='navlink'>Sign up</NavLink>
            </>
          )} 
        </Nav>
      
      </Navbar.Collapse>
      <DarkMode />
    </Navbar>
  );
}

export default Navigator;
