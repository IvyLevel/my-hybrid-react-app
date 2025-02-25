import React, { useState } from 'react';

function ChatLayout({ onNewMessage }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    if (onNewMessage) onNewMessage(userMessage);
    // Simulate a reply from Aria after 500ms
    setTimeout(() => {
      const ariaReply = {
        text: `I hear you saying: "${input}". Could you share more details?`,
        sender: 'aria',
      };
      setMessages((prev) => [...prev, ariaReply]);
      if (onNewMessage) onNewMessage(ariaReply);
    }, 500);
    setInput('');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-indigo-600 text-white text-center font-bold px-4 py-2">
        Chat with Aria
      </div>
      <div className="w-full p-4 space-y-4 h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex border-t border-gray-300 w-full">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-4 py-2 focus:outline-none"
        />
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatLayout;
