import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="fixed bottom-4 z-12 left-1/2 transform -translate-x-1/2 w-[calc(100%-46px)] xl:w-[728px] bg-white border-t border-gray-200 rounded-full shadow-lg">
      <div className="flex justify-around p-4">
        <NavLink exact="true" to="/dashboard" className={pathname === "/dashboard" ? "bg-fuchsia-400 flex h-10 items-center justify-center p-1 rounded-full text-slate-100 w-10" : "text-fuchsia-400 flex h-10 items-center justify-center p-1 rounded-full bg-white w-10"}>
            <svg
              className="h-6 w-6"
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
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
        </NavLink>
        <NavLink exact="true" to="/dashboard/discover" className={pathname === "/dashboard/discover" ? "bg-fuchsia-400 flex h-10 items-center justify-center p-1 rounded-full text-slate-100 w-10" : "text-fuchsia-400 flex h-10 items-center justify-center p-1 rounded-full bg-white w-10"}>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
        </NavLink>
        <NavLink exact="true" to="/dashboard/matches">
          <img
            className="h-15 w-12 rounded-full"
            src="https://i.postimg.cc/xCJN7cvX/Screenshot-2024-07-31-211552.png"
            alt=""
          />
        </NavLink>
        <NavLink exact="true" to="/dashboard/groups" className={pathname === "/dashboard/groups" ? "bg-fuchsia-400 flex h-10 items-center justify-center p-1 rounded-full text-slate-100 w-10" : "text-fuchsia-400 flex h-10 items-center justify-center p-1 rounded-full bg-white w-10"}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
        </NavLink>
        <NavLink exact="true" to="/dashboard/messages" className={pathname === "/dashboard/messages" ? "bg-fuchsia-400 flex h-10 items-center justify-center p-1 rounded-full text-slate-100 w-10" : "text-fuchsia-400 flex h-10 items-center justify-center p-1 rounded-full bg-white w-10"}>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
