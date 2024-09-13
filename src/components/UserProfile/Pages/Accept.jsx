import React, { useState, useContext, useEffect, useCallback } from "react";
import Navbar from "../../Dashboard/Navbar";
import { CiSearch } from "react-icons/ci";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Loading from "../../Loading";
import AccessDenied from "../../AccessDenied";
import axios from "../../../Instance/Axios";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Accept = () => {
  // State to hold the users
  const [users, setUsers] = useState(null);
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(true);

  const fetchSendRequests = useCallback(async () => {
    try {
      const response = await axios.get("/users/friends/?type=accepted");
      if (response.data.success) {
        setUsers(response.data.accepted);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingOverlay(false);
    }
  }, []);

  useEffect(() => {
    fetchSendRequests();
  }, [fetchSendRequests]);

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      {loadingOverlay && <LoadingOverlay />}
      <div className="items-center justify-center min-h-screen bg-fuchsia-950">
        <div className="p-6 flex items-center">
          <div className="w-10 h-10 p-1 bg-fuchsia-400 rounded-full flex items-center justify-center border-2 border-white">
            <CiSearch className="text-white text-2xl" />
          </div>
          <h3 className="flex-grow text-center text-white text-2xl font-bold aldrich-regular">
            Accept
          </h3>
        </div>

        <div className="bg-white rounded-t-3xl min-h-screen p-6 mt-4 relative">
          {/* Horizontal Line at the Top Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
            <div className="w-16 h-1 bg-gray-200 mx-auto mt-0 rounded-full"></div>
          </div>

          {users ? (
            <div className="pb-16">
              {users.map((user) => (
                <div
                  key={user.recipient.id}
                  className="flex items-center py-4 border-b border-gray-100 hover:bg-gray-200 hover:bg-opacity-50"
                >
                  <Link to={`/dashboard/profile/${user.recipient.id}`}>
                    <img
                      className="w-14 h-14 rounded-full object-cover mr-4"
                      src={user.recipient.profilePic.url}
                      alt={user.recipient.username}
                    />
                  </Link>
                  <div className="ml-3 flex-grow ">
                    <p className="text-2xl text-black">
                      {user.recipient.username}
                    </p>
                    {/* <div className="flex items-center  text-gray-600 ">
                      {contact.callType === "audio" ? (
                        <svg
                          class="h-4 w-4 text-green-300 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                          />
                        </svg>
                      ) : (
                        <svg
                          class="h-4 w-4  text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                          />
                        </svg>
                      )}
                      <div className="p-1.5">{contact.time}</div>
                    </div> */}
                    <div className="flex items-center text-gray-600">
                      <svg
                        class="h-4 w-4 text-green-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                        />
                      </svg>
                      <div className="p-1.5">...</div>
                    </div>
                  </div>
                  <div className="flex space-x-7">
                    <svg
                      className="h-7 w-7 text-gray-400"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                    <svg
                      className="h-7 w-7 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="p-6 text-center flex items-center justify-center text-xl text-gray-700">
              Nothing to show
            </p>
          )}
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Accept;
