import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Community.css";

function Community() {
  const testimonials =  [ 
    { name: "Sana Qureshi",
     image: "https://t3.ftcdn.net/jpg/07/32/65/04/360_F_732650497_jXQjmlrrB6qT3nZrexd0WrnmeKejmxSc.jpg", 
     info: "Yoga and mindfulness coach at AimFit." 
    },

     { name: "Ali Raza", 
      image: "https://media.istockphoto.com/id/1072395722/photo/fitness-trainer-at-gym.jpg?s=612x612&w=0&k=20&c=3VBLCgbxG3bGNRp9Sc3tN_7G-g_DxXhGk9rhuZo-jkE=", 
      info: "Certified personal trainer and HIIT specialist." 
    },

    { name: "Zara Khan",
         image: "https://static.vecteezy.com/system/resources/previews/035/368/820/non_2x/girl-standing-with-water-bottle-at-gym-after-training-photo.jpg",
          info: "Nutritionist and strength training expert." 
    },
    { name: "Mehak Javed",
             image: "https://t3.ftcdn.net/jpg/05/62/09/28/360_F_562092860_mWJBNRqTg4rarfoJaSdkaLlfy1dkrP33.jpg",
              info: "Zumba instructor and dance fitness motivator." 
    },
    { name: "Hassan Malik",
                 image: "https://img.freepik.com/premium-photo/portrait-personal-trainer-sportswear-fitness-center-gym_109710-1637.jpg", 
                 info: "Bodybuilding and weightlifting coach." 
    }, 
    { name: "Areeba Noor",
                   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdfHBLq1wPgnW267durNoDjWvhX5AVKPu1Q&s",
                   info: "Cardio kickboxing and strength trainer." 
    },
    { name: "Osman Tariq", 
                    image: "https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=", 
                    info: "Certified strength & conditioning specialist." 
    },
   { name: "Mina Sheikh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwjsRs0eoiEIzg6KAk5mrnd3Ob40wT6raxQ&s", 
                      info: "Health, wellness and training expert."
    },
    ];


  return (
    <div className="community-page">
      <Navbar />
      <div className="community-hero">
        <h1 className="hero-title">Join Our Community Of Over 500,000+ Women</h1>
      </div>
      <div className="testimonial-section">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="testimonial-details">
              <h2>{item.name}</h2>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Community;

