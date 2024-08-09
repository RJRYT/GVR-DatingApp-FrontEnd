import React from "react";

const HeaderNav = ({ toggleModal }) => {
  return (
    <>
      <div className="absolute z-[100] top-[20px] left-4 bg-purple-900 bg-opacity-80 p-6 rounded-lg shadow-lg text-center text-white w-64 h-96 max-w-full">
        <button
          onClick={toggleModal}
          className="absolute top-4 left-4 bg-white rounded-full"
          aria-label="Close menu"
        >
          <svg
            className="h-3 w-3 text-fuchsia-800"
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

        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-white block py-4 px-4 border-b border-b-[rgba(255,255,255,0.4)] hover:rounded-md hover:border-[rgba(255,255,255,0.0)] hover:bg-[rgba(255,255,255,0.09)] transition-colors duration-200"
            >
              Dating
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white block py-4 px-4 border-b border-b-[rgba(255,255,255,0.4)] hover:rounded-md hover:border-[rgba(255,255,255,0.0)] hover:bg-[rgba(255,255,255,0.09)] transition-colors duration-200"
            >
              Matrimony
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white block py-4 px-4 border-b border-b-[rgba(255,255,255,0.4)] hover:rounded-md hover:border-[rgba(255,255,255,0.0)] hover:bg-[rgba(255,255,255,0.09)] transition-colors duration-200"
            >
              E-commerce
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white block py-4 px-4 border-b border-b-[rgba(255,255,255,0.4)] hover:rounded-md hover:border-[rgba(255,255,255,0.0)] hover:bg-[rgba(255,255,255,0.09)] transition-colors duration-200"
            >
              Study Abroad
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white block py-4 px-4 border-b border-b-[rgba(255,255,255,0.4)] hover:rounded-md hover:border-[rgba(255,255,255,0.0)] hover:bg-[rgba(255,255,255,0.09)] transition-colors duration-200"
            >
              Job Portal
            </a>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleModal}
        className={`absolute top-0 left-0 right-0 bottom-0 bg-transparent ${toggleModal ? "backdrop-blur-sm" : ""}`}
      ></div>
    </>
  );
};

export default HeaderNav;
