import React from "react";
import { useNavigate} from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
  return (
    <div className="flex items-center aldrich-regular justify-center h-svh bg-fuchsia-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-200 mb-4">404</h1>
        <h4 className="text-2xl text-white mb-2">Ooops...</h4>
        <p className="text-lg text-white mb-6">We cannot find this page</p>
        <button
          className="flex items-center mx-auto justify-center border-2 border-white text-white hover:text-slate-300 px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          <span>Let's try something different</span>
          <svg
            className="w-6 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
