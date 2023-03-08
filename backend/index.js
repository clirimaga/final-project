const dotenv = require("dotenv/config");
const express = require("express");
require("./db");
const path = require("path");
const app = express();
const cors = require("cors");
const cloudinary = require("./cloudinary/cloudinary");
const { eventRouter } = require("./routes/events");
const { userRouter } = require("./routes/users");
const { authRouter } = require("./routes/auth");
const { messagesRouter } = require("./routes/messages");
const { errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, "../frontend", "build")));

app.use("/events", eventRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/messages", messagesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

app.use(errorHandler);
const port = process.env.PORT;
app.listen(port, () => {
  `Server running on port : ${port}`;
});
