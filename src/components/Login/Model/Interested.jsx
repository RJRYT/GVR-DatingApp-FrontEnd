import React from "react";
import { useNavigate } from "react-router-dom";

const Interested = ({ isVisible, modelToggle }) => {
  const navigate = useNavigate();
  const handleDatingClick = (e) => {
    e.preventDefault();
    modelToggle();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Interested</h2>
        <br />
        <div className="mb-6">
          <button
            type="button"
            className="w-full p-2 bg-black text-white rounded-lg font-medium"
            onClick={() => navigate("/dashboard")}
          >
            Dating
          </button>
          <br />
          <br />
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg font-medium"
            onClick={handleDatingClick}
          >
            Matrimony
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interested;
