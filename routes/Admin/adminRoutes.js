const express = require("express");

const router = express.Router();

const { adminLogin } = require("../../controllers/Admin/loginController");
const { adminInfo } = require("../../controllers/Admin/loginController");
const { createUser, getUsers, getUser, deleteUser, updateUser, adminSignup } = require("../../controllers/Admin/userController");

//todo Admin application
router.post("/login", adminLogin);

router.post("/signup", adminSignup);

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
