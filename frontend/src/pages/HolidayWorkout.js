import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../BlogPost.css';

const HolidayWorkout = () => {

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
          src="https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/6765559ed4297b51f2b72265_Blog%20Cover%20Image%20Template%20(1).png"
          alt="Holiday Workout Tips"
        />
        <h1 className="post-title">he Ultimate Holiday Workout Guide</h1>
        <p className="blog-date">December 20, 2024 • 3 min read</p>

        <h2>1. Keep It Short and Effective</h2>
        <p>Try 20-minute HIIT sessions to get your heart rate up without taking too much time.</p>

        <h2>2. Use Bodyweight Exercises</h2>
        <p>No gym? No problem. Squats, push-ups, and planks can be done anywhere.</p>

        <h2>3. Make It a Family Activity</h2>
        <p>Go for a walk, play a sport, or dance together to stay active and bond.</p>

        <h2>4. Stay Consistent, Not Perfect</h2>
        <p>Even 10 minutes a day counts. Focus on movement, not perfection.</p>
      </div>
      <Footer />
    </div>
  );
};

export default HolidayWorkout;