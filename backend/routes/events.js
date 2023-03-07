const express = require("express");
const eventRouter = express.Router();
const { getEvents } = require("../controllers/events");

eventRouter.route("/").get(getEvents);

module.exports = { eventRouter };
