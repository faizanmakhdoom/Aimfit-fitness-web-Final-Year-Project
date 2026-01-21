
import React, { useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/api/users/signup", formData)
      .then(() => {
        alert("Signup successful!");
        navigate("/login");
      })
      .catch(() => {
        alert("Signup failed. Try again.");
      });
  };

  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-form-container">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login Here</Link></p>
      </div>
    </div>
  );
}

export default Signup;
