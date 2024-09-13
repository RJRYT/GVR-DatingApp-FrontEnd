import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import moment from "moment";

const Header = ({ user, typing }) => {
  return (
    <div className="flex items-center justify-between p-6">
      <Link
        className="border w-9 h-9 rounded-full text-white flex items-center justify-center"
        to={"/dashboard/messages"}
      >
        <FaArrowLeft className="text-xl" />
      </Link>
      <div className="flex flex-col gap-1 items-center text-white text-xl font-medium aldrich-regular text-center">
        <div className="flex justify-center items-center gap-2">
          {user && user.isOnline ? (
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          ) : (
            ""
          )}
          <h3>
            <Link to={`/dashboard/profile/${user?.id}`}>{user ? user.username : ""}</Link>
          </h3>
        </div>
        <div>
          {user && !user.isOnline ? (
            <p className="text-xs">
              Last active: <LastActiveTimeStamp timestamp={user.lastActive} />
            </p>
          ) : (
            ""
          )}
          {user && typing ? <p className="text-xs">typing...</p> : ""}
        </div>
      </div>
      <IoCallOutline className="h-6 w-6 text-yellow-400" />
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
  if (date.isSame(now.subtract(1, "day"), "day")) return "Yesterday";

  // Show "Month Day" if this year
  if (now.isSame(date, "year")) return date.format("MMMM Do");

  // Show "Month Day, Year" otherwise
  return date.format("MMMM Do, YYYY");
};

const LastActiveTimeStamp = ({ timestamp }) => {
  return <span>{formatTimestamp(timestamp)}</span>;
};

export default Header;
