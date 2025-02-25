import React, { useState, useEffect } from 'react';
import ChatLayout from './ChatLayout';
import Constellation from './Constellation';

function HybridOnboardingFlow({ onComplete }) {
  // We only need to track stars from chat events in this version.
  const [stars, setStars] = useState([
    { position: [0, 0, 0], color: 'gold' },
  ]);

  // This handler receives messages from ChatLayout.
  const handleNewMessage = (msg) => {
    // Update the constellation based on keywords in the message
    const lowerText = msg.text.toLowerCase();
    if (lowerText.includes('film')) {
      setStars((prev) => [
        ...prev,
        { position: [Math.random() * 2, Math.random() * 2, Math.random() * 2], color: 'blue' },
      ]);
    } else if (lowerText.includes('coding')) {
      setStars((prev) => [
        ...prev,
        { position: [Math.random() * 2, Math.random() * 2, Math.random() * 2], color: 'green' },
      ]);
    }
  };

  // Optional: If you want to log that the new component is loaded.
  useEffect(() => {
    console.log("HybridOnboardingFlow: NEW VERSION loaded.");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-teal-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome, Huda!</h1>
      <p className="text-center mb-8">
        I'm Aria, your personal college journey partner. Let's chat naturally and discover your unique path.
      </p>
      {/* Centered container for chat & visualization */}
      <div className="w-full max-w-3xl mx-auto space-y-8">
        {/* Chat Layout */}
        <div className="w-full">
          <ChatLayout onNewMessage={handleNewMessage} />
        </div>
        {/* Constellation Visualization */}
        <div className="flex justify-center">
          <Constellation stars={stars} />
        </div>
      </div>
      <button
        onClick={onComplete}
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Complete Onboarding
      </button>
    </div>
  );
}

export default HybridOnboardingFlow;
