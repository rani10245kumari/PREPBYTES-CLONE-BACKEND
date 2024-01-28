const express = require('express');
const route = express.Router();
const { userLogin, userRegister } = require("./Main/controler");

route.post("/register", userRegister);
route.post("/login", userLogin);

module.exports = route;