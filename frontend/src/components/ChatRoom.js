import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get("/messages").then((response) => {
      setMessages(response.data);
    });
  }, []);

  const handleSendMessage = () => {
    axios
      .post("/messages", { message, username })
      .then((response) => {
        setMessages(response.data);
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Chat Room</h1>
          <ul className="list-group">
            {messages.map((msg) => (
              <li key={msg._id} className="list-group-item">
                <strong>{msg.username}: </strong> {msg.message}
              </li>
            ))}
          </ul>
          <hr />
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
