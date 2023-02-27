const User = require("../models/users");
const { ErrorResponse } = require("../utils/ErrorResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {cloudinary} = require('../cloudinary/cloudinary');


const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
  // console.log(req.query);
  // try {
  //   const users = await User.geoNear(
  //     {
  //       type: "Point",
  //       coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
  //     },
  //     { maxDistance: 10000000, spherical: true }
  //   );
  //   res.send(users);
  // } catch (error) {
  //   console.log(error);
  // }
};

const getProfile = async (req, res, next) => {
  try {
    const { id } = req.user;
    const profile = await User.findById(id);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    // console.log(req.body);
    const { name, hobbies, description, germanLevel, pic } = req.body;
    const uploadedImage = await cloudinary.uploader.unsigned_upload(
      pic,'unsigned');
      
    const profile = await User.findByIdAndUpdate(
      id,
      { name, hobbies, description, germanLevel, pic: uploadedImage.secure_url },
      { new: true }
    );
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

// const result = await cloudinary.uploader.unsigned_upload(file, "xg7q0vue");

//     const post = await Post.create({
//       title,
//       author,
//       description,
//       image: result.secure_url,
//     });

//     res.json(post);




const deleteUser = async (req, res, next) => {
  res.send("user deleted");
};

module.exports = {
  getUsers,
  getProfile,
  updateUser,
  deleteUser,
};
