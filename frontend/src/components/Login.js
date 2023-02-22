import React from 'react';
import { Form, Button } from 'react-bootstrap';
//import { ReactComponent as Wave } from 'https://res.cloudinary.com/dlbenbmke/image/upload/v1676891305/wave_l5ai8g.svg';
import { NavLink } from 'react-router-dom';
import Navigator from './Navigator';

function Login() {
  return (
    <div className="container-fluid">
      <Navigator />
      <div className="row">
        <div className="col-md-8 mx-auto">
        <div className="card mt-5 position-relative login" >
          
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <Form className='d-flex flex-column gap-3'>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group> */}
                <Button className='btn-navlinks' type="submit">
                  Login
                </Button>
              </Form>
              <p className="text-center mt-3 text-gold">
                Don't have an account yet?
              <NavLink to="/register" className="nav-link btn-navlinks">Sign Up</NavLink>
              </p>
            

            </div>
            
          </div>
         
        </div>
      </div>
     
    </div>
  );
}

export default Login;
