import React from "react";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import {
  IoMdCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { Link } from "react-router-dom";
const Notification = ({ notification, onClose, onClick }) => {
  const iconColor = {
    success: "#48B16E",
    alert: "#FBBF24",
    error: "#FB3836",
  };

  const Icon = ({ type }) => {
    switch (type) {
      case ("success", "FriendRequest"):
        return (
          <IoMdCheckmarkCircleOutline
            className="text-2xl mr-2"
            style={{ color: iconColor.success }}
          />
        );
      case ("alert", "requestAccepted", "requestDeclined"):
        return (
          <AiOutlineInfoCircle
            className="text-2xl mr-2"
            style={{ color: iconColor.alert }}
          />
        );
      case "error":
        return (
          <IoIosCloseCircleOutline
            className="text-2xl mr-2"
            style={{ color: iconColor.error }}
          />
        );
      default:
        return null;
    }
  };

  const Title = ({ type }) => {
    switch (type) {
      case "FriendRequest":
        return <span>New Friend Request</span>;
      case "requestAccepted":
        return <span>Request accepted</span>;
      case "requestDeclined":
        return <span>Request Declined</span>;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-[30px] shadow-lg p-7 ml-4 mr-4 mb-4 bg-fuchsia-800 text-white relative">
      <div className="flex flex-row">
        <div className="flex-none">
          <Icon type={notification.type} />
        </div>
        <div className="flex-1">
          <Link onClick={onClick} to={"./"}>
            <strong
              className="font-bold"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <Title type={notification.type} />
            </strong>
            <p style={{ fontFamily: "Roboto, sans-serif" }}>
              {notification.message}
            </p>
          </Link>
          <small style={{ fontFamily: "Roboto, sans-serif" }}>
            {notification.read ? "read " : " "}
            {notification.timestamp}
          </small>
          <button onClick={onClose} className="absolute top-4 right-4 text-lg">
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
