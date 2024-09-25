import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import LoadingScreen from "../loading-screen/LoadingScreen";
import axiosInstance from "../../Instance/AxiosAdmin";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Import the icons

const LoginScreen = () => {
  const navigate = useNavigate();
  const { authState, loading, checkAuthStatus } = useContext(AdminContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    if (!loading && authState.isAuthenticated) return navigate("/admin/dashboard");
  }, [loading, authState, navigate]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(credentials.email)) {
      setEmailError('Enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(credentials.password)) {
      setPasswordError('Password must be at least 6 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      try {
        const response = await axiosInstance.post('/auth/login', credentials);
        console.log("Credentials:",credentials);
        
        if (response.data.success) {
          toast.success(response.data.message);
          checkAuthStatus();
          navigate("/admin/dashboard");
        } else {
          toast.error(response.data.message);
          navigate("/admin/login");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="flex items-center justify-center h-screen bg-[#f0f6ff]">
      <div className="bg-white p-8 rounded-md shadow-lg w-96 mt-30">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}  // Conditionally toggle input type
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            
            {/* Eye Icon for toggling visibility */}
            <div className="absolute right-3 top-11 cursor-pointer text-gray-800">
              {showPassword ? (
                <IoEyeOffOutline onClick={() => setShowPassword(false)} size={24} />
              ) : (
                <IoEyeOutline onClick={() => setShowPassword(true)} size={24} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
