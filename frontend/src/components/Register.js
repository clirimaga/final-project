import React,{useState,useContext,useCallback} from 'react';
import { Form, Button } from 'react-bootstrap';
//import { ReactComponent as Wave } from 'https://res.cloudinary.com/dlbenbmke/image/upload/v1676891305/wave_l5ai8g.svg';
import { NavLink } from 'react-router-dom';
import Navigator from './Navigator';
import { AuthContext } from './context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Register() {
  const {signup} = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword]= useState('');
  
  const submit = (e) =>{
    e.preventDefault();
    signup(name,email,password);
  }
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  
  return (
    <div className="container-fluid register">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 mx-auto">
        <div className="card mt-5 position-relative ">
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
              }}/>
            <div className="card-body">
              <h2 className="card-title text-center text-black mb-4">Register</h2>
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
                <Button className='btn btn-success'type="submit">
                  Register
                </Button>
              </Form>
              <p className="text-center  text-black mt-3 ">
                Already have an account? <NavLink to="/login" className="nav-link"><Button className='btn btn-success' >
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
