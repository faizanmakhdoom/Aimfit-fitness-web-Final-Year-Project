const express = require("express");
const router = express.Router();
const JoinUs = require("../models/JoinUs");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Join Us form submission
router.post("/join", async (req, res) => {
  const { name, email, phone, mode, goal, dob } = req.body;

  try {
    // Save all fields to MongoDB
    const newEntry = new JoinUs({ name, email, phone, mode, goal, dob });
    await newEntry.save();

    // Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New User Joined AimFit",
      text: `🎉 A new user has joined AimFit!

Name: ${name}
Email: ${email}
Phone: ${phone}
Joined By: ${mode}
Fitness Goal: ${goal}
Date of Birth: ${dob}`,
    };

    // Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to AimFit!",
      text: `Hi ${name},

Thank you for joining AimFit! 🎉

Here’s what we received from you:
- Phone: ${phone}
- Joined By: ${mode}
- Fitness Goal: ${goal}
- Date of Birth: ${dob}

Our team will contact you shortly to get you started on your fitness journey.

Stay strong 💪,
The AimFit Team`,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    res.json("User Joined, Emails Sent, and Data Saved");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Something went wrong");
  }
});
// Get all Join Us entries (for admin dashboard)
router.get("/all", async (req, res) => {
  try {
    const entries = await JoinUs.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    console.error("Error fetching join users:", err);
    res.status(500).send("Failed to fetch join users");
  }
});

module.exports = router;

