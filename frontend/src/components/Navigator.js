import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "./components.css";
import { AuthContext } from "./context/AuthProvider";
import DarkMode from "./DarkMode";

function Navigator() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  return (
    <Navbar className="navbar ps-5" expand="lg">
      <NavLink to="/" className="navlink">
        Home
      </NavLink>
      <NavLink to="/helpful-resources" className="navlink">
        Resources
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {user ? (
            <NavLink to="/profile" className="navlink px-2">
              <img id="userpic" src={user.pic} alt="userpic" title="Profile" />
            </NavLink>
          ) : null}

          {user ? (
            <button
              className="btn btn-success text-black"
              onClick={() => logout()}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="navlink">
                Sign in
              </NavLink>
              <NavLink to="/register" className="navlink">
                Sign up
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      <DarkMode className="pe-5" />
    </Navbar>
  );
}

export default Navigator;
