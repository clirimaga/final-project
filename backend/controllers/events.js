const Event = require('../models/events');

const getEvents = async (req,res) => {
    try {
      const events = await Event.find({});
      res.json(events);  
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = {
    getEvents
};