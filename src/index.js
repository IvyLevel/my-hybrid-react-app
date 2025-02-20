// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Tailwind CSS
import App from './App';  // App component
import reportWebVitals from './reportWebVitals'; // Web vitals if you want to track performance

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance, pass a function to log results
reportWebVitals();
