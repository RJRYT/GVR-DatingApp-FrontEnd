import React from "react";
import { IoArrowBack, IoAdd } from "react-icons/io5";
import Navbar from "../Dashboard/Navbar";

const CreateGroup = () => {
  const members = [
    { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Steve Brown", avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "Sweety Darwin", avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Christina Smithy", avatar: "https://i.pravatar.cc/150?img=4" },
    { name: "Rony Brownn", avatar: "https://i.pravatar.cc/150?img=5" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-aldrich">
      <div className="flex-grow bg-white p-3 sm:p-4">
        <div className="relative">
          <header className="flex items-center justify-between p-4 bg-white">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-fuchsia-800">
                BuddyPair
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                className="h-10 w-10 rounded-full p-2 block border border-fuchsia-300"
                aria-label="Toggle menu"
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
                {/* </a> */}
              </button>
            </div>
          </header>
        </div>
        <header className="flex items-center">
          <IoArrowBack className="text-fuchsia-950 text-2xl" />
          <h1 className="text-xl font-bold text-center absolute left-0 right-0 mx-auto">
            Create Group
          </h1>
        </header>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Group Title"
            className="block text-lg font-bold w-full px-3 py-2 text-gray-700 placeholder-gray-700 focus:outline-none"
          />
          <textarea
            placeholder="Group Description"
            className="block text-sm font-bold w-full px-3 py-2 text-gray-500 placeholder-gray-500 focus:outline-none"
          ></textarea>
          <h1 className="text-4xl px-2 font-semibold text-gray-900">
            Make a Group call with friend's
          </h1>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-bold text-gray-700">Group Admin</h2>
          <div className="flex items-center mt-2">
            <img
              className="w-12 h-12 rounded-full"
              src="https://i.imgur.com/sjLMNDM.png"
              alt="Admin Name"
            />
            <div className="ml-4">
              <p className="text-sm font-bold">Stone Stellar</p>
              <p className="text-xs text-gray-500">Group Admin</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-bold text-gray-700 mb-2">
            Invited Members
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">
            {members.map((member) => (
              <div
                key={member.name}
                className="relative flex flex-col items-center"
              >
                <img
                  className="w-13 h-13 md:w-20 md:h-20 rounded-full"
                  src={member.avatar}
                  alt={member.name}
                />
                <IoAdd className="absolute bottom-1 right-1 md:bottom-2 md:right-2 block h-8 w-8 md:h-10 md:w-10 bg-white rounded-full text-fuchsia-950" />
              </div>
            ))}
            <div className="flex justify-center items-center">
              <button className="flex justify-center items-center w-14 h-14 rounded-full border-2 border-dashed border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="mt-7 w-4/5 bg-fuchsia-950 text-white py-3 rounded-2xl shadow-lg hover:bg-fuchsia-800 mb-16">
            Create
          </button>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default CreateGroup;
