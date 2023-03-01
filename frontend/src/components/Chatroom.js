import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const Chatroom = ({ sender, recipient }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    // Connect to the socket.io server‚
    socketRef.current = io.connect('http://localhost:5555');

    // Load the existing messages from the server
    fetch(`http://localhost:5555/messages?sender=${sender}&recipient=${recipient}`)
      .then((response) => response.json())
      .then((data) => setMessages(data));

    // Listen for incoming messages
    socketRef.current.on('message', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    // Disconnect from the socket.io server when the component unmounts
    return () => socketRef.current.disconnect();
  }, [messages, recipient, sender]);

  const sendMessage = (e) => {
    e.preventDefault();

    // Send the message to the server
    fetch('http://localhost:5555/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sender, recipient, message }),
    });

    // Add the message to the local state
    setMessages([...messages, { sender, recipient, message }]);

    // Clear the message input field
    setMessage('');
  };

  return (
    <div>
      <h2>Chatroom</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Enter a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatroom;
