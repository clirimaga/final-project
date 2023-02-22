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
        <div className="col-md-8 mx-auto">
        <div className="card mt-5 position-relative register">
          
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              <Form className='d-flex flex-column gap-3'>
              <Form.Group controlId="formBasicEmail">
                  
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                 
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                  
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='btn-navlinks' type="submit">
                  Register
                </Button>
              </Form>
              <p className="text-center mt-3 text-gold">
                Already have an account? <NavLink to="/login" className="nav-link btn-navlinks">Sign In</NavLink>
              </p>
             

            </div>
            
          </div>
         
        </div>
      </div>
     
    </div>
  );
}

export default Register;
