const mongoose = require("mongoose");

const joinUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  mode: { type: String, required: true }, 
  goal: { type: String, required: true }, 
  dob: { type: String, required: true }, 
});

module.exports = mongoose.model("JoinUs", joinUsSchema);