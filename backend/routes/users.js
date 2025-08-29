const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const newUser = new User({ name, email, phone, password });
  await newUser.save();
  res.json("User Registered");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) res.json("Login Success");
  else res.status(400).json("Invalid Credentials");
});

module.exports = router;
