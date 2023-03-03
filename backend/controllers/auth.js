const User = require("../models/users");
const { ErrorResponse } = require("../utils/ErrorResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) throw new ErrorResponse("User already exists", 400);

    const hash = await bcrypt.hash(password, 5);
    const newUser = await User.create({
      name,
      email,
      password: hash,
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
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new ErrorResponse("Account not found", 404);

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new ErrorResponse("Wrong credentials", 401);
    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 8
      })
      .send(payload);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  res
    .cookie("access_token", "", {
      httpOnly: true,
      maxAge: 0
    })
    .json({status: 'success',message:'Logged out successfully'});
};

module.exports = {
  signUp,
  login,
  logout,
};
