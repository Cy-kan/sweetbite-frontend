// src/components/AccountRegistrationForm.jsx
import React, { useState } from 'react';
import './AccountRegistrationForm.css';

function AccountRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  // --- NEW STATE FOR ERROR HANDLING ---
  const [passwordError, setPasswordError] = useState(''); // State to hold password mismatch error message

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // --- NEW VALIDATION LOGIC ---
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match!'); // Set the error message
      return; // Stop the form submission
    } else {
      setPasswordError(''); // Clear the error if they match (in case it was set previously)
    }

    // If validation passes, proceed with submission
    console.log('Account Registration Data:', {
      name,
      email,
      password,
      rememberMe,
    });
    alert('Form submitted! Check console for data.');
    // In a real application, you would send this data to a backend API
    // You might clear the form here:
    // setName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
    // setRememberMe(false);
  };

  // --- NEW HANDLERS TO CLEAR ERROR ON CHANGE ---
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError && e.target.value === confirmPassword) {
      setPasswordError(''); // Clear error if current password matches confirmPassword
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (passwordError && e.target.value === password) {
      setPasswordError(''); // Clear error if confirmPassword matches password
    }
  };

  return (
    <div className="registration-container">
      <h2>Account Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange} // Use new handler
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange} // Use new handler
            placeholder="Confirm your password"
            required
          />
          {/* --- NEW ERROR MESSAGE DISPLAY --- */}
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <button type="submit" className="submit-button">Sign up</button>
      </form>
    </div>
  );
}

export default AccountRegistrationForm;