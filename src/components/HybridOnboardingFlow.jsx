// src/components/HybridOnboardingFlow.jsx
import React, { useState } from 'react';
import ChatBox from './ChatBox';
import Constellation from './Constellation';

function HybridOnboardingFlow({ onComplete }) {
  const [messages, setMessages] = useState([]);
  const [stars, setStars] = useState([
    // Initialize with a default star if desired
    { position: [0, 0, 0], color: 'gold' },
  ]);

  const handleNewMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-teal-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome, Huda!</h1>
      <p className="text-center mb-8">
        I'm Aria, your personal college journey partner. Let's chat naturally and discover your unique path.
      </p>
      {/* Flex container centered with mx-auto */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto">
        <div className="flex-1">
          <ChatBox onNewMessage={handleNewMessage} />
          <div className="mt-4 bg-white p-4 rounded shadow max-h-60 overflow-y-auto text-center">
            {messages.map((msg, i) => (
              <div key={i} className="mb-2">
                <span className="font-semibold">
                  {msg.sender === 'user' ? 'You' : 'Aria'}:
                </span>{' '}
                {msg.text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
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
