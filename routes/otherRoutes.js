const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ name: "Other Functionality" });
});
module.exports = router;
