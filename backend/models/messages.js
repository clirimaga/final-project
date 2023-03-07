const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = mongoose.Schema;
const model = mongoose.Schema;
const messageSchema = new Schema(
  {
    sender: { type: Types.ObjectId, ref: "User" },
    receiver: { type: Types.ObjectId, ref: "User" },
    message: { type: String },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
