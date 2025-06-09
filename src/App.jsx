// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Your general app styling

// --- Import all your components ---
// Ensure these files exist in src/components/ with these exact names
import AccountRegistrationForm from './components/AccountRegistrationForm.jsx';
import AddressPage from './components/AddressPage.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './components/LoginPage.jsx'; // Corrected import path for LoginPage
// import CustomCakeDesigner from './components/CustomCakeDesigner.jsx'; // Keep this commented out for presentation

function App() {
  return (
    <BrowserRouter> {/* Enables routing for your app */}
      <div className="App"> {/* Applies general app-wide styling */}
        <Routes> {/* Defines the different paths in your application */}
          
          {/* Default landing page: Account Registration Form */}
          <Route path="/" element={<AccountRegistrationForm />} />
          <Route path="/register" element={<AccountRegistrationForm />} />

          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Address Page */}
          <Route path="/addresses" element={<AddressPage />} />

          {/* Home Page */}
          <Route path="/home" element={<HomePage />} />

          {/* Optional: Custom Cake Designer (commented out for smooth flow) */}
          {/* <Route path="/design-cake" element={<CustomCakeDesigner />} /> */}

          {/* Fallback: Redirects any unhandled paths to registration */}
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;