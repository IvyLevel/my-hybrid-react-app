// src/components/ChatBox.jsx
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';

export default function ChatBox({ onNewMessage }) {
  const [input, setInput] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();

  const sendMessage = async (message) => {
    try {
      const { data } = await axios.post('/api/converse', { message });
      onNewMessage({ sender: 'aria', text: data.data.response });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const message = input || transcript;
    if (!message.trim()) return;
    onNewMessage({ sender: 'user', text: message });
    setInput('');
    resetTranscript();
    await sendMessage(message);
  };

  return (
    <div className="shadow-lg p-6 rounded-lg bg-white">
      <form onSubmit={handleSend} className="flex items-center">
        <input
          type="text"
          placeholder="Speak naturally, no forms here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
          Send
        </button>
        <button
          type="button"
          onClick={SpeechRecognition.startListening}
          className="ml-2 px-4 py-2 bg-gray-300 text-black rounded"
        >
          🎤
        </button>
      </form>
    </div>
  );
}
