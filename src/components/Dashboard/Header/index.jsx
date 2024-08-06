import React from "react";
import profile from '../../../assets/story/profile1.png'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center space-x-2">
        <button className="bg-white p-2 rounded-full">
          <svg
            className="h-8 w-8 text-fuchsia-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="text-xl font-bold text-fuchsia-800">BuddyPair</div>
      </div>

      <div className="flex items-center space-x-3">
        <a
          href="#"
          className="h-10 w-10 rounded-full p-2 block border border-fuchsia-300"
        >
          <svg
            className="text-fuchsia-800"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>
        </a>
        <a href="#" className="bg-white rounded-full block p-1">
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
