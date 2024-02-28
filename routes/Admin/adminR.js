const express = require("express");
const router = express.Router();

const { createAdmin, getAdmin, getAdmins, deleteAdmin, updateAdmin } = require("../../controllers/AdminDetails/adminController.js");

//GET all workouts

router.get("/", getAdmins);

//GET single workouts

router.get("/:id", getAdmin);

//POST a new work out

router.post("/", createAdmin);

//DELETE a workout

router.delete("/:id", deleteAdmin);

//PATCH UPDATE a workout

router.patch("/:id", updateAdmin);

module.exports = router;
