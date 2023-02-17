const express= require('express');
const userRouter= express.Router();
const {getUsers,getUser,updateUser,deleteUser,createUser} = require('../controllers/users')

userRouter.route('/').get(getUsers).post(createUser);
userRouter.route('/:id').put(updateUser).delete(deleteUser).get(getUser);


module.exports = {userRouter};