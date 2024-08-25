import React, { useState, useContext, useEffect, useCallback } from "react";
import Navbar from "../../Dashboard/Navbar";
import { CiSearch } from "react-icons/ci";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Loading from "../../Loading";
import AccessDenied from "../../AccessDenied";
import axios from "../../../Instance/Axios";
import { AuthContext } from "../../../contexts/AuthContext";

const Reject = () => {
  // State to hold the users
  const [users, setUsers] = useState(null);
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(true);

  // Function to sort users alphabetically by name
  const sortUsersAlphabetically = (users) => {
    return [...users].sort((a, b) =>
      a.recipient.username.localeCompare(b.recipient.username)
    );
  };

  // Split users into groups based on their first letter
  const SplitUsersByFirstName = (users) => {
    return users.reduce((groups, user) => {
      const firstLetter = user.recipient.username.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(user);
      return groups;
    }, {});
  };

  const fetchSendRequests = useCallback(async () => {
    try {
      const response = await axios.get("/users/friends/?type=declined");
      if (response.data.success) {
        const sortedUsers = sortUsersAlphabetically(response.data.declined);
        const splitedUsers = SplitUsersByFirstName(sortedUsers);
        setUsers(splitedUsers);
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
      <div className="items-center justify-center min-h-screen bg-fuchsia-950 ">
        <div className="p-6 flex items-center">
          <div className="w-14 h-14 bg-fuchsia-400 rounded-full flex items-center justify-center border-2 border-white">
            <CiSearch className="text-white text-3xl" />
          </div>
          <h3 className="flex-grow text-center text-white text-2xl font-bold aldrich-regular">
            Reject
          </h3>
        </div>

        <div className="bg-white rounded-t-3xl min-h-screen p-6 h-96 mt-4">
          {/* Horizontal Line at the Top Center */}
          <div className="absolute  left-1/2 transform -translate-x-1/2 w-full">
            <div className="w-16 h-1 bg-gray-200 mx-auto mt-0 rounded-full"></div>
          </div>

          {users ? (
            <div className="pb-16">
              {Object.keys(users).map((letter) => (
                <div key={letter} className="pb-10">
                  <h2 className="text-2xl font-semibold  chakra-petch-medium mt-3 mb-2">
                    {letter}
                  </h2>
                  <ul className="list-none p-0 mb-1">
                    {users[letter].map((user) => (
                      <li key={user._id} className="flex items-center">
                        <img
                          src={user.recipient.profilePic.url}
                          alt={user.recipient.username}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <span className="text-lg font-semibold">
                            {user.recipient.username}
                          </span>
                          <p className="text-sm text-gray-600 mt-1 chakra-petch-light">
                            ...
                          </p>
                        </div>
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

export default Reject;
