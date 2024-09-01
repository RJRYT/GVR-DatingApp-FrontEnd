import React from "react";
import { FaArrowLeft, FaPhone } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";

const Header = ({ user, typing }) => {
  return (
    <div className="bg-fuchsia-950 text-white rounded-none p-4 flex justify-between items-center">
      <div className="flex items-center gap-4 mr-auto">
        <Link to={"/dashboard/messages"}>
          <FaArrowLeft className="text-xl" />
        </Link>
        <img
          src={user?.profilePic.url}
          alt={user?.username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1 className="flex gap-2 items-center text-xl">
            {(user && user.isOnline) ? <span className="w-2 h-2 bg-green-500 rounded-full"></span> : ""}{user ? user.username : ""}
        </h1>
        {(user && !user.isOnline) ? (
          <p className="text-sm">
           Last active: <LastActiveTimeStamp timestamp={user.lastActive} />
          </p>
        ) : ""}
        {(user && typing) ? (
          <p className="text-sm">
           Typing...
          </p>
        ) : ""}
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <FaPhone className="text-white text-xl" />
        <BsCameraVideoFill className="text-white text-xl" />
      </div>
    </div>
  );
};

const formatTimestamp = (timestamp) => {
  const now = moment();
  const date = moment(timestamp);

  // Show "just now" if within the last 30 seconds
  if (now.diff(date, "seconds") < 30) return "just now";

  // Show "x seconds/minutes ago" if within the last hour
  if (now.diff(date, "hours") < 1) return date.fromNow();

  // Show "x:xx AM/PM" if today
  if (now.isSame(date, "day")) return date.format("h:mm A");

  // Show "Yesterday"
  if (now.diff(date, "days") === 1) return "Yesterday";

  // Show "Month Day" if this year
  if (now.isSame(date, "year")) return date.format("MMMM Do");

  // Show "Month Day, Year" otherwise
  return date.format("MMMM Do, YYYY");
};

const LastActiveTimeStamp = ({ timestamp }) => {
  return <span>{formatTimestamp(timestamp)}</span>;
};

export default Header;
