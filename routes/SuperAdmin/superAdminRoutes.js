// const express = require("express");

// const router = express.Router();

// router.post("/", (req, res) => {
//   res.json({ name: "super Admin" });
// });
// module.exports = router;

const express = require("express");

const router = express.Router();

const { superAdminLogin } = require("../../controllers/SuperAdmin/loginController");
const { createUser, getUsers, getUser, deleteUser, updateUser, superAdminSignup } = require("../../controllers/SuperAdmin/userController");

//todo SuperAdmin Apllication
router.post("/login", superAdminLogin);

router.post("/signup", superAdminSignup);

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
