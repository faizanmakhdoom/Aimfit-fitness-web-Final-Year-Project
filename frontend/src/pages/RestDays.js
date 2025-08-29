import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../BlogPost.css'; 

const RestDays = () => {
   
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
          src="https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/672de7a422c9d12e0aa5abc4_Blog%20Cover%20Image%20Template%20(22).png"
          alt="Aimfit’s Guide To Strong Free Workouts"
        />
        <h1 className="post-title">Aimfit’s Guide To Strong Free Workouts</h1>
        <p className="blog-date">February 10, 2025 • 2 min read</p>

        <h2>1. Why Rest Days Matter</h2>
        <p>Rest allows your muscles to repair, grow, and prevent injury.</p>

        <h2>2. Active Recovery</h2>
        <p>Try light yoga, walking, or stretching to stay mobile on rest days.</p>

        <h2>3. Mental Reset</h2>
        <p>Use rest days to reflect, journal, or plan your next week of workouts.</p>

        <h2>4. Sleep & Nutrition</h2>
        <p>Prioritize quality sleep and nourishing meals to maximize recovery.</p>
      </div>
      <Footer />
    </div>
  );
};

export default RestDays;