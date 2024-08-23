import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import axiosInstance from "../../../Instance/Axios";
import { AuthContext } from "../../../contexts/AuthContext";

const ProfileGrid = ({ activeTab }) => {
  const [users, setUsers] = useState([]);
  const { authState } = useContext(AuthContext);
  
  const userLocation = authState.user.location; 
  const userQualification = authState.user.qualifications;
  console.log("userQualification",userQualification)
  const userInterests = authState.user.interests; // Ensure this matches exactly with your data key
  console.log("userInterests" ,userInterests)
  useEffect(() => {
    axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/users/users`)
      .then(response => {
        if (Array.isArray(response.data)) {
          let filteredUsers = [];
          console.log("Active Tab:", activeTab);

          // Filter based on the activeTab value
          if (activeTab === "nearby") {
            filteredUsers = response.data.filter(profile => profile.location === userLocation);
          } else if (activeTab === "qualification") {
            filteredUsers = response.data.filter(profile => profile.qualification === userQualification);
          } else if (activeTab === "interests") {
            filteredUsers = response.data.filter(profile => profile.interests === userInterests);
          }

          console.log("Filtered Users:", filteredUsers);
          setUsers(filteredUsers);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, [userLocation, activeTab, userInterests, userQualification]);

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
