import React, { useState } from "react";
import Navbar from "../../Dashboard/Navbar";
import { CiSearch } from "react-icons/ci";
import imgAfrin from "../../../assets/profile/Afrin.png";
import imgAdil from "../../../assets/profile/Adil.png";
import imgAlice from "../../../assets/profile/Alice.png";
import imgCatherine from "../../../assets/story/profile1.png";
import imgRyan from "../../../assets/story/profile5.png";
import imgSelena from "../../../assets/story/profile2.png";
import {FaRegHeart} from "react-icons/fa";
import {RiCloseLine} from "react-icons/ri";

// Example user data with profile pictures
const initialUsers = [
  {
    id: 1,
    name: "Afrin Sabila",
    profilePicture: imgAfrin,
    description: "Life is beautiful 👌",
  },
  {
    id: 2,
    name: "Adil Adnan",
    profilePicture: imgAdil,
    description: "Be your own hero 💪",
  },
  {
    id: 3,
    name: "Alice George",
    profilePicture: imgAlice,
    description: "Keep working ✍️",
  },
  {
    id: 4,
    name: "Catherine Teressa",
    profilePicture: imgCatherine,
    description: "Make yourself proud 😍",
  },
  {
    id: 5,
    name: "Ryan David",
    profilePicture: imgRyan,
    description: "Flowers are beautiful 🌸",
  },
  {
    id: 6,
    name: "Selena Sebastian",
    profilePicture: imgSelena,
    description: "Follow along for a journey through music and creativity ✨",
  },
];

const Received = ({ sidemenutitle }) => {
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

  return (
    <div className="items-center justify-center min-h-screen bg-fuchsia-950">
      <div className="p-6 flex items-center">
        <div className="w-14 h-14 bg-fuchsia-400 rounded-full flex items-center justify-center border-2 border-white">
          <CiSearch className="text-white text-3xl" />
        </div>
        <h3 className="flex-grow text-center text-white text-2xl font-bold aldrich-regular">
          {sidemenutitle}
        </h3>
      </div>

      <div className="bg-white rounded-t-3xl min-h-screen p-6 h-96 mt-4 relative">
        {/* Horizontal Line at the Top Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
          <div
            className="w-16 h-1 bg-gray-200 mx-auto mt-0"
            style={{ borderRadius: "2px" }}
          ></div>
        </div>

        <div>
          {Object.keys(groupedUsers).map((letter) => (
            <div key={letter} className="pb-10">
              <h2 className="text-2xl font-semibold chakra-petch-medium mt-3 mb-2">
                {letter}
              </h2>
              <ul className="list-none p-0 mb-1">
                {groupedUsers[letter].map((user) => (
                  <li key={user.id} className="flex items-center relative mb-4">
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    <div className="flex-grow">
                      <span className="text-lg font-semibold">{user.name}</span>
                      <p className="text-sm text-gray-600 mt-1 chakra-petch-light">
                        {user.description}
                      </p>
                    </div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <FaRegHeart className="text-gray-500 cursor-pointer" />
                      <RiCloseLine className="text-gray-500 cursor-pointer" />
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
  );
};

export default Received;
