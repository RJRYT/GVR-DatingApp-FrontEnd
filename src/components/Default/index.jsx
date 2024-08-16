import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading";
import LoadingOverlay from "../Loading/LoadingOverlay";

function DefaultPage() {
  const { authState, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) return navigate("/login");

    if (
      authState.user.personalInfoSubmitted &&
      authState.user.professionalInfoSubmitted &&
      authState.user.purposeSubmitted
    ) {
      return navigate("/dashboard");
    }

    return navigate("/login");
  }, [loading, authState, navigate]);

  if (loading) return <Loading />;

  return <LoadingOverlay />;
}

export default DefaultPage;
