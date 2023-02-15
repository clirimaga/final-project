const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const eventSchema = new Schema ({
    id: {type: Number},
    date: {type: Date, required: [true, 'Please provide the date']},
    pic: {type: String},
    descriprtion: {type: String}
})

module.exports = mongoose.model('Event', eventSchema)