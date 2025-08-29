import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">AimFit</Link>
      <ul className="nav-links">
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/blog">Blog</Link></li> 
        <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
        <li><Link to="/joinus">Join Us</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/community">Our Community</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

//npm install axios react-router-dom