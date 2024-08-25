import React, { useEffect, useState } from "react";
import Notification from "./Notification";

const NotificationsContainer = ({ toggleNotificationModal }) => {
  const initialNotifications = [
    {
      id: 1,
      type: "news",
      link: "./",
      title: "News Title",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae ultrices in sed. Feugiat metus amet, id sed volutpat enim sed. Cras vel vitae.",
      time: "Today 10:30PM",
    },
    {
      id: 2,
      type: "success",
      link: "./",
      title: "Successfully Message",
      message: "",
      time: "Today 10:30PM",
    },
    {
      id: 3,
      type: "alert",
      link: "./",
      title: "Alert Message",
      message: "",
      time: "Today 10:30PM",
    },
    {
      id: 4,
      type: "error",
      link: "./",
      title: "Error Message",
      message: "",
      time: "Today 10:30PM",
    },
    {
      id: 5,
      type: "success",
      link: "/dashboard/matches/qualification",
      title: "Matches",
      message: "matches based on qualification",
      time: "Just now",
    },
    {
      id: 6,
      type: "success",
      link: "/dashboard/matches/location",
      title: "Matches",
      message: "matches based on Location",
      time: "Just now",
    },
    {
      id: 7,
      type: "success",
      link: "/dashboard/matches/designation",
      title: "Matches",
      message: "matches based on designation",
      time: "Just now",
    },
    {
      id: 8,
      type: "success",
      link: "/dashboard/matches/my",
      title: "Matches",
      message: "Your profile views",
      time: "Just now",
    },
    {
      id: 9,
      type: "alert",
      link: "/dashboard/matches/upgrade",
      title: "Matches",
      message: "Upgrade to premium to view more",
      time: "Just now",
    },
    {
      id: 10,
      type: "alert",
      link: "/dashboard/story/upgrade",
      title: "Stories",
      message: "Upgrade to premium to view more",
      time: "Just now",
    },
    {
      id: 11,
      type: "alert",
      link: "/dashboard/userprofile/upgrade",
      title: "Match profile",
      message: "Upgrade to premium to view more",
      time: "Just now",
    },
    {
      id: 12,
      type: "alert",
      link: "/dashboard/@me/privacy",
      title: "Privacy & settings",
      message: "View and change your privacy preferences",
      time: "Just now",
    },
    {
      id: 13,
      type: "alert",
      link: "/dashboard/@me/changepass",
      title: "Change password",
      message: "",
      time: "Just now",
    },
    {
      id: 14,
      type: "alert",
      link: "/dashboard/@me/filter",
      title: "Filter",
      message: "",
      time: "Just now",
    },
    {
      id: 15,
      type: "alert",
      link: "/dashboard/preferences",
      title: "Preferences",
      message: "Update your partner preferences",
      time: "Just now",
    },
    {
      id: 16,
      type: "error",
      link: "/403",
      title: "Access denied page",
      message: "",
      time: "Just now",
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const handleClose = (id) => {
    const newNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(newNotifications);
  };

  useEffect(() => {
    if (notifications.length === 0) {
      toggleNotificationModal();
      console.log("no more notifications");
    }
  }, [notifications, toggleNotificationModal]);

  return (
    <>
      <div className="absolute z-20 top-[20px] p-6 rounded-lg text-white max-w-full w-full h-dvh hide-scrollbar overflow-x-auto">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            type={notification.type}
            title={notification.title}
            message={notification.message}
            time={notification.time}
            link={notification.link}
            toggleNotificationModal={toggleNotificationModal}
            // toggleNotificationModal={toggleNotificationModal}
            onClose={() => handleClose(notification.id)}
          />
        ))}
      </div>

      <div
        onClick={toggleNotificationModal}
        className={`absolute top-0 left-0 right-0 bottom-0 bg-trasperant  backdrop-blur-sm`}
      ></div>
    </>
  );
};

export default NotificationsContainer;
