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
          src="https://www.puregym.com/media/gyem4iod/how-to-stay-motivated-during-winter_header.jpg?quality=80"
          alt="How To Reset Your Fitness"
        />
        <h1 className="post-title">How to Stay Motivated in Winter</h1>
        <p className="blog-date">January 05, 2025 • 3 min read</p>
         <h2>1. Embrace the Season</h2>
        <p>
          Instead of dreading the cold, find ways to enjoy it. Try winter-friendly workouts like indoor cycling, yoga, or even brisk walks in cozy layers. The key is to move in a way that feels good for your body and your mood.
        </p>

        <h2>2. Set a Winter Goal</h2>
        <p>
          Having a clear, achievable goal can give you purpose during the colder months. Whether it’s improving flexibility, building strength, or simply staying consistent, write it down and track your progress.
        </p>

        <h2>3. Create a Cozy Routine</h2>
        <p>
          Design a winter workout ritual that feels comforting. Light a candle, play your favorite playlist, and warm up with dynamic stretches. Making your routine enjoyable increases the chance you’ll stick with it.
        </p>

        <h2>4. Dress for Success</h2>
        <p>
          Invest in warm, breathable workout gear that makes you feel confident and comfortable. Feeling good in your clothes can boost motivation and reduce excuses.
        </p>

        <h2>5. Celebrate Small Wins</h2>
        <p>
          Motivation thrives on momentum. Celebrate every workout, no matter how short. Acknowledge your effort and reward yourself with something simple — a hot drink, a warm bath, or a relaxing stretch session.
        </p>

      </div>
      <Footer />
    </div>
  );
};

export default ResetFitness;