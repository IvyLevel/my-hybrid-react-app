import React from 'react';

const ProfilePage = () => {
  const accountData = JSON.parse(localStorage.getItem('user'));  // Retrieve user data from localStorage

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Your Profile</h2>
        <button
          onClick={() => {
            alert('Edit Profile Feature (Coming Soon)');
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Edit Profile
        </button>
      </div>
      <div className="mt-8">
        {accountData ? (
          <div>
            <p className="text-xl font-medium">Name: {accountData.firstName} {accountData.lastName}</p>
            <p className="text-lg text-gray-600">Email: {accountData.auth.email}</p>
            {/* Add more user data as needed */}
          </div>
        ) : (
          <p>No profile data available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
