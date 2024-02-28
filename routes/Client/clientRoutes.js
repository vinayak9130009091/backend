const express = require("express");

const router = express.Router();

const { clientLogin } = require("../../controllers/Client/loginController");
const { createUser, getUsers, getUser, deleteUser, updateUser, clientSignup } = require("../../controllers/Client/userController");

//todo Client Application
router.post("/login", clientLogin);

router.post("/signup", clientSignup);

//! sop api
//GET all Users

router.get("/", getUsers);

//GET single Users

router.get("/:id", getUser);

//POST a new work out

router.post("/", createUser);

//DELETE a User

router.delete("/:id", deleteUser);

//PATCH UPDATE a User

router.patch("/:id", updateUser);

module.exports = router;
