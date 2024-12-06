import React from 'react';
import blog1 from "../assets/blog1.jpeg"
import blog2 from "../assets/blog2.jpeg"
import blog3 from "../assets/blog3.jpeg" 
import '../index.css'; 


const Blog = () => {
  const blogPosts = [
    { 
      id: 1, 
      title: "Welcome to Lady Kay's Stationery Company", 
      date: "2025-01-01", 
      content: "Discover our range of beautiful stationery products that inspire creativity and organization.", 
    image:blog1
    },
    { 
      id: 2, 
      title: "How to Choose the Perfect Notebook", 
      date: "2025-02-15", 
      content: "Choosing the right notebook can make a big difference in your productivity. Here are some tips to find your perfect match.", 
      image: blog2
    },
    { 
      id: 3, 
      title: "Organizing Your Workspace for Maximum Efficiency", 
      date: "2025-03-10", 
      content: "A well-organized workspace can boost your efficiency and creativity. Find out how to create an inspiring environment.", 
      image: blog3
    }
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Lady Kay's Stationery Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;