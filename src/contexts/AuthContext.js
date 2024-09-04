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

  const checkAuthStatus = useCallback(async (force = false) => {
    try {
      if (status && !force) return;
      // const {latitude, longitude} = await getLocation();
      let reqUrl = "/users/me";
      // if(latitude && longitude){
      //   reqUrl = `${reqUrl}/?lat=${latitude}&lon=${longitude}`;
      // }
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
          return {latitude, longitude};
        },
        (error) => {
          console.log("Location error: ",error);
          return {latitude:0, longitude:0};
        },
        {
          enableHighAccuracy: true, // Request the most accurate position
          timeout: 5000,            // Time out after 5 seconds
          maximumAge: 0             // No cached position data
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      return {latitude:0, longitude:0};
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
