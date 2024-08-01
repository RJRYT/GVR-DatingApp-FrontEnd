// GVR-DatingApp-FrontEnd\src\components\Login\Model\RelationshipGoals.jsx
import React, { useState } from 'react';

const RelationshipGoals = ({ isVisible, onClose }) => {
  const [relationshipGoal, setRelationshipGoal] = useState('');

  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Relationship Goals</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input 
                type="radio" 
                name="relationshipGoal" 
                value="shortTerm" 
                onChange={(e) => setRelationshipGoal(e.target.value)} 
                className="mr-2"
              />
              Short Term Relationship
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input 
                type="radio" 
                name="relationshipGoal" 
                value="longTerm" 
                onChange={(e) => setRelationshipGoal(e.target.value)} 
                className="mr-2"
              />
              Long Term Relationship
            </label>
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

export default RelationshipGoals;