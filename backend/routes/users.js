const express= require('express');
const userRouter= express.Router();
const {
    getUsers,
    getProfile,
    updateUser,
    deleteUser
} = require('../controllers/users');
const {verifyToken} =require('../middlewares/verifyToken');


userRouter.get('/',verifyToken,getUsers)
userRouter.get('/profile',verifyToken,getProfile);
userRouter.put('/profile',verifyToken,updateUser);
userRouter.delete('/profile',deleteUser);

module.exports = {userRouter};