import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../BlogPost.css'; 

const ResetRecover = () => {

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
          src="https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/66a36a2c13df78f7f7021345_Blog%20Cover%20Image%20Template%20(13)-p-500.png"
          alt="Reset Vs Recover: Unlocking The Secrets To Optimal Fitness"
        />
        <h1 className="post-title">Reset Vs Recover: Unlocking The Secrets To Optimal Fitness</h1>
        <p className="blog-date">February 5, 2025 • 3 min read</p>

        <h2>1. What is Reset?</h2>
        <p>Resetting means mentally and physically stepping back to refocus your goals.</p>

        <h2>2. What is Recovery?</h2>
        <p>Recovery is the process of allowing your body to heal and rebuild after training.</p>

        <h2>3. When to Reset</h2>
        <p>Feeling burned out or unmotivated? A reset can reignite your passion.</p>

        <h2>4. When to Recover</h2>
        <p>After intense workouts or soreness, recovery is essential for progress.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ResetRecover;