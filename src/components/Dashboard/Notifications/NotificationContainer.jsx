import React, { useEffect, useState } from 'react';
import Notification from './Notification';


const NotificationsContainer = ({toggleNotificationModal}) => {

  const initialNotifications = [
    { id: 1, type: 'news', title: 'News Title', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae ultrices in sed. Feugiat metus amet, id sed volutpat enim sed. Cras vel vitae.', time: 'Today 10:30PM' },
    { id: 2, type: 'success', title: 'Successfully Message', message: '', time: 'Today 10:30PM' },
    { id: 3, type: 'alert', title: 'Alert Message', message: '', time: 'Today 10:30PM' },
    { id: 4, type: 'error', title: 'Error Message', message: '', time: 'Today 10:30PM' },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const handleClose = (id) => {
    const newNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(newNotifications);
  };

  useEffect(() => {
    if (notifications.length === 0) {
      toggleNotificationModal()
      console.log("no more notifications");
    }
  }, [notifications]);


  return (
<>
      <div className="absolute z-20 top-[20px] p-6 rounded-lg text-white max-w-full w-full">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          time={notification.time}
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
