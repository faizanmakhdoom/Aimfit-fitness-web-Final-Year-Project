const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB Connected");
});

// Nodemailer config (if you're using it directly)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Import Routes
const userRoutes = require("./routes/users");
const joinRoutes = require("./routes/joinus");
const adminRoutes = require("./routes/admin");
const bmiRoutes = require("./routes/bimcalculator");

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/joinus", joinRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/bmi", bmiRoutes);




// Start Server (only one PORT declaration here!)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

