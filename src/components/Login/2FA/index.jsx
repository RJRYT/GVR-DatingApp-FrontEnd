import React, { useState } from 'react';
import apiInstance from "../../../Instance/Axios";
import { useNavigate } from "react-router-dom";

const TwoFAVerification = ({ userId }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerifyToken = () => {
   
    apiInstance.post('/users/verify-2fa', { userId, token })
      .then(response => {
        navigate("/login")
        // Redirect user to the dashboard or next page
      })
      .catch(err => {
        setError('Failed to verify 2FA token. Please try again.');
        console.error(err);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">Verify 2FA</h1>
      <input
        type="text"
        placeholder="Enter your 2FA code"
        value={token}
        onChange={e => setToken(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleVerifyToken}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Verify
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TwoFAVerification;
