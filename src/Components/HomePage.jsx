// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css'; // We'll create this next

const HomePage = () => {
  return (
    <div className="home-container">
      <h2>Welcome to SweetBite!</h2>
      <p>Your one-stop shop for custom-designed cakes.</p>
      <img
        src="https://placehold.co/400x250/F8F0FA/D8558A?text=Delicious+Cake"
        alt="Delicious Cake Placeholder"
        className="home-image"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/F8F0FA/D8558A?text=Image+Load+Error'; }}
      />
      <p>Get started by designing your dream cake!</p>
      {/* A button or link to the cake designer could go here later */}
    </div>
  );
};

export default HomePage;