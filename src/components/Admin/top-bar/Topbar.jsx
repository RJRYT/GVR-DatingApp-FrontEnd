import React from "react";
import { useNavigate } from "react-router-dom";

import { SearchBar } from "../index";
import { ProfileImage } from "../../../constants/images";
import { Bell, Moon } from "lucide-react";

function TopBar({ isSearchAvail }) {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-20 flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between">
        {isSearchAvail ? <SearchBar /> : <div className="w-full"></div>}
        <div className="flex gap-5 items-center">
          <Moon strokeWidth={2} size={20} />
          <Bell strokeWidth={2} size={20} />
          <div
            onClick={() => navigate("/admin/profile")}
            className="w-7 h-7 rounded-full overflow-hidden cursor-pointer"
          >
            <img
              src={ProfileImage}
              alt="profile image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;