import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axiosClient from "./axiosClient";
import Img from "./Img";

function EditProfile({setShow, show, handleClose, profile, setProfile }) {
  const [name, setName] = useState(profile.name);
  const [description, setDescription] = useState(profile.description);
  const [hobbies, setHobbies] = useState(profile.hobbies);
  const [germanLevel, setGermanLevel] = useState(profile.germanLevel);
  const [file, setFile] = useState("");
  const [pic, setPic] = useState("");
  const [uploadedImg,setUploadedImg] =useState('');

  const updateUser = async (e) => {
    e.preventDefault();
    setShow(false)
    try {
       const result = await axiosClient
          .put("/users/profile", { name, description, hobbies, germanLevel,pic })
      setProfile(result.data)
     } catch (error) {
      console.log(error)
     }
  };

  const previewFiles = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPic(reader.result);
    };
    console.log(pic);

  };

  const fileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    setFile(file);
    previewFiles(file);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column gap-3">
          <Form.Group controlId="formDescription">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Your Full Name"
              defaultValue={profile.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter a short description about yourself"
              defaultValue={profile.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formHobbies">
            <Form.Label>Hobbies:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your hobbies"
              defaultValue={profile.hobbies}
              onChange={(e) => setHobbies(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formLevel">
            <Form.Label>German Level:</Form.Label>
            <Form.Control
              as="select"
              defaultValue={profile.germanLevel}
              onChange={(e) => setGermanLevel(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Advanced"> B1</option>
              <option value="Advanced">B2</option>
              <option value="Advanced">C1</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formHobbies">
            <Form.Label>Change/Upload Profile Picture:</Form.Label>
            <input
              type="file"
              id="fileInput"
              onChange={fileChange}
              accept="image/png,image/jpeg,image/jpg"
            />
            <img src={pic} alt="img" style={{width:200}}/>
            <Img uploadedImg={uploadedImg}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={updateUser}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfile;
