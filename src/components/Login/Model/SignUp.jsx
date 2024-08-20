import React, { useState, useContext, useEffect } from "react";
import axiosInstance from "../../../Instance/Axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";

const SignUp = ({ isVisible, modelToggle, setLoading }) => {
  const { authState, checkAuthStatus, loading } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  useEffect(() => {
    if (!loading && authState.isAuthenticated) modelToggle("Personal");
  }, [loading, authState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z]{2,20}(?:\s[a-zA-Z]{1,20})?$/.test(formData.name)) {
      newErrors.name =
        "Name must be 2-20 characters long and can only contain letters, numbers";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone number validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits long";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.otp) {
      newErrors.otp = "OTP is required";
    } else if (!/^[0-9]{6}$/.test(formData.otp)) {
      newErrors.otp = "OTP must be 6 digits long";
      setErrors(newErrors);
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async (e) => {
    const newErrors = {};
    e.preventDefault();
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      setErrors(newErrors);
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits long";
      setErrors(newErrors);
    } else {
      setErrors({});
      setLoading(true);
      try {
        const res = await axiosInstance.post("/auth/number/sendotp", {
          phoneNumber: formData.phoneNumber,
        });
        if (res.data.success) {
          setIsOtpSent(true);
          toast.success("OTP is sended to the given number.");
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
      }
    }
  };

  const ResentOTP = (e) => {
    e.preventDefault();
    setIsOtpSent(false);
    setFormData((prevData) => ({
      ...prevData,
      otp: "",
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await axiosInstance.post("/auth/email/register", formData);
        if(res.data.success){
          checkAuthStatus();
          modelToggle("Personal");
          toast.success("Registration Success");
        }else{
          toast.error(res.data.message);
        }
      } catch (err) {
        console.error(err);
        toast.error(
          err.response?.data.message || "Something Broken..! Try again later"
        );
      } finally {
        setLoading(false);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-h-screen overflow-y-auto hide-scrollbar max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form className="space-y-4" noValidate onSubmit={handleFormSubmit}>
          <div>
            <label className={`block text-sm font-medium ${errors.name ? "text-red-600" : "text-gray-700"} `}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              autoComplete="first-name"
              className={`w-full p-2 border ${errors.name ? "border-red-600 focus:ring-red-700 placeholder-red-700 text-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.name && (
              <span className="text-red-600 text-xs">
                {errors.name}
              </span>
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium ${errors.email ? "text-red-600" : "text-gray-700"} `}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              autoComplete="email"
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
            <label className={`block text-sm font-medium ${errors.phoneNumber ? "text-red-600" : "text-gray-700"} `}>
              Mobile
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Mobile"
              autoComplete="tel"
              className={`w-full p-2 border ${errors.phoneNumber ? "border-red-600 focus:ring-red-700 placeholder-red-700 text-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.phoneNumber && (
              <span className="text-red-600 text-xs">
                {errors.phoneNumber}
              </span>
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium ${errors.password ? "text-red-600" : "text-gray-700"} `}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="new-password"
              className={`w-full p-2 border ${errors.password ? "border-red-600 focus:ring-red-700 placeholder-red-700 text-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.password && (
              <span className="text-red-600 text-xs">
                {errors.password}
              </span>
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium ${errors.confirmPassword ? "text-red-600" : "text-gray-700"} `}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              autoComplete="new-password"
              className={`w-full p-2 border ${errors.confirmPassword ? "border-red-600 focus:ring-red-700 placeholder-red-700 text-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.confirmPassword && (
              <span className="text-red-600 text-xs">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <div className="flex justify-start items-center gap-2 mt-5">
            <button onClick={handleSendOtp} disabled={isOtpSent} className="text-sm text-gray-600 hover:underline">Generate OTP</button>
            {isOtpSent && (<button onClick={ResentOTP} className="text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.88-3.36L23 10M1 14l5.64 5.64A9 9 0 0 0 20.49 15"></path>
              </svg>
            </button>)}
            {isOtpSent && (<span className="text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V13a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>)}
          </div>
          <div>
            <label className={`block text-sm font-medium ${errors.otp ? "text-red-600" : "text-gray-700"} `}>
              OTP
            </label>
            <input
              type="number"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder={!isOtpSent ? "OTP" : "OTP is send to given number"}
              autoComplete="one-time-code"
              className={`w-full p-2 border ${errors.otp ? "border-red-600 focus:ring-red-700 placeholder-red-700 text-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.otp && (
              <span className="text-red-600 text-xs">
                {errors.otp}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg font-medium"
          >
            Register
          </button>
          <button
            type="button"
            className="w-full p-2 bg-[#b84eb9] text-white rounded-lg font-medium"
            onClick={modelToggle}
          >
            Social media Login
          </button>
          <div className="mt-5 text-sm text-gray-600">
            Already have a account?{" "}
            <button onClick={() => { modelToggle("Login") }} className="text-pink-500">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
