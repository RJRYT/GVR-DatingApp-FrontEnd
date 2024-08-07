import React, { useState } from "react";
import Maps from "../../../assets/Maps.png";
import Clara from "../../../assets/story/profile4.png";
import User1 from "../../../assets/User1.png";

const interests = [
  { name: "Football", icon: "⚽️" },
  { name: "Nature", icon: "🌿" },
  { name: "Language", icon: "🗣️" },
  { name: "Photography", icon: "📸" },
  { name: "Music", icon: "🎵" },
  { name: "Writing", icon: "✍️" },
];

const peopleAroundMe = [
  {
    name: "Clara",
    distance: "1.2 km",
    interest: "Music",
    icon: "🎵",
    imgSrc: Clara,
  },
];
const users = [{ src: User1, alt: "User 1" }];

const Interest = () => {
  const [selectedInterest, setSelectedInterest] = useState("Music");

  const handleInterestClick = (interestName) => {
    setSelectedInterest(interestName);
  };
  return (
    <div className="px-4 py-2 bg-white rounded-lg shadow-md h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Interest</h2>
        <button className="text-fuchsia-500">View all</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <div
            key={index}
            onClick={() => handleInterestClick(interest.name)}
            className={`flex items-center px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${
              selectedInterest === interest.name
                ? "bg-fuchsia-500 text-white"
                : "bg-gray-100 text-gray-700"
            } hover:bg-fuchsia-500 hover:text-white transition-colors duration-200`}
          >
            <span className="mr-2">{interest.icon}</span>
            {interest.name}
          </div>
        ))}
      </div>
      <div className="mt-4 ">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Around me</h2>
          <p className="text-sm text-gray-500">
            People with{" "}
            <span className="text-fuchsia-500 font-medium">
              "{selectedInterest}"
            </span>{" "}
            interest around you
          </p>
        </div>
        <div className="relative  flex-grow overflow-hidden rounded-lg shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Maps})` }}
          ></div>
          <div className="relative z-5 p-4 mt-10 h-full">
            <div className="flex items-center mt-10 left-1">
              {peopleAroundMe.map((person, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center "
                >
                  <div className=" top-0 left-10 transform -translate-y-1/2 px-3 py-1 bg-fuchsia-950 rounded-full text-sm font-medium  ">
                    <p className="text-xs text-white">Connect with Clara</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-fuchsia-950 overflow-hidden  left-10">
                    <img
                      src={person.imgSrc}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex">
              {users.map((user) => (
                <div className="w-10 h-10 rounded-full border-4 border-whit overflow-hidden ml-auto mr-20 mb-60 ">
                  <img
                    src={user.src}
                    alt={user.alt}
                    className="w-full h-full object-cover "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
