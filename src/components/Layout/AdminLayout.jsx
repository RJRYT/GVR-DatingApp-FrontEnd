import React from 'react'
import SideBar from "../Admin/side-bar/Sidebar";
import TopBar from "../Admin/top-bar/Topbar"
import { Outlet } from 'react-router-dom';

const AdminLayout = ({children}) => {
  return (
    <div className="w-full h-screen text-textColor bg-[#f0f6ff] grid place-items-end font-poppins">
      <SideBar />
      {/* <TopBar/> */}
      <div>{children}</div>
      
    <Outlet/>
      
    </div>
  );
};

export default AdminLayout;
