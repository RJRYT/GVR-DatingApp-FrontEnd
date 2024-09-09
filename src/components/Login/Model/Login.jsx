import React, { useState, useContext, useEffect } from "react";
import axiosInstance from "../../../Instance/Axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = ({ isVisible, modelToggle, setLoading }) => {
  const { authState, checkAuthStatus, loading } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [forceCheck, setForceCheck] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && authState.isAuthenticated) modelToggle();
  }, [loading, authState]);

  const validateEmailOrNumber = (e) => {
    const { value } = e.target;
    if (/^[0-9]{10}$/.test(value)) {
      return setFormData((prevData) => ({
        ...prevData,
        email: "",
        phoneNumber: value,
      }));
    }
    return setFormData((prevData) => ({
      ...prevData,
      email: value,
      phoneNumber: "",
    }));
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!formData.email && !formData.phoneNumber) {
      newErrors.email = "Email/Phone is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      !/^[0-9]{10}$/.test(formData.phoneNumber)
    ) {
      newErrors.email = "Email/Phone is invalid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setLoading(true);
      try {
        const res = await axiosInstance.post("/auth/email/login", formData);
        if (res.data.success) {
          if (res.data.twoFA) {
            navigate("/login/2fa/?token=" + res.data.token);
            toast.warn("Complete 2FA to continue");
            return;
          }
          checkAuthStatus(forceCheck);
          toast.success("Login Success");
          modelToggle();
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        console.error(err);
        toast.error(
          err.response?.data.message || "Something Broken..! Try again later"
        );
      } finally {
        setLoading(false);
        setForceCheck(false);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-4" noValidate onSubmit={handleLoginSubmit}>
          <div>
            <label
              className={`block text-sm font-medium ${errors.email ? "text-red-600" : "text-gray-700"} `}
            >
              Email/Mobile
            </label>
            <input
              type="text"
              placeholder="Email Address/Mobile"
              value={formData.email || formData.phoneNumber}
              onChange={validateEmailOrNumber}
              className={`w-full p-2 border ${errors.email ? "border-red-600 focus:ring-red-700 placeholder-red-700 text-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.email}
              </span>
            )}
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${errors.password ? "text-red-600" : "text-gray-700"} `}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }));
              }}
              className={`w-full p-2 border ${errors.password ? "border-red-600 focus:ring-red-700 placeholder-red-700 text-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.password && (
              <span className="text-red-600 text-xs">
                {errors.password}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg font-medium"
          >
            Login
          </button>
          <div className="mt-5 text-sm text-gray-600">
            <span className="font-bold underline">Forgot password?</span>
          </div>
          <div className="mt-5 text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => {
                modelToggle("Signup");
              }}
              className="text-pink-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
