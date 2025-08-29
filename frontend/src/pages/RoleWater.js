import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../BlogPost.css';

const RoleWater = () => {

  // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="blog-post-page">
      <Navbar />
      <div className="post-container">
        <img
          className="post-hero"
          src="https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/66d1a4331bf5b406e453ef3f_Blog%20Cover%20Image%20Template%20(16)-p-500.png"
          alt="Role Of Water In Your Fitness Journey"
        />
        <h1 className="post-title">Role Of Water In Your Fitness Journey</h1>
        <p className="blog-date">January 20, 2025 • 3 min read</p>

        <h2>1. Hydration = Performance</h2>
        <p>Water helps regulate temperature and lubricate joints during workouts.</p>

        <h2>2. Boost Recovery</h2>
        <p>Staying hydrated reduces soreness and speeds up muscle repair.</p>

        <h2>3. Support Metabolism</h2>
        <p>Water aids digestion and nutrient absorption, fueling your progress.</p>

        <h2>4. Track Your Intake</h2>
        <p>Aim for 2–3 liters daily, more if you’re active or sweating heavily.</p>
      </div>
      <Footer />
    </div>
  );
};

export default RoleWater;