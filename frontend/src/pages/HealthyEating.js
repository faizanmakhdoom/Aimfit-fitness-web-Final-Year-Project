import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../BlogPost.css'; 

const HealthyEating = () => {
  
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
          src="https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/670fa12cc04e260aab1c1629_Blog%20Cover%20Image%20Template%20(21)-p-500.png"
          alt="How To Consume 30g Of Protein In Each Meal"
        />
        <h1 className="post-title">How To Consume 30g Of Protein In Each Meal</h1>
        <p className="blog-date">January 15, 2025 • 4 min read</p>

        <h2>1. Prioritize Protein Sources</h2>
        <p>Include eggs, chicken, tofu, or legumes in every meal.</p>

        <h2>2. Use Protein Powders</h2>
        <p>Add a scoop to smoothies, oats, or baked goods for a quick boost.</p>

        <h2>3. Plan Balanced Plates</h2>
        <p>Combine protein with fiber and healthy fats for sustained energy.</p>

        <h2>4. Snack Smart</h2>
        <p>Choose Greek yogurt, boiled eggs, or protein bars between meals.</p>
      </div>
      <Footer />
    </div>
  );
};

export default HealthyEating;