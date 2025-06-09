// src/components/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // For the "Register" link
import './LoginPage.css'; // Correct: Imports its own specific CSS

const LoginPage = () => {
  // In a real app, you'd handle login logic here
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login functionality not yet implemented!');
    // After successful login, you'd typically navigate to /home or a dashboard
  };

  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="loginEmail">Email:</label>
          <input type="email" id="loginEmail" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password:</label>
          <input type="password" id="loginPassword" name="password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p className="register-link-text">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;