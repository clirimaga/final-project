const User = require('../models/users');

const getUsers = async (req,res) => {
    try {
      const users = await User.find({});
      res.json(users);  
    } catch (error) {
        res.status(500).send(error)
    }
};

const getUser = async(req,res) =>{
    res.send('user')
 };

const createUser = async(req,res) => {
    const {name, email,password,hobbies, pic, description,geometry } = req.body;
  try {
    const user = await User.create({ name, email,password, pic,hobbies, description,geometry });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
} 



 const updateUser = async(req,res) =>{
    res.send('user updated')
 }; 

 const deleteUser = async(req,res) =>{
res.send('user deleted')
 };
 
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};