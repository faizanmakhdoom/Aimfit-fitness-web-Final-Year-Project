import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../BlogPost.css'; 


const ResetFitness = () => {

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
          src="https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/679c9e33f11064688b947ffc_Blog%20Cover%20Image%20Template%20(2).png"
          alt="How To Reset Your Fitness"
        />
        <h1 className="post-title">How To Reset Your Fitness</h1>
        <p className="blog-date">January 10, 2025 • 2 min read</p>

        <h2>1. Reflect on Your Why</h2>
        <p>Reconnect with your goals and what motivates you to move.</p>

        <h2>2. Start Small</h2>
        <p>Ease back in with short, low-impact workouts to rebuild consistency.</p>

        <h2>3. Track Progress</h2>
        <p>Use a journal or app to celebrate every step forward.</p>

        <h2>4. Be Kind to Yourself</h2>
        <p>Progress isn’t linear. Resetting is a sign of strength, not failure.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ResetFitness;