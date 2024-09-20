import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../Instance/AxiosAdmin";
import { toast } from "react-toastify";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    admin: null,
  });
  const [loading, setLoading] = useState(true);

  // Check authentication status
  const checkAuthStatus = useCallback(async () => {
    try {
      setLoading(true); // Start loading
      const response = await axiosInstance.get("/me");
      if (response.data.success) {
        setAuthState({ isAuthenticated: true, admin: response.data.user });
      } else {
        setAuthState({ isAuthenticated: false, admin: null });
      }
    } catch (error) {
      console.error("Error fetching admin data", error);
      setAuthState({ isAuthenticated: false, admin: null });
    } finally {
      setLoading(false); // End loading
    }
  }, []);

  // Effect to check auth status once when component mounts
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  // Logout function
  const logout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      setAuthState({ isAuthenticated: false, admin: null });
      toast.warning("Logout completed");
      window.location.replace("/admin/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Update admin information in context
  const updateAdmin = (newData) => {
    setAuthState((prevState) => ({
      ...prevState,
      admin: {
        ...prevState.admin,
        ...newData,
      },
    }));
  };

  return (
    <AuthContext.Provider value={{ authState, checkAuthStatus, updateAdmin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
