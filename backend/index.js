const dotenv= require('dotenv/config');
const express = require('express');
require("./db");
const app = express();
const cors = require("cors");
const {eventRouter} = require('./routes/events')


app.use(express.json())
app.use(cors());


app.get('/',(req,res) => {
    res.send('main page')
})

app.use('/events',eventRouter)

const port = process.env.PORT;

app.listen(port, ()=> {
    `Server running on port : ${port}`
})