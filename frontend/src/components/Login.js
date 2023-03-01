import React,{useState,useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navigator from './Navigator';
import { AuthContext } from './context/AuthProvider';




function Login() {
  const {login} = useContext(AuthContext);
const [email,setEmail] = useState('');
const [password,setPassword]= useState('');

const submit = (e) =>{
  e.preventDefault();
  login(email,password);
}

  return (
    <div className="container-fluid login">
      <div className="row">
        <div className="col-md-8 mx-auto">
        <div className="card mt-5 position-relative " >
          
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <Form className='d-flex flex-column gap-3' onSubmit={submit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
                </Form.Group>
                <Button className='button text-white' type="submit" onSubmit={submit}>
                Login
                </Button>
          
              </Form>
              <p className="text-center mt-3 ">
                Don't have an account yet?
              <NavLink to="/register" className="nav-link"><Button className='button text-white' >
                Sign up
                </Button></NavLink>
              </p>
            

            </div>
            
          </div>
         
        </div>
      </div>
     
    </div>
  );
}

export default Login;

