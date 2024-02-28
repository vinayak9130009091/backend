const User = require("../../models/Common/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const secretKey = "microtechsolutionskolhapur";

//todo Handle admin login
const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login({ email, password });

    jwt.sign({ email }, secretKey, { expiresIn: "60s" }, (err, token) => {
      res.status(200).json({ token });
      console.log(req.body);
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = { adminLogin };
