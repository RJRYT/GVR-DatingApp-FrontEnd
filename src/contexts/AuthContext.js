import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../Instance/Axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check authentication status
  const checkAuthStatus = useCallback(async (force = false) => {
    if (status && !force) return; // Prevent redundant calls
    try {
      setLoading(true); // Start loading
      const response = await axiosInstance.get("/users/me");
      if (response.data.success) {
        setAuthState({ isAuthenticated: true, user: response.data.user });
        setStatus(true); // Set the status to true after successful auth
        getLocation(); // Get location only if the user is authenticated
      } else {
        setAuthState({ isAuthenticated: false, user: null });
      }
    } catch (error) {
      console.error("Error fetching user data", error);
      setAuthState({ isAuthenticated: false, user: null });
    } finally {
      setLoading(false); // End loading
    }
  }, []);

  // Get location using browser's Geolocation API
  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          try {
            const accuracyThreshold = 500; // Adjust based on your desired accuracy in meters
          if (accuracy < accuracyThreshold) {
            await axiosInstance.get(`/users/me/?lat=${latitude}&lon=${longitude}`);
          }
          } catch (error) {
            console.error("Error sending location", error);
          }
        },
        (error) => {
          console.warn("Geolocation error", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  }, [status]);

  // Effect to check auth status once when component mounts
  useEffect(() => {
    if (!status) {

      checkAuthStatus(); 
    }
  }, [checkAuthStatus, status]);

  // Logout function
  const logout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      setAuthState({ isAuthenticated: false, user: null });
      toast.warning("Logout completed");
      window.location.replace("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Update user information in context
  const updateUser = (newUserData) => {
    setAuthState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        ...newUserData,
      },
    }));
  };

  return (
    <AuthContext.Provider value={{ authState, checkAuthStatus, updateUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
