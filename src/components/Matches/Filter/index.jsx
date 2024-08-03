import React from "react";

const Filter = ({ likes = 0, connect = 0 }) => {
  return (
    <div className="flex justify-start py-5">
      <ul className="flex gap-6 mx-2">
        <li className="relative flex flex-col items-center space-y-2 max-md:w-[60px]">
          <div className="bg-pink-500 rounded-full p-0.5">
            <a
              href="#"
              className="relative bg-white rounded-full block p-1 h-[60px] w-[60px]"
            >
              <img
                className="h-full w-full rounded-full object-cover"
                src="https://i.imgur.com/sjLMNDM.png"
                alt="Profile 1"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-[55px] h-[55px] flex items-center p-4 justify-center rounded-full backdrop-blur-sm">
                <svg
                  className="h-8 w-8 text-white"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                  />
                </svg>
              </div>
            </a>
          </div>
          <span className="text-nowrap">
            Likes <span className="text-pink-500">{likes}</span>
          </span>
        </li>
        <li className="relative flex flex-col items-center space-y-2 max-md:w-[60px]">
          <div className="bg-pink-500 rounded-full p-0.5">
            <a
              href="#"
              className="relative bg-white rounded-full block p-1 h-[60px] w-[60px] "
            >
              <img
                className="h-full w-full rounded-full object-cover"
                src="https://i.imgur.com/sjLMNDM.png"
                alt="Profile 2"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-[55px] h-[55px] flex items-center p-4 justify-center rounded-full backdrop-blur-sm">
                <svg
                  className="h-8 w-8 text-white"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                  />
                </svg>
              </div>
            </a>
          </div>
          <span className="text-nowrap">
            Connect <span className="text-pink-500">{connect}</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
