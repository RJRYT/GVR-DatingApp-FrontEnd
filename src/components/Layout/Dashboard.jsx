import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

function DashboardLayout() {
  return (
    <div className="font-sans">
        <Navbar />
        <Outlet />
    </div>
  );
}

export default DashboardLayout;
