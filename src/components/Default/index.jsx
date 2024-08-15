import React, { useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axiosInstance from "../../Instance/Axios";
import AccessDenied from "../AccessDenied";
import Loading from "../Loading";
import LoadingOverlay from "../Loading/LoadingOverlay";

function DefaultPage() {
  const { authState, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchRegistrationStatus = useCallback(async () => {
    try {
      const res = await axiosInstance.get("/users/status/registration");
      if (
        res.data.personalInfoSubmitted &&
        res.data.professionalInfoSubmitted &&
        res.data.purposeSubmitted
      ) {
        navigate("/dashboard");
      }else navigate("/login");
    } catch (err) {
      console.error(err);
    }
  }, [navigate]);

  useEffect(() => {
    if (!loading && authState.isAuthenticated) {
      fetchRegistrationStatus();
    }else if(!loading) navigate("/login");
  }, [fetchRegistrationStatus, loading, authState, navigate]);

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return <LoadingOverlay />;
}

export default DefaultPage;
