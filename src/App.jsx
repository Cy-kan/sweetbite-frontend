// src/App.jsx
import React from 'react';
import './App.css'; // This is for general app styling
import AccountRegistrationForm from './components/AccountRegistrationForm.jsx'; // Import your new component

function App() {
  return (
    <div className="App">
      {/* Render your AccountRegistrationForm component here */}
      <AccountRegistrationForm />
    </div>
  );
}

export default App;