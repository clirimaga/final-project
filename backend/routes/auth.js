const express= require('express');
const {
    signUp,
    logout,
    login
} = require('../controllers/auth');
const authRouter = express.Router();

authRouter.post('/signup',signUp);
authRouter.post('/login',login);
authRouter.get('/logout',logout);

module.exports={authRouter};