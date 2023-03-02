import React,{useState,useContext,useCallback} from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Login() {
const {login} = useContext(AuthContext);
const [email,setEmail] = useState('');
const [password,setPassword]= useState('');

const particlesInit = useCallback(async engine => {
  // console.log(engine);
  await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);



const submit = (e) =>{
  e.preventDefault();
  login(email,password);
}

  return (
    <div className="container-fluid login">
      <div className="row">
        <div className="col-md-8 mx-auto">
        <div className="card mt-5 position-relative " >
          
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0A3939",
                    },
                    links: {
                        color: "#000",
                        distance: 150,
                        enable: true,
                        opacity: 0.,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <Form className='d-flex flex-column gap-3' onSubmit={submit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
                </Form.Group>
                <Button className='btn btn-success' type="submit" onSubmit={submit}>
                Login
                </Button>
          
              </Form>
              <p className="text-center mt-3 ">
                Don't have an account yet?
              <NavLink to="/register" className="nav-link"><Button className='btn btn-success text-white' >
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