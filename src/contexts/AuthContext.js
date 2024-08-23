import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../Instance/Axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });
  const [status, setStatus] =useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = useCallback(async (force=false) => {
    try {
      if(status && !force) return;
      const response = await axiosInstance.get("/users/me");
      if (response.data.success) setAuthState({ isAuthenticated: true, user: response.data.user });
      else setAuthState({ isAuthenticated: false, user: null });
    } catch (error) {
      setAuthState({ isAuthenticated: false, user: null });
    } finally {
      setLoading(false);
      setStatus(true);
    }
  }, []);

  useEffect(() => {
    if(!status) checkAuthStatus();
  }, [checkAuthStatus]);

  const logout = async () => {
    try {
      setAuthState({ isAuthenticated: false, user: null });
      await axiosInstance.post("/auth/logout");
      toast.warning("Logout completed");
      window.history.location = "/login";
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
