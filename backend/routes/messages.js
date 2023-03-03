const express= require('express');
const messagesRouter= express.Router();
const {
    getMessages, postMessages
} = require('../controllers/messages');

messagesRouter.get('/', getMessages);
messagesRouter.post('/', postMessages);


module.exports = {messagesRouter};