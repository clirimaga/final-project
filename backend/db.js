const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const url = process.env.CONNECTION_STRING;
mongoose.connect(url);
