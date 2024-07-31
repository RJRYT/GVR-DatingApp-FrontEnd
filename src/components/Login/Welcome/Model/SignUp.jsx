// GVR-DatingApp-FrontEnd\src\components\Login\Model\SignUp.jsx
import React, { useState } from 'react';
import JobStatus from './JobStatus';
import JobDetails from './JobDetails';

const SignUp = ({ isVisible, onClose }) => {
  const [isJobStatusVisible, setJobStatusVisible] = useState(false);
  const [isJobDetailsVisible, setJobDetailsVisible] = useState(false);
  const [selectedJobRole, setSelectedJobRole] = useState('');

  if (!isVisible) return null;

  const handleRegister = (e) => {
    e.preventDefault();
    setJobStatusVisible(true);
  };

  const handleJobStatusNext = (jobRole) => {
    setJobStatusVisible(false);
    if (jobRole === 'employee' || jobRole === 'employer') {
      setSelectedJobRole(jobRole);
      setJobDetailsVisible(true);
    } else {
      onClose();
    }
  };

  const handleJobDetailsNext = () => {
    setJobDetailsVisible(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleRegister}>
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
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <JobStatus isVisible={isJobStatusVisible} onClose={() => setJobStatusVisible(false)} onNext={handleJobStatusNext} />
      <JobDetails isVisible={isJobDetailsVisible} onClose={handleJobDetailsNext} />
    </>
  );
};

export default SignUp;
