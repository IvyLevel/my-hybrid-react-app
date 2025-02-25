// src/App.jsx
import React, { useState } from 'react';
import HybridOnboardingFlow from './components/HybridOnboardingFlow';

function App() {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

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
