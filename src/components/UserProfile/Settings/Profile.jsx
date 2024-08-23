import React from "react";
import {
  FaSearch,
  FaQrcode,
  FaUser,
  FaComments,
  FaBell,
  FaQuestionCircle,
  FaDatabase,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Profile from "../../../assets/profile/profilePic.png";
import Navbar from "../../Dashboard/Navbar";

const settingsOptions = [
  {
    icon: <FaUser />,
    label: "Account",
    description: "Privacy, security, change number",
    path: "/dashboard/@me/privacy",
  },
  {
    icon: <FaComments />,
    label: "Chat",
    description: "Chat history, theme, wallpapers",
    path: "/dashboard/userProfile/settings/chat",
  },
  {
    icon: <FaBell />,
    label: "Notifications",
    description: "Messages, group and others",
    path: "/dashboard/userProfile/settings/notifications",
  },
  {
    icon: <FaQuestionCircle />,
    label: "Help",
    description: "Help center, contact us, privacy policy",
    path: "/dashboard/userProfile/settings/help",
  },
  {
    icon: <FaDatabase />,
    label: "Storage and data",
    description: "Network usage, storage usage",
    path: "/dashboard/userProfile/settings/storage",
  },
  {
    icon: <FaUserPlus />,
    label: "Invite a friend",
    description: "",
    path: "/dashboard/userProfile/settings/invite",
  },
];
const users = [
  { name: "Nazrul Islam", src: Profile, description: "Never give up 💪" },
];    

const ProfileSettings = () => {
  return (
    <>
      <div className="items-center justify-center min-h-screen bg-fuchsia-950">
        <div className="flex p-6">
          <button className="rounded-full border-white border-2 p-2 bg-[#DD88CF] ml-4">
            <FaSearch className="text-white" />
          </button>
          <h3 className="flex-1 text-center text-white text-2xl font-bold">
            Settings
          </h3>
        </div>
        <div className="bg-white rounded-t-3xl min-h-[calc(100vh - 30px)] p-6 mt-4">
          <div className="w-full flex justify-center mb-1">
            <div className="w-5 rounded-full md:w-10 lg:w-16 h-1 bg-gray-200 border-2"></div>
          </div>
          {users.map((user) => (
            <Link
              to={"/dashboard/@me"}
              className="flex items-center border-b-2 border-b-slate-200 pb-4"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={user.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 ml-6">
                <h3 className="text-black flex-1 font-bold text-lg">
                  {user.name}
                </h3>
                <p className="text-sm">{user.description}</p>
              </div>
              <div>
                <FaQrcode className="text-teal-500 text-xl" />
              </div>
            </Link>
          ))}

          <div className="pb-24">
            {settingsOptions.map((option, index) => (
              <Link
                to={option.path}
                key={index}
                className="flex items-center p-6 last:border-b-0 hover:bg-gray-100"
              >
                <div className="text-xl text-gray-600">{option.icon}</div>
                <div className="ml-6">
                  <div className="font-semibold text-gray-900">
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="text-sm text-gray-600">
                      {option.description}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default ProfileSettings;
