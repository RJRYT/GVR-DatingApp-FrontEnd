import React from 'react';
import SideBar from "../Admin/side-bar/Sidebar";
import TopBar from "../Admin/top-bar/Topbar";
import { Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  
  // Define the routes where SearchBar should be visible
  const searchBarRoutes = [
    "/admin/dashboard",
    "/admin/users",
    "/admin/users/profile",
    "/admin/subscription",
    "/admin/notification",
    "/admin/notification/settings"
  ];
  
  // Determine if the SearchBar should be available on the current page
  const isSearchAvail = searchBarRoutes.includes(location.pathname);
  
  return (
    <div className="w-[100%] h-[100%] text-textColor bg-[#f0f6ff] grid place-items-end font-poppins">
      <SideBar />
      <TopBar isSearchAvail={isSearchAvail}/>
      
        <Outlet/>
      
    </div>
  );
};

export default AdminLayout;
