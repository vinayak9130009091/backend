const Workout = require("../../models/Common/userModel");
const mongoose = require("mongoose");

//todo Handle admin login
const superAdminLogin = async (req, res) => {
  console.log(req.body);
};
module.exports = { superAdminLogin };
