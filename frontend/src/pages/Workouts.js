import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Workouts.css";

function Workouts() {
  const workouts = [
    {
      title: "Morning Yoga",
      image: "https://th.bing.com/th/id/OIP.Se2ZIslWM1AUcojkMRboGwHaFX?w=235&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      description: "Relax your mind & body with guided morning yoga.",
    },
    {
      title: "HIIT Challenge",
      image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/05/woman-battle-ropes-1109.jpg?quality=86&strip=all",
      description: "High-intensity fat-burning interval training.",
    },
    {
      title: "Strength Training",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JwgOu4Zvjk28QlxWSryBvJek9wJASe4C7Q&s",
      description: "Build strength and tone muscles effectively.",
    },
    {
      title: "Zumba Dance",
      image: "https://media.istockphoto.com/id/1134374642/photo/dancing-together.jpg?s=612x612&w=0&k=20&c=pqTrAtrDhNHDJpOTR8L-WHUl0U-Xk83DK2gVXyxsq20=",
      description: "Fun cardio dance routines to burn calories.",
    },
    {
      title: "Morning Yoga",
      image: "https://th.bing.com/th/id/OIP.Se2ZIslWM1AUcojkMRboGwHaFX?w=235&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      description: "Relax your mind & body with guided morning yoga.",
    },
    {
      title: "HIIT Challenge",
      image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/05/woman-battle-ropes-1109.jpg?quality=86&strip=all",
      description: "High-intensity fat-burning interval training.",
    },
    {
      title: "Strength Training",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JwgOu4Zvjk28QlxWSryBvJek9wJASe4C7Q&s",
      description: "Build strength and tone muscles effectively.",
    },
    {
      title: "Zumba Dance",
      image: "https://media.istockphoto.com/id/1134374642/photo/dancing-together.jpg?s=612x612&w=0&k=20&c=pqTrAtrDhNHDJpOTR8L-WHUl0U-Xk83DK2gVXyxsq20=",
      description: "Fun cardio dance routines to burn calories.",
    },
  ];

  return (
    <div className="workouts-page">
      <Navbar />
      <h1 className="page-title">Our Workout Plans</h1>

      <div className="card-grid">
        {workouts.map((item, index) => (
          <div className="workout-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Workouts;
