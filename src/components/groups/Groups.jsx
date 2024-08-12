import React, { useState } from "react";
import Navbar from "../Dashboard/Navbar";
import { CiSearch } from "react-icons/ci";
import imgAfrin from "../../assets/profile/Afrin.png";
import imgCatherine from "../../assets/story/profile1.png";
import imgRyan from "../../assets/story/profile5.png";
import imgSelena from "../../assets/story/profile2.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import CombinedProfile from "./CombinedProfile";
import { FaRegComment } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";

// Example user data with profile pictures
const initialUsers = [
  { id: 1, name: "Team Align", profilePicture: imgAfrin },
  { id: 2, name: "Team SAS", profilePicture: imgSelena },
  { id: 3, name: "Team REACT", profilePicture: imgCatherine },
  { id: 4, name: "Team KINGS", profilePicture: imgRyan },
];

const Groups = () => {
  // State to hold the users
  const [users, setUsers] = useState(initialUsers);

  // Function to sort users alphabetically by name
  const sortUsersAlphabetically = (users) => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  };

  // Sorted users
  const sortedUsers = sortUsersAlphabetically(users);

  // Split users into groups based on their first letter
  const groupedUsers = sortedUsers.reduce((groups, user) => {
    const firstLetter = user.name.charAt(0).toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(user);
    return groups;
  }, {});

  // Get the profile pictures of the first 3 users for the combined picture
  const profilePictures = users.slice(0, 3).map((user) => user.profilePicture);

  return (
    <>
      <div className="items-center justify-center min-h-screen bg-fuchsia-950 ">
        <div className="pt-6 pl-3 flex items-center">
          <span className="pt-6 pl-1 chakra-petch-semibold text-white text-2xl">
            BuddyPair
          </span>
          <GoDot className="text-fuchsia-400 text-sm ml-[60%] mt-2  md:block md:text-base lg:text-xl lg:ml-[70%]" />
        </div>
        <div className="mt-0 ml-3 text-white">
          <FaArrowLeftLong />
          <i className=" text-white text-3xl"></i>
        </div>

        <div className="text-white">
          <div className="bg-white rounded-t-3xl min-h-screen p-6 h-96 mt-4 relative">
            <div className="flex items-center justify-between mb-4">
              {/* Search Icon */}
              <div className="flex items-center">
                <div className="w-11 h-10 bg-fuchsia-400 rounded-full flex items-center justify-center border-2 border-white ml-5">
                  <CiSearch className="text-white text-2xl" />
                </div>
              </div>

              {/* Centered Heading */}
              <span className="text-xl font-semibold text-gray-800 mx-4 chakra-petch-medium">
                Groups
              </span>

              {/* Placeholder for spacing */}
              <div className="w-8"></div>
            </div>
            <div>
              {Object.keys(groupedUsers).map((letter) => (
                <div key={letter}>
                  <ul className="list-none p-0 ">
                    {groupedUsers[letter].map((user) => (
                      <li
                        key={user.id}
                        className="flex items-center mb-5 relative"
                      >
                        <CombinedProfile images={profilePictures} />
                        <div>
                          <span className="text-lg text-black font-semibold chakra-petch-medium ml-3">
                            {user.name}
                          </span>

                          <div className="absolute right-0 top-1/2 transform -translate-y-1 flex space-x-4">
                            <FaRegComment className="text-purple-900 cursor-pointer text-2xl" />
                            <LuPhoneCall className="text-gray-500 cursor-pointer text-2xl" />
                            <GoDeviceCameraVideo className="text-gray-500 cursor-pointer text-2xl" />
                          </div>
                          <div className="absolute bottom-0 left-0 w-full border-b border-gray-300 mt-60 ml-24"></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
