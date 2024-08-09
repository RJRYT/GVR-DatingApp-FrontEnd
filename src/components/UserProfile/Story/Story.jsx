import React from "react";

const ViewStory = () => {
  return (
    <div className="bg-white h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg relative">
        <div className="relative">
          <img
            src="https://i.postimg.cc/tC6NTnq0/medium-shot-man-indoors-23-2151038808.avif" // replace with actual image URL
            alt="Story"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center">
            <button>
              <svg
                className="h-6 w-6 mr-2 text-stone-100"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
              </svg>
            </button>
            <div className="relative">
              <img
                src="https://i.postimg.cc/tC6NTnq0/medium-shot-man-indoors-23-2151038808.avif" // replace with profile picture URL
                alt="Profile"
                className="w-14 h-14 rounded-full border-2 border-pink-400 object-cover"
              />
              <span className="absolute top-1 right-0 block w-3 h-3 rounded-full bg-green-500 border-white"></span>
            </div>
            <div className="ml-2">
              <p className="text-white text-lg font-semibold">Stone Stellar</p>
              <p className="text-green-500">Online</p>
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <p className="text-white text-3xl font-semibold text-center">
              # Tea Time
            </p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <button className="flex items-center justify-between bg-fuchsia-900 text-white px-4 py-2 rounded-lg border-2 border-fuchsia-500 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full h-10 max-w-md">
              <span className="flex-1 text-center">NEW</span>
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>

            <button className="bg-red-600 text-white w-12 h-10 rounded-full flex items-center justify-center ml-2">
              <svg
                className="h-6 w-6 text-white"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStory;
