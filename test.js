const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "your-secret-key";

app.use(express.json());

// Middleware to validate JWT
const validateToken = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// Protected route
app.get("/api/protected", validateToken, (req, res) => {
  // If token is valid, you can respond with success or user information
  res.json({ msg: "Protected route accessed successfully", user: req.user });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
