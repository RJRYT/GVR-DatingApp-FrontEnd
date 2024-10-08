import React from "react";
import CountryDropdown from "./CountryDropdown";

function Topbar() {
  return (
    <div className="bg-white flex items-center justify-between p-4 ">
      <div className="ml-1 items-center">
        <CountryDropdown />
        <div className="text-3xl font-bold text-fuchsia-800 ">Discover</div>
      </div>
      <div className="flex space-x-4">
        <button className="text-purple-500">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.2"
              x="0.75"
              y="0.75"
              width="46.5"
              height="46.5"
              rx="23.25"
              stroke="#4B164C"
              stroke-width="1.5"
            />
            <circle
              cx="23.7664"
              cy="23.7669"
              r="8.98856"
              stroke="#4B164C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.0181 30.4854L33.5421 34.0002"
              stroke="#4B164C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="text-purple-500">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.2"
              x="0.75"
              y="0.75"
              width="46.5"
              height="46.5"
              rx="23.25"
              stroke="#4B164C"
              stroke-width="1.5"
            />
            <g clip-path="url(#clip0_2297_5252)">
              <path
                d="M27 22C28.6569 22 30 20.6569 30 19C30 17.3431 28.6569 16 27 16C25.3431 16 24 17.3431 24 19C24 20.6569 25.3431 22 27 22Z"
                stroke="#4B164C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 19H24"
                stroke="#4B164C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 19L32 19"
                stroke="#4B164C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 32C22.6569 32 24 30.6569 24 29C24 27.3431 22.6569 26 21 26C19.3431 26 18 27.3431 18 29C18 30.6569 19.3431 32 21 32Z"
                stroke="#4B164C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 29H18"
                stroke="#4B164C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 29L32 29"
                stroke="#4B164C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2297_5252">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(12 12)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Topbar;
