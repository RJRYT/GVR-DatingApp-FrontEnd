import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isVisible, modelToggle }) => {
  const navigate = useNavigate();
  const handleLoginClick = (e) => {
    e.preventDefault();
    modelToggle();
    navigate("/dashboard");
  };
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email/Mobile
            </label>
            <input
              type="text"
              placeholder="Email Address/Mobile"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <button
            type="button"
            className="w-full p-2 bg-black text-white rounded-lg font-medium"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <div className="mt-5 text-sm text-gray-600">
            <span className="font-bold underline">Forgot password?</span>
          </div>
          <div className="mt-5 text-sm text-gray-600">
            Don't have an account?{" "}
            <button onClick={()=>{modelToggle("Signup");}} className="text-pink-500">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
