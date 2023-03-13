const User = require("../models/users");
const { ErrorResponse } = require("../utils/ErrorResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { cloudinary } = require("../cloudinary/cloudinary");

const getUsers = async (req, res, next) => {
  try {
    const { id } = req.user;
    const profile = await User.findById(id);
    const { radius } = req.query;
    const users = await User.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [
              profile.location.coordinates[0],
              profile.location.coordinates[1],
            ],
          },
          distanceField: "distance",
          maxDistance: +radius,
          spherical: true,
        },
      },
    ]);
    console.log(radius);
    res.json(users);
  } catch (error) {
    next(error);
  }
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
    console.log(req.body);
    const { name, hobbies, description, germanLevel, pic, contact, location } =
      req.body;
    if (pic) {
      const uploadedImage = await cloudinary.uploader.unsigned_upload(
        pic,
        "unsigned"
      );
      const profile = await User.findByIdAndUpdate(
        id,
        {
          name,
          hobbies,
          description,
          germanLevel,
          pic: uploadedImage.secure_url,
          location,
        },
        { new: true }
      );
      res.json(profile);
    } else {
      const profile = await User.findByIdAndUpdate(
        id,
        { name, hobbies, description, germanLevel, location, contact },
        { new: true }
      );
      res.json(profile);
    }
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const profile = await User.findByIdAndDelete(id);
    res
      .cookie("access_token", "", {
        httpOnly: true,
        maxAge: 0,
      })
      .json({ status: "success", message: "Account deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getProfile,
  updateUser,
  deleteUser,
};
