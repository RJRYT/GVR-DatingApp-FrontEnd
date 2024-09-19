import React from 'react';
import SideBar from "../Admin/side-bar/Sidebar";
import TopBar from "../Admin/top-bar/Topbar";
import { Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();

  // A mapping of components that should show the SearchBar
  const searchBarComponents = [
    'MainScreen', 
    'UserManagementScreen',
    'UserProfileScreen',
    'SubscriptionScreen',
    'NotificationSettingsScreen',
    'NotificationScreen',
    'FinancialManagementScreen'
  ];

  const currentComponent = getComponentFromLocation(location.pathname); 

  const isSearchAvail = searchBarComponents.includes(currentComponent);

  return (
    <div className="w-[100%] h-[100%] text-textColor bg-[#f0f6ff] grid place-items-end font-poppins">
      <SideBar />
      {/* Pass the isSearchAvail prop to TopBar */}
      <TopBar isSearchAvail={isSearchAvail} />
      <Outlet />
    </div>
  );
};

// This function can map routes to components based on your route structure
function getComponentFromLocation(pathname) {
  switch (pathname) {
    case '/admin/dashboard':
      return 'MainScreen';
    case '/admin/users':
      return 'UserManagementScreen';
    case '/admin/users/profile':
      return 'UserProfileScreen';
    case '/admin/subscription':
      return 'SubscriptionScreen'  
    case '/admin/notification':
      return 'NotificationScreen';
    case '/admin/notification/settings':
      return 'NotificationSettingsScreen';  
    case '/admin/finance':
      return 'FinancialManagementScreen';
    default:
      return 'OtherComponent';  // Default or fallback component
  }
}

export default AdminLayout;
