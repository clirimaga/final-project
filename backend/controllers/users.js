const User = require("../models/users");
const { ErrorResponse } = require("../utils/ErrorResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
      res.status(500).send(error)
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
  res.send("user");
};

const updateUser = async (req, res, next) => {
  try {
    const { name, email, password, hobbies, pic, description, geometry } =
      req.body;

    const user = await User.findOne({ email });
    if (user) throw new ErrorResponse("User already exists", 400);

    const hash = await bcrypt.hash(password, 5);
    const updatedUser = await User.findOneAndUpdate({
      name,
      email,
      password: hash,
      pic,
      hobbies,
      description,
      geometry,
    });

    const payload = { id: newUser._id, email: newUser.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    res
      .cookie("access_token", token, {
        maxAge: 1000 * 60 * 60 * 8,
      })
      .send(payload);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  res.send("user deleted");
};

module.exports = {
 getUsers,
  getProfile,
  updateUser,
  deleteUser,
};
