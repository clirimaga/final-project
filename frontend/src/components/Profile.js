import React, { useState } from "react";
import { Button, Card, Form, Row, Col ,Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./Navigator";
import Footer from "./Footer";
import EditProfile from "./EditProfile";
import Photo from "./Photo";

function Profile() {
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [description, setDescription] = useState("I am a software developer");
    const [hobbies, setHobbies] = useState("Coding, hiking, reading");
    const [pic, setPic] = useState("https://res.cloudinary.com/dlbenbmke/image/upload/v1677069048/kimson-doan-HD8KlyWRYYM-unsplash-2_liybph.jpg");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
        <div>
        <Navigator />   
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <Row>
            <Col xs={4} md={3}>
              
              <Photo />
            </Col>
            <Col xs={8} md={9}>
              <h5>{name}</h5>
              <p className="text-muted">{email}</p>
              <p>{description}</p>
              <h6>Hobbies:</h6>
              <p>{hobbies}</p>
              <h6>Level: B1</h6>
              
              <Button variant="primary" onClick={handleShow}>
                Edit Profile
              </Button>
              
              <button className="btn btn-primary position-absolute bottom-0 end-0 mb-3 me-3">See people nearby</button>
            </Col>
            
          </Row>
          
        </Card.Body>
      </Card>
      <Footer/>
     <EditProfile show={show} handleClose={handleClose}/>
      </div>
    );
  }
  
  export default Profile;
  