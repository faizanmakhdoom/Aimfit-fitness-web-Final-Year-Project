import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <h2>AimFit</h2>
        <p>Your fitness journey starts here!</p>
        <div className="social-links">
           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
           <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a>
         </div>
        <p className="contact-info">
          Contact us: salihaawan671@gmail.com | +92 300 1234567
        </p>
        <p className="copyright">
          &copy; 2025 AimFit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;