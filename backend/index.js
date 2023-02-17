const dotenv= require('dotenv/config');
const express = require('express');
require("./db");
const app = express();
const cors = require("cors");
const {eventRouter} = require('./routes/events')
const {userRouter} = require('./routes/users')


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}
));

app.use(express.json())

app.get('/',(req,res) => {
    res.send('main page')
})

app.use('/events',eventRouter)
app.use('/users', userRouter)


const port = process.env.PORT;

app.listen(port, ()=> {
    `Server running on port : ${port}`
})