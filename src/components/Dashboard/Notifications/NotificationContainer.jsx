import React, { useEffect } from "react";
import Notification from "./Notification";
import apiInstance from "../../../Instance/Axios";

const NotificationsContainer = ({ toggleNotificationModal, notifications }) => {
  const handleClose = async (notification) => {
    await apiInstance.post("/users/notification/delete", {
      notificationId: notification._id,
    }).catch(err=>{console.log(err)});
  };

  const handleClick = async (notification) => {
    await apiInstance.post("/users/notification/markread", {
      notificationId: notification._id,
    }).catch(err=>{console.log(err)});
  };

  useEffect(() => {
    if (notifications.length === 0) {
      toggleNotificationModal();
    }
  }, [notifications, toggleNotificationModal]);

  return (
    <>
      <div className="absolute z-20 top-[20px] p-6 rounded-lg text-white max-w-full w-full h-dvh hide-scrollbar overflow-x-auto">
        {notifications.map((notification) => (
          <Notification
            key={notification._id}
            notification={notification}
            onClose={() => handleClose(notification)}
            onClick={() => handleClick(notification)}
          />
        ))}
      </div>

      <div
        onClick={toggleNotificationModal}
        className={`absolute top-0 left-0 right-0 bottom-0 bg-transparent  backdrop-blur-sm`}
      ></div>
    </>
  );
};

export default NotificationsContainer;
