import React from 'react';
import blog1 from '../assets/blog1.jpeg'
import blog2 from '../assets/blog2.jpeg'
import blog3 from '../assets/blog3.jpeg'

import '../App.css'


const Home = () => {
   return (
     <div className="home">
       {/* Hero Section */}
       <header className="home-header">
         <div className="hero-overlay">
           <h1>Welcome to Lady Kay's Stationery</h1>
           <p>Inspiring Creativity, Organization, and Elegance</p>
           <button className="shop-now-btn">Shop Now</button>
         </div>
       </header>
 
       {/* About Section */}
       <section className="about-section">
         <h2>Why Choose Lady Kay's Stationery?</h2>
         <p>
           At Lady Kay's, we believe that the tools you use to plan, create, and
           dream should be as beautiful and unique as your ideas. Our curated
           collection of stationery is designed to inspire and empower
           professionals, students, and creatives alike.
         </p>
       </section>
 
       {/* Features Section */}
       <section className="features-section">
         <h2>Our Core Features</h2>
         <div className="features">
           <div className="feature">
             <img
               src= {blog1}
               alt="Quality Products"
             />
             <h3>Premium Quality</h3>
             <p>
               Each product is crafted with care to ensure durability and
               elegance for your every need.
             </p>
           </div>
           <div className="feature">
             <img
               src={blog2}
               alt="Affordable Prices"
             />
             <h3>Affordable Prices</h3>
             <p>
               Stylish and functional stationery at prices you'll love—without
               compromising quality.
             </p>
           </div>
           <div className="feature">
             <img
               src={blog3}
               alt="Customer Satisfaction"
             />
             <h3>Customer Satisfaction</h3>
             <p>
               Your happiness is our priority. Experience seamless shopping and
               top-notch support.
             </p>
           </div>
         </div>
       </section>
 
       {/* Testimonial Section */}
       <section className="testimonials-section">
         <h2>What Our Customers Say</h2>
         <div className="testimonials">
           <div className="testimonial">
             <p>
               "Lady Kay's stationery is simply the best! The designs are
               beautiful, and the quality is unmatched. I always get compliments
               on my notebooks and pens!"
             </p>
             <span>- Sarah J., Artist</span>
           </div>
           <div className="testimonial">
             <p>
               "As a student, I need reliable stationery that doesn't break the
               bank. Lady Kay's has everything I need and more!"
             </p>
             <span>- Jake M., Student</span>
           </div>
         </div>
       </section>
 
       {/* Call to Action */}
       <section className="cta-section">
         <h2>Ready to Elevate Your Stationery Game?</h2>
         <p>
           Browse our collection and discover the perfect tools to bring your
           ideas to life.
         </p>
         <button className="shop-now-btn">Start Shopping</button>
       </section>
     </div>
   );
                 };
                 
            export default Home;