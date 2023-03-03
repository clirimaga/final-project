const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, "Please insert your Full Name"] },
  email: {
    type: String,
    required: [true, "Please insert your Email Adress"],
    unique: true,
  },
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/dffxhlnzz/image/upload/v1677251927/1206832_li2jol.jpg",
  },
  password: {
    type: String,
    required: [true, "Please insert your Password"],
    select: false,
  },
  description: { type: String },
  germanLevel: { type: String , default:'Beginner'},
  hobbies: [{ type: String }],
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    },
  },
});

// userSchema.index({location: '2dsphere'});

module.exports = mongoose.model("User", userSchema);
