const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

// Read from .env if not available then defaults to 4000
const port = process.env.PORT || 2000;
const secretKey = process.env.TOKEN_KEY;

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// connect to the db
const connectToDatabase = require("../backend/config/connectDb");
const dbConStatus = connectToDatabase();

//! SuperAdmin Routes
const superAdminRoutes = require("./routes/SuperAdmin/superAdminRoutes");
app.use("/superadmin", superAdminRoutes);

//! Admin Routes
const adminRoutes = require("./routes/Admin/adminRoutes");
app.use("/admin", adminRoutes);

//! Client Routes
const clientRoutes = require("./routes/Client/clientRoutes");
app.use("/client", clientRoutes);

//! Other Routes
const otherRoutes = require("./routes/otherRoutes");
app.use("/other", otherRoutes);

//! otp
const otpController = require("./middleware/otpController");
app.use("/", otpController);

app.post("/adminInfo", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});
