// // Login endpoint
// app.post("/login", (req, res) => {
//   const user = req.body;

//   jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
//     res.json({ token });
//   });
// });

// app.post("/profile", verifyToken, (req, res) => {
//   jwt.verify(req.token, secretKey, (err, authData) => {
//     if (err) {
//       res.send({ result: "invalid token" });
//     } else {
//       // Set a cookie named "myCookie" with the value "Hello, World!"
//       res.cookie("myCookie", "Hello, World!");
//       res.json({ message: "profile accessed", authData });
//     }
//   });
// });

// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const token = bearer[1];
//     console.log({ token });
//     req.token = token;
//     next();
//   } else {
//     res.send({ result: "token is not valid " });
//   }
// }

// require("dotenv").config();
// const cors = require("cors");

// const express = require("express");
// const userRouter = express.Router();
// const app = express();
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const User = require("./models/userModel");
// const userRoutes = require("./routes/userRoutes");
// require("./config/conectionDb");

// //*port defenation
// const port = process.env.PORT || 2000;

// //!middleware
// app.use(cookieParser());
// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/register", (req, res) => {
//   res.send("post received new record cearted ");
//   console.log(req.body);
//   const { name, surname } = req.body;
//   console.log(surname);
// });

// app.use("/api/users", userRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening on port http://127.0.0.1:${port}`);
// });/
