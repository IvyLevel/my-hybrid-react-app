// src/App.jsx

import React, { useState, useEffect } from 'react';
import PreFillingFlow from './components/PreFillingFlow';  // Import PreFillingFlow component

// Initialize Memberstack (no login/signup or redirect logic in App.jsx anymore)
const memberstack = window.$memberstackDom;

function App() {
  const [isPrefillComplete, setIsPrefillComplete] = useState(false);  // Track pre-fill completion

  useEffect(() => {
    // Check if the user is already logged in from localStorage (if present)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      window.location.href = "/student-gated-content/student-home";  // Redirect to Webflow profile page if already logged in
    }
  }, []);

  // Function to handle pre-fill completion (after pre-fill form is completed)
  const handlePrefillComplete = () => {
    setIsPrefillComplete(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        {/* Step 1: Pre-fill Flow */}
        {!isPrefillComplete ? (
          <PreFillingFlow onComplete={handlePrefillComplete} />
        ) : (
          // After pre-fill completion, no further logic is needed here
          <p>Redirecting to your Ivy+ Score, Game Plan, and Execution...</p> // A placeholder message
        )}
      </div>
    </div>
  );
}

export default App;