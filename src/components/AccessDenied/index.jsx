import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function AccessDenied() {
  const { authState } = useContext(AuthContext);

  const handleGoBackClick = () =>{
    if(!authState.isAuthenticated) return window.location.replace("/login");
    window.history.back()
  };

  return (
    <div className="flex items-center aldrich-regular justify-center h-svh bg-fuchsia-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-200 mb-4">403</h1>
        <h4 className="text-2xl text-white mb-2">Access Denied</h4>
        <p className="text-lg text-white mb-6">
          Sorry, You don't have access to this page
        </p>
        <button
          className="flex items-center mx-auto justify-center border-2 border-white text-white hover:text-slate-300 px-4 py-2 rounded"
          onClick={() => window.location.href = "/login"}
          
        >
          <span>Go back to previous page</span>
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

export default AccessDenied;
