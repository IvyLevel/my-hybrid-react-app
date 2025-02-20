// src/App.jsx

import React, { useState, useEffect } from "react";
import memberstackDOM from "@memberstack/dom";
import PreFillingFlow from "./components/PreFillingFlow";  // Import PreFillingFlow component

// Initialize Memberstack - Make sure your public key is correct
const memberstack = memberstackDOM.init({
  publicKey: "pk_9fa37c39b87965da005e", // Replace with your actual public key
});

function App() {
  const [isPrefillComplete, setIsPrefillComplete] = useState(false);  // Track pre-fill completion

  // Function to handle pre-fill completion (after pre-fill form is completed)
  const handlePrefillComplete = () => {
    setIsPrefillComplete(true);
    // Redirect to the Webflow login/signup page
    window.location.href = "https://gigzbee.com/student-signup-login"; // Change to your Webflow login/signup page URL
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        {/* Step 1: Pre-fill Flow */}
        {!isPrefillComplete ? (
          <PreFillingFlow onComplete={handlePrefillComplete} />
        ) : (
          // After pre-fill is complete, this section will redirect to Webflow for login/signup.
          <div>
            <h2 className="text-2xl font-bold">Redirecting to Login/Signup...</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;