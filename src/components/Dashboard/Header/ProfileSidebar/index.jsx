import React from 'react';
import {  IoLogOutOutline } from 'react-icons/io5';

const ProfileSidebar = ({ toggleProfileModal, isOnline }) => {
  const menuItems = [
    'My Profile', 'Sent Request', 'Viewed My Profile', 'Accept Request',
    'Reject', 'Received', 'Shortlisted By', 'Shortlisted', 'Contacted',
    'Message', 'Settings'
  ];

  const handleItemClick = (item) => {
    console.log(`${item} clicked`); // Log the item clicked for debugging
    toggleProfileModal();  // Close the modal when an item is clicked

    // Add specific action for Logout
    if (item === 'Logout') {
      // Perform logout action
      handleLogout();
    }
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Perform logout action here, e.g., clearing user data, redirecting to login page
    //localStorage.clear(); // Uncomment and modify as per your logic
     //window.location.href = '/login'; // Uncomment and modify as per your logic
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
          <div className=" relative bg-pink-500 rounded-full  block p-1 h-[50px] w-[50px]">
            <img
              onClick={toggleProfileModal}
              src="https://i.imgur.com/sjLMNDM.png"
              alt="Profile"
              className=" w-10 h-10 rounded-full "
            /> 
             {/* {isOnline && ( */}
              <span className="absolute top-0 right-0 block h-3 w-3 bg-green-500 rounded-full"></span>
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
                key={item}
                onClick={() => handleItemClick(item)}
                className="flex items-center  py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.09)]"
              >
                {item}
              </li>
            ))}
            <li
              className="flex items-center justify-center  py-4 text-sm space-x-2 cursor-pointer hover:bg-[rgba(255,255,255,0.09)]"
              onClick={handleLogout}
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
