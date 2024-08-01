// GVR-DatingApp-FrontEnd\src\components\Login\Model\JobDetails2.jsx
import React, { useState } from 'react';

const JobDetails2 = ({ isVisible, onClose , onSwitchToRelationship}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [expertiseLevel, setExpertiseLevel] = useState('');

  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSwitchToRelationship();
    
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Job Details 2</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input 
              type="text" 
              placeholder="Job Title" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Expertise Level</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={expertiseLevel}
              onChange={(e) => setExpertiseLevel(e.target.value)}
            >
              <option value="" disabled>Select Expertise Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="w-full p-2 bg-gray-800 text-white rounded-lg font-medium"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails2;