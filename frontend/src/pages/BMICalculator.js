import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../BlogPost.css"; // Reuse your pink theme

const BMICalculator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    height: "",
    weight: "",
  });
  const [bmiResult, setBmiResult] = useState(null);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateBMI = async (e) => {
    e.preventDefault();
    const h = parseFloat(formData.height) / 100;
    const w = parseFloat(formData.weight);
    const bmi = (w / (h * h)).toFixed(1);

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    setBmiResult(bmi);
    setCategory(status);

    try {
      await axios.post(`${process.env.REACT_APP_BMI_API_URL}`, {
        ...formData,
        bmi,
        category,
      });
      console.log("BMI saved successfully");
    } catch (err) {
      console.error("Error saving BMI:", err);
    }
  };

  return (
    <div className="blog-post-page">
      <Navbar />
      <div className="post-container">
        <h1 className="post-title">BMI Calculator</h1>
        <form onSubmit={calculateBMI}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="height"
            placeholder="Height in cm"
            value={formData.height}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight in kg"
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <button type="submit">Calculate BMI</button>
        </form>

        {bmiResult && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h2>Your BMI: {bmiResult}</h2>
            <p>Status: <strong>{category}</strong></p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BMICalculator;
