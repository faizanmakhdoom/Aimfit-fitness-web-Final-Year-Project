import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../BlogPost.css'; 

const PrePostWorkout = () => {
  
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
          src="https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/66b5ff743ae1aa5b3e99a266_Blog%20Cover%20Image%20Template%20(17)-p-500.png"
          alt="5 Essential Tips For Pre And Post Workout Nutrition"
        />
        <h1 className="post-title">5 Essential Tips For Pre And Post Workout Nutrition</h1>
        <p className="blog-date">February 1, 2025 • 5 min read</p>

        <h2>1. Fuel Before You Move</h2>
        <p>Eat a light meal with carbs and protein 1–2 hours before your workout.</p>

        <h2>2. Hydrate Early</h2>
        <p>Drink water before, during, and after your session to stay energized.</p>

        <h2>3. Refuel with Protein</h2>
        <p>Post-workout meals should include protein and carbs to aid recovery.</p>

        <h2>4. Don’t Skip Electrolytes</h2>
        <p>Replenish sodium and potassium with coconut water or a banana.</p>

        <h2>5. Listen to Your Body</h2>
        <p>Adjust your intake based on how you feel and your workout intensity.</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrePostWorkout;