const express = require("express");

const users = require("../controllres/users")

const route = express.Router();


route.get('getAllUsers',users.getAllUsers);

module.exports = route