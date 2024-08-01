// GVR-DatingApp-FrontEnd\src\components\Login\Model\JobDetails.jsx
import React, { useState } from 'react';

const JobDetails = ({ isVisible, onClose, onSwitchToRelationship }) => {
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');

  
  const handleClick =(e)=>{
    e.preventDefault();
   
      onSwitchToRelationship();
    
  }

  if (!isVisible) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSwitchToRelationship();
   }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Job Details</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              placeholder="Designation"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-gray-800 text-white rounded-lg font-medium"
            onClick={handleClick}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;