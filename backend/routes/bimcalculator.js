const express = require("express");
const router = express.Router();
const BMIRecord = require("../models/BMIRecord");

// POST route to save BMI data
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, height, weight, bmi, category } = req.body;

    console.log("Received BMI data:", req.body); 

    const newRecord = new BMIRecord({
      name,
      email,
      phone,
      height: Number(height),
      weight: Number(weight),
      bmi: Number(bmi),
      category,
    });

    await newRecord.save();
    console.log("BMI saved to MongoDB");
    res.status(201).json({ message: "BMI saved successfully" });
  } catch (err) {
    console.error("Error saving BMI:", err.message);
    res.status(500).json({ error: "Failed to save BMI" });
  }
});

module.exports = router;