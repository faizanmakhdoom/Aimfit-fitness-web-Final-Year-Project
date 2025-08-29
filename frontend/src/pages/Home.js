import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="video-section">
        <video autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/5747986/5747986-uhd_1440_2560_30fps.mp4" type="video/mp4" />
        </video>
        <div className="overlay-text">
          <h1>Welcome to AimFit</h1>
          <p>Your fitness journey starts here!</p>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </div>
       <Footer />
    </div>
  );
}

export default Home;
