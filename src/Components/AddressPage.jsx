// src/components/AddressPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddressPage.css'; // We'll create this next

const AddressPage = () => {
  const navigate = useNavigate();

  const handleSaveAddress = () => {
    // In a real app, you'd save the address data here
    console.log("Address saved (simulated)");
    // After saving, navigate to the home page
    navigate('/home');
  };

  return (
    <div className="address-container">
      <h2>Enter Your Address</h2>
      <form className="address-form">
        <div className="form-group">
          <label htmlFor="street">Street Address:</label>
          <input type="text" id="street" name="street" placeholder="e.g., 123 Cake Lane" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" placeholder="e.g., Sweetville" required />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip" name="zip" placeholder="e.g., 90210" required />
        </div>
        <button type="button" onClick={handleSaveAddress}>Save Address</button>
      </form>
    </div>
  );
};

export default AddressPage;