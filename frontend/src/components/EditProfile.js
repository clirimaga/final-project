import { Button, Card, Form, Row, Col ,Modal} from "react-bootstrap";
//import multer from 'multer';
//import cloudinary from 'cloudinary';



function EditProfile({show, handleClose }) {
const handleSubmit = () => {}

return (


<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Edit Profile</Modal.Title>
</Modal.Header>
<Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter a short description about yourself"
                
              />
            </Form.Group>

            <Form.Group controlId="formHobbies">
              <Form.Label>Hobbies</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your hobbies"
                
              />
            </Form.Group>

            <Form.Group controlId="formLevel">
              <Form.Label>Level</Form.Label>
              <Form.Control
                as="select"
                
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Advanced"> B1</option>
                <option value="Advanced">B2</option>
                <option value="Advanced">C1</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>
)
}

export default EditProfile;