import React,{useState,useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
//import { ReactComponent as Wave } from 'https://res.cloudinary.com/dlbenbmke/image/upload/v1676891305/wave_l5ai8g.svg';
import { NavLink } from 'react-router-dom';
import Navigator from './Navigator';
import { AuthContext } from './context/AuthProvider';
function Register() {
  const {signup} = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword]= useState('');
  
  const submit = (e) =>{
    e.preventDefault();
    signup(name,email,password);
  }

  return (
    <div className="container-fluid register">
      <div className="row">
        <div className="col-md-8 mx-auto">
        <div className="card mt-5 position-relative ">
          
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              <Form className='d-flex flex-column gap-3' onSubmit={submit}>
              <Form.Group controlId="formBasicEmail">
                  
                  <Form.Control type="text" placeholder="Name" onChange={e=>{setName(e.target.value)}} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                 
                  <Form.Control type="email" placeholder="Email"  onChange={e=>{setEmail(e.target.value)}}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  
                  <Form.Control type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}} />
                </Form.Group>
                
                {/* <Form.Group controlId="formBasicPassword">
                  
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button className='button' type="submit">
                  Register
                </Button>
              </Form>
              <p className="text-center mt-3 ">
                Already have an account? <NavLink to="/login" className="nav-link"><Button className='button text-white' >
                Sign in
                </Button></NavLink>
              </p>
             

            </div>
            
          </div>
         
        </div>
      </div>
     
    </div>
  );
}

export default Register;
