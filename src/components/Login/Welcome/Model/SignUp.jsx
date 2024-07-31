
import React,{useState} from 'react';
import Login from '../Model/Login';

const SignUp = ({ isVisible, onClose,onSwitchToLogin  }) => {
  const handleRegisterClick = (e) => {
    e.preventDefault();
    onSwitchToLogin();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <button 
            type="button" 
            className="w-full p-2 bg-gray-200 text-black rounded-lg font-medium"
          >
            Login with Social
          </button>
          <button 
            type="submit" 
            className="w-full p-2 bg-gray-800 text-white rounded-lg font-medium"
            onClick={handleRegisterClick} 
          >
            Register
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default SignUp;
