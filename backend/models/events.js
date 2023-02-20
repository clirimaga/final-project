const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const eventSchema = new Schema ({
    id: {type: Number},
    name: {type: String},
    date: {type: String, required: [true, 'Please provide the date']},
    pic: {type: String},
    description: {type: String}
})

module.exports = mongoose.model('Event', eventSchema)