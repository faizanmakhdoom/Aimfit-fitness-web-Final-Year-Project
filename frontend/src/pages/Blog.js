import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom'; 
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Holiday Workout Guide',
    date: 'Dec 30, 2024',
    readTime: '2 min read',
    image: 'https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/6765559ed4297b51f2b72265_Blog%20Cover%20Image%20Template%20(1).png',
    link: '/holiday-workout',
  },
  {
    id: 2,
    title: 'How to Stay Motivated in Winter',
    date: 'Jan 5, 2025',
    readTime: '3 min read',
    image: 'https://www.puregym.com/media/gyem4iod/how-to-stay-motivated-during-winter_header.jpg?quality=80',
    link: '/winter-motivation',
  },
  {
    id: 3,
    title: 'How To Reset Your Fitness',
    date: 'Jan 10, 2025',
    readTime: '2 min read',
    image: 'https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/679c9e33f11064688b947ffc_Blog%20Cover%20Image%20Template%20(2).png',
    link: '/reset-fitness',
  },
  {
    id: 4,
    title: 'How To Consume 30g Of Protein In Each Meal',
    date: 'Jan 15, 2025',
    readTime: '4 min read',
    image: 'https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/670fa12cc04e260aab1c1629_Blog%20Cover%20Image%20Template%20(21)-p-500.png',
    link: '/healthy-eating',
  },
  {
    id: 5,
    title: 'Role Of Water In Your Fitness Journey',
    date: 'Jan 20, 2025',
    readTime: '3 min read',
    image: 'https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/66d1a4331bf5b406e453ef3f_Blog%20Cover%20Image%20Template%20(16)-p-500.png',
    link: '/role-water',
  },
  {
    id: 6,
    title: '5 Essesntial Tips For Pre And Posr Workout Nutrition',
    date: 'Feb 1, 2025',
    readTime: '5 min read',
    image: 'https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/66b5ff743ae1aa5b3e99a266_Blog%20Cover%20Image%20Template%20(17)-p-500.png',
    link: '/prepsot-workout',
  },
  {
    id: 7,
    title: 'Reset Vs Recover: Unlocking The Secrets To Optimal Fitness',
    date: 'Feb 5, 2025',
    readTime: '3 min read',
    image: 'https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/66a36a2c13df78f7f7021345_Blog%20Cover%20Image%20Template%20(13)-p-500.png',
    link: '/reset-recover',
  },
  {
    id: 8,
    title: 'Aimfits Guide To Strong Free Workouts',
    date: 'Feb 10, 2025',
    readTime: '2 min read',
    image: 'https://cdn.prod.website-files.com/6482d3298266c54a989e8f6f/672de7a422c9d12e0aa5abc4_Blog%20Cover%20Image%20Template%20(22).png',
    link: '/rest-days',
  },
];


const Blog = () => {
  return (
    <div className="blog-page">
        <Navbar />
      <header className="blog-header">
        <h1 className="blog-main-title">Our Blog</h1>
        <p className="blog-subtitle">Tips, tricks, and inspiration to help you stay fit and fabulous.</p>
      </header>
      <div className="blog-banner">
        <img src="https://cdn.prod.website-files.com/6482d3298266c54a989e8f5a/660530890af0ff5996979751_Blog%20cover%20Website.png" alt="AIMFIT Blogs Banner" />
     </div>
      <section className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <Link to={post.link}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <p className="blog-meta">{post.date} • {post.readTime}</p>
                <h3 className="blog-title">{post.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </section>
       <Footer />
    </div>
  );
};

export default Blog;