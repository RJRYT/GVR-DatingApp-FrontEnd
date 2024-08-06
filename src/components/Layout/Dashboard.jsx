import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AccessDenied from "../AccessDenied";
import Loading from "../Loading";
import { Outlet } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

function DashboardLayout() {
  const { authState, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  //if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <div className="font-sans">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default DashboardLayout;
