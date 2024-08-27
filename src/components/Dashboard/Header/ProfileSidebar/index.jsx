import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { IoLogOutOutline } from 'react-icons/io5';
import { AuthContext } from "../../../../contexts/AuthContext";

const ProfileSidebar = ({ toggleProfileModal, isOnline }) => {
  const { logout } = useContext(AuthContext);
  const menuItems = [
    { label: "My Profile", path: "/dashboard/profile" },
    { label: "Sent Request", path: "/dashboard/@me/sent" },
    { label: "Viewed My Profile", path: "/dashboard/@me/myprofile" },
    { label: "Accept Request", path: "/dashboard/@me/accept" },
    { label: "Reject", path: "/dashboard/@me/reject" },
    { label: "Received", path: "/dashboard/@me/received" },
    { label: "Shortlisted By", path: "/dashboard/@me/shortlisted-by" },
    { label: "Shortlisted", path: "/dashboard/@me/shortlist" },
    { label: "Contacted", path: "/dashboard/@me/contacted" },
    { label: "Message", path: "/dashboard/@me/messages" },
    { label: "Settings", path: "/dashboard/@me/profile" },
  ];

  const handleItemClick = (item) => {
    console.log(`${item} clicked`); 
    toggleProfileModal(); 

    if (item === 'Logout') {
      logout();
    }
  };

  return (
    <>
      <div className="absolute z-[100] top-[20px] right-4 bg-fuchsia-950 bg-opacity-80 p-6 rounded-lg shadow-lg text-white w-64 max-w-full">
        <button
          onClick={toggleProfileModal}
          className="absolute top-4 right-4 bg-white rounded-full"
          aria-label="Close menu"
        >
          <svg
            className="h-3 w-3 text-fuchsia-950"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4">
          <div  className="relative flex space-x-2 mb-6">
          <div className="relative bg-pink-500 rounded-full block p-0.5 h-[50px] w-[50px]">
            <img
              onClick={toggleProfileModal}
              src="https://i.imgur.com/sjLMNDM.png"
              alt="Profile"
              className="w-full h-full rounded-full"
            /> 
             {/* {isOnline && ( */}
              <span className="absolute top-0 right-1 block h-3 w-3 bg-green-500 rounded-full"></span>
            {/* )} */}
            </div>
            <div >
              <p className=" font-bold">Stone Stellar</p>
              <p className=" text-sm">Prime Member</p>
              <p className=" text-sm text-green-500">Online</p>
            </div>
          </div>

          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item.label)}
                className="flex items-center  py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.09)]"
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
            <li
              className="flex items-center justify-center  py-4 text-sm space-x-2 cursor-pointer hover:bg-[rgba(255,255,255,0.09)]"
              onClick={() => handleItemClick("Logout")}
            >
              <IoLogOutOutline className="mr-2 text-white"/>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
