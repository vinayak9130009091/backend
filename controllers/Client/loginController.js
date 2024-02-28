const Workout = require("../../models/Common/userModel");
const mongoose = require("mongoose");

//todo Handle admin login
const clientLogin = async (req, res) => {
  console.log(req.body);
};
module.exports = { clientLogin };
