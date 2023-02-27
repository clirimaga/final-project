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
    <div className="container-fluid">
      <Navigator />
      <div className="row">
        <div className="col-md-8 mx-auto">
        <div className="card mt-5 position-relative login" >
          
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <Form className='d-flex flex-column gap-3' onSubmit={submit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
                </Form.Group>
                <input className='btn-navlinks' type="submit" onSubmit={submit}
                  Login
                />
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

// {
//   "name": "clirim",
//   "email": "cliriim@aaaaaaa.com",
//   "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png",
//   "password": "123",
//   "description": "i am clirim",
//   "hobbies": ["football","basketball"],
//   "germanLevel": "B1",
//   "geometry": {
//       "type": "point",
//       "coordinates": [41.20, 21.91]
//   }
//   }