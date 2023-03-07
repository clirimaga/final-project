// Import dependencies
const express = require("express");
const router = express.Router();
const Message = require("../models/messages");
const http = require("http");
const socketIo = require("socket.io");

// Set up HTTP server and socket.io server
const server = http.createServer(router);
const io = socketIo(server);

// Define socket.io event handlers
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", async ({ sender, recipient, message }) => {
    // Save the message to the database
    const newMessage = new Message({ sender, recipient, message });
    await newMessage.save();

    // Emit the message to the sender and recipient
    io.emit("message", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Define router handlers
const getMessages = async (req, res, next) => {
  try {
    const userId1 = Types.ObjectId(req.params.userId1);
    const userId2 = Types.ObjectId(req.params.userId2);
    const messages = await Message.find({
      $or: [
        { sender: userId1, receiver: userId2 },
        { sender: userId2, receiver: userId1 },
      ],
    })
      .populate("sender")
      .populate("receiver")
      .sort({ createdAt: "asc" });
    res.json({ messages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const postMessages = async (req, res, next) => {
  try {
    const { senderId, receiverId, message } = req.body;
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);
    if (!sender || !receiver) {
      res.status(400).json({ error: "Invalid sender or receiver ID" });
      return;
    }
    const newMessage = new Message({
      sender: sender._id,
      receiver: receiver._id,
      message,
    });
    await newMessage.save();
    res.json({ message: newMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getMessages,
  postMessages,
};
