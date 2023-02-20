import React from 'react';
import { Form, Button } from 'react-bootstrap';
//import { ReactComponent as Wave } from 'https://res.cloudinary.com/dlbenbmke/image/upload/v1676891305/wave_l5ai8g.svg';
import { NavLink } from 'react-router-dom';
import Navigator from './Navigator';

function Register() {
  return (
    <div className="container-fluid">
      <Navigator />
      <div className="row">
        <div className="col-md-6 mx-auto">
        <div className="card mt-5 position-relative" style={{backgroundImage: "url(https://res.cloudinary.com/dlbenbmke/image/upload/v1676891305/wave_l5ai8g.svg)", backgroundSize: "cover"}}>
          
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
              <p className="text-center mt-3">
                Already have an account? <NavLink to="/login" className="nav-link">Sign In</NavLink>
              </p>
             

            </div>
            
          </div>
         
        </div>
      </div>
     
    </div>
  );
}

export default Register;
