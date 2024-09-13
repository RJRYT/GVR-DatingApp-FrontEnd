import React from "react";
import Settings from "../../components/Admin/notification-settings/Settings";
import { SearchBar, TopBar } from "../../components/Admin";

function NotificationSettingsScreen() {
  return <div className="relative w-[90%] h-full mx-auto">
    <TopBar/>
    <SearchBar/>
    <Settings />
  </div>;
}

export default NotificationSettingsScreen;