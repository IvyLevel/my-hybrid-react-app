import React, { useState, useEffect } from "react";
import { MemberstackProvider } from "@memberstack/react"; // Make sure to import MemberstackProvider
import memberstackDOM from "@memberstack/dom";
import PreFillingFlow from "./components/PreFillingFlow";  // Import PreFillingFlow component

// Initialize Memberstack - Make sure your public key is correct
const memberstack = memberstackDOM.init({
  publicKey: "pk_9fa37c39b87965da005e", // Replace with your actual public key
});

const config = { domain: "https://memberstack-client.gigzbee.com" }; // Memberstack config

function App() {
  const [isPrefillComplete, setIsPrefillComplete] = useState(false);  // Track pre-fill completion
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);  // Set user data from localStorage if it exists
      window.location.href = "/student-gated-content/student-home";  // Redirect to Webflow student-home page if already logged in
    }
  }, []);

  // Function to handle pre-fill completion (after pre-fill form is completed)
  const handlePrefillComplete = () => {
    setIsPrefillComplete(true);
  };

  // Login handler
  const handleLogin = () => {
    memberstack.openModal("LOGIN").then(({ data, type }) => {
      console.log("Login event type:", type);
      console.log("Returned data:", data);
      memberstack.hideModal();
      if (type === "success") {
        setUser(data);  // Set user data after successful login
        localStorage.setItem("user", JSON.stringify(data));  // Save user data to localStorage
        console.log("User logged in:", data);
        window.location.href = "/student-gated-content/student-home";  // Redirect to Webflow student-home page after login
      }
    });
  };

  // Sign-up handler
  const handleSignUp = () => {
    memberstack.openModal("SIGNUP").then(({ data, type }) => {
      console.log("Sign-Up event type:", type);
      console.log("Returned data:", data);
      memberstack.hideModal();
      if (type === "success") {
        setUser(data);  // Set user data after successful sign-up
        localStorage.setItem("user", JSON.stringify(data));  // Save user data to localStorage
        console.log("User signed up:", data);
        window.location.href = "/student-gated-content/student-home";  // Redirect to Webflow student-home page after sign-up
      }
    });
  };

  // Logout handler
  const handleLogout = async () => {
    await memberstack.logout();
    setUser(null);  // Reset user state after logout
    localStorage.removeItem("user");  // Remove user data from localStorage
    console.log("User logged out");
    window.location.href = "/";  // Redirect to home page after logout
  };

  return (
    <MemberstackProvider config={config}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <div className="text-center">
          {/* Step 1: Pre-fill Flow */}
          {!isPrefillComplete ? (
            <PreFillingFlow onComplete={handlePrefillComplete} />
          ) : (
            // Step 2: Login/Sign Up Flow
            user ? (
              <div>
                <h2 className="text-2xl font-bold">Welcome, {user.firstName}!</h2>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 mt-4"
                >
                  Logout
                </button>
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
          )}
        </div>
      </div>
    </MemberstackProvider>
  );
}

export default App;