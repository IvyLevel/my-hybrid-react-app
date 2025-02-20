// src/App.jsx

import React, { useState } from 'react';
import PreFillingFlow from './components/PreFillingFlow';

function App() {
  const [isPrefillComplete, setIsPrefillComplete] = useState(false);

  // Function to handle pre-fill completion
  const handlePrefillComplete = () => {
    setIsPrefillComplete(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        {/* Show prefill flow until it's complete */}
        {!isPrefillComplete ? (
          <PreFillingFlow onComplete={handlePrefillComplete} />
        ) : (
          // After prefill, show the redirect message
          <p>Redirecting to your Ivy+ Score, Game Plan, and Execution</p>
        )}
      </div>
    </div>
  );
}

export default App;