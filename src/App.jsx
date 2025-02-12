// src/App.jsx pk_sb_6422dc8c01ab1634cd45
// src/App.jsx

import React, { useState, useEffect } from 'react';
import memberstackDOM from '@memberstack/dom';
import PreFillingFlow from './components/PreFillingFlow'; // Import the PreFillingFlow component
import ProfilePage from './components/ProfilePage';  // Import ProfilePage component

const memberstack = memberstackDOM.init({
  publicKey: 'pk_sb_6422dc8c01ab1634cd45', // Replace with your actual public key
});

function App() {
  const [isPrefillComplete, setIsPrefillComplete] = useState(false);
  const [user, setUser] = useState(null);

  // Check for user data in localStorage on initial load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);  // Set user data if it's found in localStorage
    }
  }, []);

  // Handle pre-fill completion (after pre-fill form is completed)
  const handlePrefillComplete = () => {
    setIsPrefillComplete(true);
  };

  // Handle login
  const handleLogin = () => {
    memberstack.openModal('LOGIN').then(({ data, type }) => {
      console.log('Login event type:', type);
      console.log('Returned data:', data);
      memberstack.hideModal();
      if (type === 'success') {
        setUser(data);  // Set user data after successful login
        localStorage.setItem('user', JSON.stringify(data));  // Save user data to localStorage
        window.location.href = '/profile';  // Redirect to Profile Page
      }
    });
  };

  // Handle sign-up
  const handleSignUp = () => {
    memberstack.openModal('SIGNUP').then(({ data, type }) => {
      console.log('Sign-Up event type:', type);
      console.log('Returned data:', data);
      memberstack.hideModal();
      if (type === 'success') {
        setUser(data);  // Set user data after successful sign-up
        localStorage.setItem('user', JSON.stringify(data));  // Save user data to localStorage
        window.location.href = '/profile';  // Redirect to Profile Page
      }
    });
  };

  // Handle logout
  const handleLogout = async () => {
    await memberstack.logout();
    setUser(null);  // Reset user state after logout
    localStorage.removeItem('user');  // Remove user data from localStorage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        {isPrefillComplete ? (
          user ? (
            <div>
              <h2 className="text-2xl font-bold">Welcome, {user.firstName}!</h2>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 mt-4"
              >
                Logout
              </button>

              {/* Render ProfilePage after login */}
              <ProfilePage />
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold">Please Log In or Sign Up</h2>
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
              >
                Login
              </button>
              <button
                onClick={handleSignUp}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mt-4 ml-4"
              >
                Sign Up
              </button>
            </div>
          )
        ) : (
          <PreFillingFlow onComplete={handlePrefillComplete} />
        )}
      </div>
    </div>
  );
}

export default App;
