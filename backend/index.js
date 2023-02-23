const dotenv = require("dotenv/config");
const express = require("express");
require("./db");
const app = express();
const cors = require("cors");

const { eventRouter } = require("./routes/events");
const { userRouter } = require("./routes/users");
const { authRouter } = require("./routes/auth");
const { errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("main page");
});

app.use(errorHandler);
app.use("/events", eventRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
const port = process.env.PORT;
app.listen(port, () => {
  `Server running on port : ${port}`;
});
