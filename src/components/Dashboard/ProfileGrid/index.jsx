import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import axiosInstance from "../../../Instance/Axios";
import { AuthContext } from "../../../contexts/AuthContext";

const ProfileGrid = ({ activeTab }) => {
  const [users, setUsers] = useState([]);
  const { authState } = useContext(AuthContext);
  
  const userLocation = authState.user.location; 
  const userQualifications = authState.user.qualification;
  const userInterests = authState.user.interests;
  const userId = authState.user.id; // Unique identifier for the current user

  useEffect(() => {
    axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/users/users`)
      .then(response => {
        if (Array.isArray(response.data)) {
          let filteredUsers = [];

          // Filter based on the activeTab value and exclude the current user
          if (activeTab === "nearby") {
            filteredUsers = response.data.filter(profile => profile.location === userLocation && profile.id !== userId);
          } else if (activeTab === "qualification") {
            filteredUsers = response.data.filter(profile => 
              profile.id !== userId && 
              profile.qualification.some(q => 
                userQualifications.some(uq => uq.value === q.value)
              )
            );
          } else if (activeTab === "interests") {
            filteredUsers = response.data.filter(profile => 
              profile.id !== userId && 
              profile.interests.some(i => 
                userInterests.some(ui => ui.value === i.value)
              )
            );
          }

          setUsers(filteredUsers);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, [userLocation, activeTab, userInterests, userQualifications, userId]);

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {Array.isArray(users) && users.length > 0 ? (
        users.map((profile, index) => (
          <Link key={index} to={`/dashboard/profile/${profile.id}`} >
            <ProfileCard profile={profile} />
          </Link>
        ))
      ) : (
        <p>No profiles found</p>
      )}
    </div>
  );
};

export default ProfileGrid;
