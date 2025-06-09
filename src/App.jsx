// src/App.jsx
import React from 'react';
import './App.css'; // This is for general app styling
// import AccountRegistrationForm from './components/AccountRegistrationForm.jsx'; // Comment out or remove this line
import CustomCakeDesigner from './components/CustomCakeDesigner.jsx'; // Import your new component

function App() {
  return (
    <div className="App">
      {/* Render your CustomCakeDesigner component here */}
      <CustomCakeDesigner />
    </div>
  );
}

export default App;