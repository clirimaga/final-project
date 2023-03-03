import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ChatRoom = () => {
  
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ]);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', recipient: 'Jane', message: 'Hi Jane!' },
    { id: 2, sender: 'Jane', recipient: 'John', message: 'Hi John, how are you?' },
    { id: 3, sender: 'John', recipient: 'You', message: 'Hi Miniumn, how are you?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSendClick = () => {
    console.log(selectedUser)
    const message = {
      sender: "You",
      message: newMessage,
      recipient: selectedUser.name,
    };
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <div className="bg-light border rounded p-3">
            <h4>Users</h4>
            <ul className="list-group">
              {users.map((user) => (
                <li
                  key={user.id}
                  className={`list-group-item list-group-item-action ${
                    user.id === selectedUser.id ? 'active' : ''
                  }`}
                  onClick={() => handleUserClick(user)}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col sm={8}>
          <div className="bg-light border rounded p-3">
            <h4>Chat with {selectedUser.name}</h4>
            <div className="border rounded p-2 mb-2" style={{ height: '400px', overflowY: 'scroll' }}>
              {messages
                .filter(
                  (message) =>
                    (message.sender === selectedUser.name && message.recipient === 'You') ||
                    (message.sender === 'You' && message.recipient === selectedUser.name)
                )
                .map((message) => (
                  <div key={message.id} className="mb-2">
                    <strong>{message.sender}:</strong> {message.message}
                  </div>
                ))}
            </div>
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button className="btn btn-primary ms-2" onClick={handleSendClick}>
                Send
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatRoom;
