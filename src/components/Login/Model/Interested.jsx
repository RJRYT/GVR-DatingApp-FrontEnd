import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

const Interested = ({ isVisible, modelToggle }) => {
  const navigate = useNavigate();
  const { authState, checkAuthStatus, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) modelToggle();
  }, [loading, authState]);

  const handleMatermonyClick = (e) => {
    e.preventDefault();
    toast.error("Its not yet ready");
  };

  const handleDatingClick = (e) => {
    e.preventDefault();
    checkAuthStatus(true);
    toast.success("Redirecting to dating dashboard");
    navigate("/dashboard");
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
            onClick={handleDatingClick}
          >
            Dating
          </button>
          <br />
          <br />
          <button
            type="button"
            className="w-full p-2 bg-black text-white rounded-lg font-medium"
            onClick={handleMatermonyClick}
          >
            Matrimony
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interested;
