import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation after successful login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Please fill in both fields to continue.');
      return;
    }

    // Assuming email and password validation is correct
    alert(`Welcome to Lady Kay's Stationery Company, ${email.split('@')[0]}!`);
    setError('');
    
    // Navigate to home page after successful login
    navigate('/blog');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Lady Kay's Stationery</h1>
          <p>Where creativity meets organization</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-footer">
          <p>
            New to Lady Kay's? <a href="/signup">Create an account</a>
          </p>
          <p>
            <a href="/create an account">Forgot your password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
