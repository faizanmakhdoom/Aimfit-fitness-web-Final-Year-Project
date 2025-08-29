const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Hardcoded admin credentials
const adminEmail = "salihaawan671@gmail.com";
const adminPassword = "aimfitadmin123"; 

// Admin Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === adminEmail && password === adminPassword) {
    res.json("Admin Login Success");
  } else {
    res.status(401).json("Unauthorized");
  }
});

// Get All Users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Delete User
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json("User Deleted");
});

module.exports = router;
