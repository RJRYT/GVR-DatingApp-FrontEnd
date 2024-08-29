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
    apiRoute: {
      get: "/users/friends/pending",
      accept: "",
      decline: "",
    },
    responsePath: "pending",
    dataIsOnSubProperty: "sender",
  },
  shortlisted: {
    title: "Shortlisted",
    apiRoute: {
      get: "/users/shortlist",
      accept: "",
      decline: "",
    },
    responsePath: "shortlist",
    dataIsOnSubProperty: false,
  },
  contacted: {
    title: "Contacted",
    apiRoute: {
      get: "/users/friends/?type=declined",
      accept: "",
      decline: "",
    },
    responsePath: "declined",
    dataIsOnSubProperty: "recipient",
  },
  shortlistedBy: {
    title: "Shortlisted by",
    apiRoute: {
      get: "/users/shortlist/by",
      accept: "",
      decline: "",
    },
    responsePath: "shortlist",
    dataIsOnSubProperty: false,
  },
  myProfileView: {
    title: "Viewed my profile",
    apiRoute: {
      get: "/users/profile/views",
      accept: "",
      decline: "",
    },
    responsePath: "viewers",
    dataIsOnSubProperty: false,
  },
};

const Received = ({ page }) => {
  // State to hold the users
  const [currentPage, setCurrentPage] = useState(null);
  const [users, setUsers] = useState(null);
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(true);

  useEffect(() => {
    if (pageDefinition[page]) {
      setCurrentPage(pageDefinition[page]);
    }
  }, [page]);

  const HandleApproveClick = async (request) => {
    if (!currentPage) return;
    setLoadingOverlay(true);
    try {
      const response = await axios.put(
        `/users/friends/request/${request._id}/cancel`
      );
      if (response.data.success) {
        toast.success("Request cancelled");
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

  const HandleRejectClick = async (request) => {
    if (!currentPage) return;
    setLoadingOverlay(true);
    try {
      const response = await axios.put(
        `/users/friends/request/${request._id}/cancel`
      );
      if (response.data.success) {
        toast.success("Request cancelled");
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
      const response = await axios.get(currentPage.apiRoute.get);
      if (response.data.success) {
        let structuredUsers = {};
        if (currentPage.dataIsOnSubProperty) {
          structuredUsers.id = response.data[currentPage.responsePath]._id;
          structuredUsers.datalist =
            response.data[currentPage.responsePath][dataIsOnSubProperty];
        } else {
          structuredUsers.datalist = response.data[currentPage.responsePath];
        }
        const sortedUsers = sortUsersAlphabetically(structuredUsers);
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
  }, [fetchRequests, currentPage]);

  // Function to sort users alphabetically by name
  const sortUsersAlphabetically = (users) => {
    return [...users].sort((a, b) =>
      a.datalist.username.localeCompare(b.datalist.username)
    );
  };

  // Split users into groups based on their first letter
  const SplitUsersByFirstName = (users) => {
    return users.reduce((groups, user) => {
      const firstLetter = user.datalist.username.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(user);
      return groups;
    }, {});
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

          <div>
            {Object.keys(users).map((letter) => (
              <div key={letter} className="pb-10">
                <h2 className="text-2xl font-semibold chakra-petch-medium mt-3 mb-2">
                  {letter}
                </h2>
                <ul className="list-none p-0 mb-1">
                  {users[letter].map((user, index) => (
                    <li key={index} className="flex items-center relative mb-4">
                      <img
                        src={user.datalist.profilePic.url}
                        alt={user.datalist.username}
                        className="w-20 h-20 rounded-full object-cover mr-4"
                      />
                      <div className="flex-grow">
                        <span className="text-lg font-semibold">
                          {user.datalist.username}
                        </span>
                        <p className="text-sm text-gray-600 mt-1 chakra-petch-light">
                          ...
                        </p>
                      </div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex gap-2">
                        <FaRegHeart
                          onClick={() => {
                            HandleApproveClick(user);
                          }}
                          className="cursor-pointer h-10 text-gray-500 w-20"
                        />
                        <RiCloseLine
                          onClick={() => {
                            HandleRejectClick(user);
                          }}
                          className="cursor-pointer h-10 text-gray-500 w-20"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Received;
