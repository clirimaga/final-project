// Import dependencies
const express = require('express');
const router = express.Router();
const Message = require('../models/messages');
const http = require('http');
const socketIo = require('socket.io');

// Set up HTTP server and socket.io server
const server = http.createServer(router);
const io = socketIo(server);

// Define socket.io event handlers
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('message', async ({ sender, recipient, message }) => {
    // Save the message to the database
    const newMessage = new Message({ sender, recipient, message });
    await newMessage.save();

    // Emit the message to the sender and recipient
    io.emit('message', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Define router handlers
const getMessages = async (req, res, next) => {
  const { sender, recipient } = req.query;
  const messages = await Message.find({ $or: [
    { sender, recipient },
    { sender: recipient, recipient: sender }
  ]}).sort({ timestamp: 1 });
  res.json(messages);
};

const postMessages = async (req, res, next) => {
    const { sender, recipient, message } = req.body;
    if (!sender || !recipient || !message) {
      return res.status(400).json({ message: 'Invalid request' });
    }
    const newMessage = new Message({ sender, recipient, message });
    await newMessage.save();
    res.json(newMessage);
  };
  


module.exports = {
    getMessages,
    postMessages
  };