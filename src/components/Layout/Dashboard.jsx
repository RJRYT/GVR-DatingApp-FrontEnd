import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

function DashboardLayout() {
  return (
    <div className="font-sans">
        <Outlet />
        <Navbar />
    </div>
  );
}

export default DashboardLayout;
