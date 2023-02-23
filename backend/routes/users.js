const express= require('express');
const userRouter= express.Router();
const {
    getUsers,
    getProfile,
    updateUser,
    deleteUser
} = require('../controllers/users');

userRouter.get('/',getUsers)
userRouter.get('/profile',getProfile);
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);

module.exports = {userRouter};