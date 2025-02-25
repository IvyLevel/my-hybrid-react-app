// src/App.jsx
import React, { useState, useEffect } from 'react';
import HybridOnboardingFlow from './components/HybridOnboardingFlow';

function App() {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  // When onboarding is complete, perform a redirect.
  useEffect(() => {
    if (isOnboardingComplete) {
      window.location.href = "https://gigzbee.com/student-signup-login";
    }
  }, [isOnboardingComplete]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        {!isOnboardingComplete ? (
          <HybridOnboardingFlow onComplete={() => setIsOnboardingComplete(true)} />
        ) : (
          <p>Redirecting to your Ivy+ Score, Game Plan, and Execution</p>
        )}
      </div>
    </div>
  );
}

export default App;
