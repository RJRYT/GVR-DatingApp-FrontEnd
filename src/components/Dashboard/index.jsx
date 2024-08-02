import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AccessDenied from "../AccessDenied";
import Loading from "../Loading";

function HomePage() {
  const { authState, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return <div>HomePage</div>;
}

export default HomePage;
