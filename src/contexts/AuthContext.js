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
  const [location, setLocation] = useState({latitude: 0, longitude: 0});

  const checkAuthStatus = useCallback(async (force = false) => {
    try {
      if (status && !force) return;
      await getLocation();
      let reqUrl = "/users/me";
      if(location.latitude && location.longitude){
        reqUrl = `${reqUrl}/?lat=${location.latitude}&lon=${location.longitude}`;
      }
      const response = await axiosInstance.get(reqUrl);
      if (response.data.success) setAuthState({ isAuthenticated: true, user: response.data.user });
      else setAuthState({ isAuthenticated: false, user: null });
    } catch (error) {
      setAuthState({ isAuthenticated: false, user: null });
    } finally {
      setLoading(false);
      setStatus(true);
    }
  }, []);

  const getLocation = async() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({latitude, longitude});
        },
        (error) => {
          console.log("Location error: ",error);
        },
        {
          enableHighAccuracy: true, // Request the most accurate position
          timeout: 5000,            // Time out after 5 seconds
          maximumAge: 0             // No cached position data
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (!status) checkAuthStatus();
  }, [checkAuthStatus]);

  const logout = async () => {
    try {
      setAuthState({ isAuthenticated: false, user: null });
      await axiosInstance.post("/auth/logout").then(() => {
        toast.warning("Logout completed");
        window.location.replace("/login");
      })
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

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
