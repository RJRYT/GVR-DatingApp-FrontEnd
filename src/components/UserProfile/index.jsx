import React, { useState } from "react";
import profilePicture from "../../assets/profile/profilePic.png"; // Ensure correct path
import { Link } from "react-router-dom";
import MatchButton from "./Components/MatchButton";

// Sample user data
const sampleUser = {
  profilePicture, // Correctly use the imported image
  name: "Alfredo Calzoni",
  age: "20",
  location: "Hamburg, Germany",
  about: `A good listener. I love having a good talk to know each other's side.`,
};

// Sample interests list with emojis
const interests = [
  { text: "Nature", emoji: "🌳" },
  { text: "Travel", emoji: "🌍" },
  { text: "Writing", emoji: "✍️" },
  { text: "People", emoji: "🙂"},
  { text: "Gym & Fitness", emoji:"💪"}
];

const UserProfile = ({ OwnProfile = false }) => {
  const [activeLine, setActiveLine] = useState(1); // State to manage active line

  const handleLineClick = (lineNumber) => {
    setActiveLine(lineNumber); // Set active line based on the clicked line
  };

  const handleBackClick = () => {
    // Example action: Navigate back or perform another action
    window.history.back(); // This will navigate to the previous page
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-fuchsia-800 overflow-hidden">
      {/* Profile Picture Section */}
      <div
        className="bg-cover bg-center w-full h-[55%] absolute top-0 left-[50%] transform -translate-x-1/2"
        style={{ backgroundImage: `url(${sampleUser.profilePicture})` }}
      >
        {/* Back Arrow Button */}
        <button
          onClick={handleBackClick}
          className="absolute top-4 left-4 bg-transparent p-2 rounded-full border border-gray-300 shadow-md text-gray-300 w-12 h-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* NearMeOutlined Icon with Blurred Background */}
        <div className="absolute top-4 right-4 flex items-center p-2 rounded-3xl border border-gray-300 shadow-md text-gray-300 backdrop-blur-md bg-white bg-opacity-30 w-20 h-10">
          {!OwnProfile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 11 14-6-6 14-2-6-6-2Z"
              ></path>
            </svg>
          )}
          <span className="text-gray-300 text-sm pr-3">
            {OwnProfile ? "Edit" : "2.5km"}
          </span>
        </div>

        {/* User Information Overlay */}
        <div className="w-full h-full bg-gradient-to-t from-fuchsia-800 via-transparent to-transparent p-4 text-white md:p-6 flex flex-col gap-3 items-center justify-center">
          <h1 className="text-3xl text-center mt-auto aldrich-regular">
            {sampleUser.name}, {sampleUser.age}
          </h1>
          <p className="text-md text-gray-300 text-center tracking-widest uppercase aldrich-regular">
            {sampleUser.location}
          </p>
          {OwnProfile ? (
            <MatchButton progress={75} text="Profile Complete" />
          ) : (
            <MatchButton />
          )}
        </div>

        {/* Combined Vertical Lines */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
          <div
            onClick={() => handleLineClick(1)}
            className={`w-1 h-10 rounded-full cursor-pointer ${
              activeLine === 1 ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
          <div
            onClick={() => handleLineClick(2)}
            className={`w-1 h-10 rounded-full cursor-pointer ${
              activeLine === 2 ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        </div>

        {/* User Details Section */}
        <div className="absolute w-full h-full bg-white shadow-lg rounded-t-3xl">
          {/* Horizontal Line at the Top Center */}
          <div className="w-full">
            <div className="w-16 h-1 bg-gray-200 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="px-4">
            <p className="text-base mt-1 ">
              <h4 className="left-0 chakra-petch-medium text-gray-400">
                About
              </h4>
              <p className="chakra-petch-medium pt-2">{sampleUser.about}</p>
            </p>
          </div>
          <div className="px-4">
            <h4 className="left-0 chakra-petch-medium text-gray-400 mb-2">
              Interest
            </h4>
            <div className="flex flex-wrap gap-2 mb-2">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-white text-black chakra-petch-medium left-0 px-2 py-1 rounded-full border border-gray-400 flex items-center justify-center"
                >
                  <span className="mr-2 text-xl">{interest.emoji}</span>
                  {interest.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {!UserProfile && (
        <nav className="fixed bottom-4 z-12 left-1/2 transform -translate-x-1/2 w-[calc(100%-46px)] xl:w-[728px] bg-white border-t border-gray-200 rounded-full shadow-lg">
          <div className="flex justify-around p-4">
            <Link to="./" className="text-gray-400">
              <button className="rounded-full hover:bg-gray-100 flex items-center justify-center text-white bg-rose-300 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="white"
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  strokeWidth="0"
                >
                  <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>
                </svg>
              </button>
            </Link>
            <Link to="./" className="text-gray-400">
              <button className="rounded-full hover:bg-gray-100 flex items-center justify-center text-white bg-purple-950 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </Link>
            <Link to="./" className="text-gray-400">
              <button className="rounded-full hover:bg-gray-100 flex items-center justify-center text-white bg-rose-400 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </Link>
            <Link to="./" className="text-gray-400">
              <button className="rounded-full hover:bg-gray-100 flex items-center justify-center text-white bg-purple-600 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default UserProfile;
