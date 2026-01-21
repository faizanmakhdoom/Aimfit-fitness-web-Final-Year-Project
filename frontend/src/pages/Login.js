import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_USERS_API_URL}/login`, loginData)
      .then(() => {
        alert("Login successful!");
        navigate("/");
      })
      .catch(() => {
        alert("Invalid email or password.");
      });
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
}

export default Login;
