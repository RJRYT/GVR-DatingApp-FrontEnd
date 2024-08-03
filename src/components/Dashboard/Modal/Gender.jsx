import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gender = ({ isOpen , onClose , backdropType }) => {
    const navigate = useNavigate();

    if(!isOpen)  return null;
    
       // Determine backdrop class based on backdropType prop
       const backdropClass = backdropType === 'home' ? 'bg-home-backdrop backdrop-blur-md' : 'bg-login-backdrop backdrop-blur-md';

    const handleBothClick = () => {
        // Navigate to the HomePage route
        navigate('/dashboard');
      };


  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${backdropClass} backdrop-blur-sm px-6`}>
     <div className="p-6 rounded-lg shadow-lg w-full max-h-screen overflow-y-auto hide-scrollbar max-w-md ">
        <h6 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: 'Georgia' }}>
          Interested in
        </h6>

        <div className="mb-4">
          <button className="w-full py-2 px-4 text-white font-medium bg-blue-500 rounded hover:bg-blue-600">
            Men
          </button>
        </div>
        <div className="mb-4">
          <button className="w-full py-2 px-4 text-white font-medium bg-pink-500 rounded hover:bg-pink-600">
            Women
          </button>
        </div>
        <div>
          <button className="w-full py-2 px-4 text-white font-medium bg-gradient-to-r from-blue-500 to-pink-500 rounded hover:from-blue-600 hover:to-pink-600"
          onClick={handleBothClick}
          >
            Both
          </button>
        </div>
      </div>
      <button
        className="absolute top-2 right-2 text-white text-xl"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
}

export default Gender;
