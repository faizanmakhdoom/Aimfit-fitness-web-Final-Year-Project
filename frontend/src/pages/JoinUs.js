import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./JoinUs.css";

function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mode: "", // studio or online
    goal: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_JOINUS_API_URL}`, formData)
      .then(() => {
      alert("Thanks for joining AimFit! We'll contact you soon.");
     })
     .catch((err) => {
    console.error("Join Us Error:", err);
    alert("Submission failed. Please try again.");
  });
};

  return (
    <div className="join-page">
      <Navbar />
      <div className="join-form-container">
        <h1>Block your free trial now</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            required
            onChange={handleChange}
          />

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="mode"
                value="Studio"
                onChange={handleChange}
                required
              />
              Studio
            </label>
            <label>
              <input
                type="radio"
                name="mode"
                value="Online"
                onChange={handleChange}
              />
              Online
            </label>
          </div>

          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          >
            <option value="">What's your fitness goal?</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Flexibility">Flexibility</option>
            <option value="General Fitness">General Fitness</option>
          </select>

          <label className="dob-label">
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Join Now</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default JoinUs;
