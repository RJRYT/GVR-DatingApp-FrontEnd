import React, { useState, useEffect } from 'react';
import apiInstance from "../../../Instance/Axios";
import { useNavigate } from "react-router-dom";

const TwoFAVerification = () => {
  const [code, setCode] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const handleVerifyToken = () => {
    if (!token) {
      setError('Token not found. invalid request');
      return;
    }
    apiInstance.post('/users/verify-2fa', { token, code })
      .then((res) => {
        console.log(res.data)
        navigate("/login?token=" + res.data.token)
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
        value={code}
        onChange={e => setCode(e.target.value)}
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
