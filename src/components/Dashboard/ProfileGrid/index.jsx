import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import axiosInstance from "../../../Instance/Axios";

const ProfileGrid = ({ activeTab }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`/matches/filtered/?filter=${activeTab}`);
        if (res.data.success) {
          setUsers(res.data.matches);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [activeTab]);

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {Array.isArray(users) && users.length > 0 ? (
        users.map((profile, index) => (
          <Link key={index} to={`/dashboard/profile/${profile._id}`} >
            <ProfileCard profile={profile} />
          </Link>
        ))
      ) : (
        <p className="flex items-center justify-center px-5 py-16 text-lg">No profiles found</p>
      )}
    </div>
  );
};

export default ProfileGrid;
