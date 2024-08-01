import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AccessDenied from "../AccessDenied";
import Loading from "../Loading";

function DefaultPage() {
  const { authState, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) {
      navigate("/login");
    } else if (!loading) {
      navigate("/dashboard");
    }
  }, [navigate, loading, authState]);

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return <div>DefaultPage</div>;
}

export default DefaultPage;
