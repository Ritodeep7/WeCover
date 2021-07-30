const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Item = require("../models/Items");

router.get("/donate", async (req, res) => {
  try {
    res.render("donate");
  } catch (err) {
    res.send("Error!");
  }
});

router.get("/profile", async (req, res) => {
    res.render("profile");
  });

  router.get("/avail", async (req, res) => {
    res.render("avail");
  });


module.exports = router;