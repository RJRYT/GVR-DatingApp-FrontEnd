import React, { useState, useContext, useEffect, useCallback } from "react";
import Navbar from "../../Dashboard/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { toast } from "react-toastify";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Loading from "../../Loading";
import AccessDenied from "../../AccessDenied";
import axios from "../../../Instance/Axios";
import { AuthContext } from "../../../contexts/AuthContext";

const pageDefinition = {
  received: {
    title: "Received",
    apiRoute: "/users/friends/pending",
    responsePath: "pending",
    dataIsOnSubProperty: "sender",
  },
  shortlisted: {
    title: "Shortlisted",
    apiRoute: "/users/shortlist",
    responsePath: "shortlist",
    dataIsOnSubProperty: false,
  },
  contacted: {
    title: "Contacted",
    apiRoute: "/users/friends/?type=declined",
    responsePath: "declined",
    dataIsOnSubProperty: "recipient",
  },
  shortlistedBy: {
    title: "Shortlisted by",
    apiRoute: "/users/shortlist/by",
    responsePath: "shortlist",
    dataIsOnSubProperty: false,
  },
  myProfileView: {
    title: "Viewed my profile",
    apiRoute: "/users/views",
    responsePath: "viewers",
    dataIsOnSubProperty: false,
  },
};

const Received = ({ page }) => {
  // State to hold the users
  const [currentPage, setCurrentPage] = useState(pageDefinition[page]);
  const [users, setUsers] = useState(null);
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(true);

  const HandleApproveClick = async (user) => {
    if (!currentPage) return;
    if (!user.reqId) return;
    setLoadingOverlay(true);
    try {
      const response = await axios.put(
        `/users/friends/request/${user.reqId}/accept`
      );
      if (response.data.success) {
        toast.success("Request accepted");
        setUsers([]);
        fetchRequests();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update");
    } finally {
      setLoadingOverlay(false);
    }
  };

  const HandleRejectClick = async (user) => {
    if (!currentPage) return;
    if (page === "received" && !user.reqId) return;
    setLoadingOverlay(true);
    try {
      let response = "";
      if (page === "received") {
        response = await axios.put(
          `/users/friends/request/${user.reqId}/decline`
        );
      } else if (page === "shortlisted") {
        response = await axios.post(`/users/shortlist`, {
          userId: user.id,
        });
      } else return;
      if (response.data.success) {
        toast.success(response.data.message);
        setUsers([]);
        fetchRequests();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update");
    } finally {
      setLoadingOverlay(false);
    }
  };

  const fetchRequests = useCallback(async () => {
    if (!currentPage) return;
    try {
      const response = await axios.get(currentPage.apiRoute);
      if (response.data.success) {
        const sortedUsers = sortUsersAlphabetically(
          response.data[currentPage.responsePath]
        );
        const splicedUsers = SplitUsersByFirstName(sortedUsers);
        setUsers(splicedUsers);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingOverlay(false);
    }
  }, []);

  useEffect(() => {
    if (currentPage) fetchRequests();
  }, [currentPage, fetchRequests]);

  // Function to sort users alphabetically by name
  const sortUsersAlphabetically = (users) => {
    if (currentPage.dataIsOnSubProperty) {
      return users.sort((a, b) =>
        a[currentPage.dataIsOnSubProperty].username.localeCompare(
          b[currentPage.dataIsOnSubProperty].username
        )
      );
    } else {
      return users.sort((a, b) => a.username.localeCompare(b.username));
    }
  };

  // Split users into groups based on their first letter
  const SplitUsersByFirstName = (users) => {
    if (currentPage.dataIsOnSubProperty) {
      return users.reduce((groups, user) => {
        const firstLetter = user[currentPage.dataIsOnSubProperty].username
          .charAt(0)
          .toUpperCase();
        if (!groups[firstLetter]) {
          groups[firstLetter] = [];
        }
        user[currentPage.dataIsOnSubProperty].reqId = user._id;
        groups[firstLetter].push(user[currentPage.dataIsOnSubProperty]);
        return groups;
      }, {});
    } else {
      return users.reduce((groups, user) => {
        const firstLetter = user.username.charAt(0).toUpperCase();
        if (!groups[firstLetter]) {
          groups[firstLetter] = [];
        }
        groups[firstLetter].push(user);
        return groups;
      }, {});
    }
  };

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      {loadingOverlay && <LoadingOverlay />}
      <div className="items-center justify-center min-h-screen bg-fuchsia-950">
        <div className="p-6 flex items-center">
          <div className="w-14 h-14 bg-fuchsia-400 rounded-full flex items-center justify-center border-2 border-white">
            <CiSearch className="text-white text-3xl" />
          </div>
          <h3 className="flex-grow text-center text-white text-2xl font-bold aldrich-regular">
            {currentPage ? currentPage.title : ""}
          </h3>
        </div>

        <div className="bg-white rounded-t-3xl min-h-screen p-6 h-96 mt-4 relative">
          {/* Horizontal Line at the Top Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
            <div className="w-16 h-1 bg-gray-200 mx-auto mt-0 rounded-full"></div>
          </div>

          {users ? (
            <div className="pb-16">
              {Object.keys(users).map((letter) => (
                <div key={letter} className="pb-10">
                  <h2 className="text-2xl font-semibold chakra-petch-medium mt-3 mb-2">
                    {letter}
                  </h2>
                  <ul className="list-none p-0 mb-1">
                    {users[letter].map((user, index) => (
                      <li
                        key={index}
                        className="flex items-center relative mb-4"
                      >
                        <img
                          src={user.profilePic.url}
                          alt={user.username}
                          className="w-20 h-20 rounded-full object-cover mr-4"
                        />
                        <div className="flex-grow">
                          <span className="text-lg font-semibold">
                            {user.username}
                          </span>
                          <p className="text-sm text-gray-600 mt-1 chakra-petch-light">
                            ...
                          </p>
                        </div>
                        {page === "received" || page === "shortlisted" ? (
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex gap-2">
                            {page === "received" ? (
                              <FaRegHeart
                                onClick={() => {
                                  HandleApproveClick(user);
                                }}
                                className="cursor-pointer h-6 text-gray-500 w-12"
                              />
                            ) : null}
                            <RiCloseLine
                              onClick={() => {
                                HandleRejectClick(user);
                              }}
                              className="cursor-pointer h-8 text-gray-500 w-12"
                            />
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="p-6 text-center flex items-center justify-center text-xl text-gray-700">
              Nothing to show
            </p>
          )}

          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Received;
