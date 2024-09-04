import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Story from "./Story";
import Tab from "./Tab";
import ProfileGrid from "./ProfileGrid";
import Interested from "./Modal/Gender";
import HeaderNav from "./Header/headerNav/HeaderNav";
import NotificationsContainer from "./Notifications/NotificationContainer";
import ProfileSidebar from "./Header/ProfileSidebar";
import apiInstance from "../../Instance/Axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useSocket } from "../../contexts/SocketContext";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../Loading/LoadingOverlay";

function HomePage() {
  const {authState} = useContext(AuthContext);
  const socket = useSocket();
  const [notifications, setNotifications] = useState(
    authState.user.notifications || []
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState({});
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("nearby");
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const toggleNotificationModal = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };
  const toggleProfileModal = () => {
    setIsProfileModalVisible(!isProfileModalVisible);
  };

  useEffect(()=>{
    if(!socket) return;
    socket.on("newNotification", (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });

    socket.on("notificationRead", ({ notificationId }) => {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );
    });

    socket.on("notificationDeleted", ({ notificationId }) => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter(
          (notification) => notification._id !== notificationId
        )
      );
    });

    return () => {
      socket.off("newNotification");
      socket.off("notificationRead");
      socket.off("notificationDeleted");
    };
  },[socket])

  useEffect(() => {
    apiInstance.get("/matches/preferences")
      .then((res) => {
        if (res.data.success) {
          setPreferences(res.data.preferences);
        }
      })
      .catch(err => console.error("API Error:", err))
      .finally(()=>setLoading(false));
  }, []);

  return (
    <>
      {loading && <LoadingOverlay />}
      <div className="mx-auto">
        {preferences && !preferences?.Gender && !loading && (
          <Interested preferences={preferences} />
        )}
        <Header
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          toggleNotificationModal={toggleNotificationModal}
          toggleProfileModal={toggleProfileModal}
          user={authState?.user || null}
          notifications={notifications}
        />
        <Story />
        <div className="p-[25px]">
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          {!loading && <ProfileGrid activeTab={activeTab} />}
        </div>
      </div>
      {isModalVisible && <HeaderNav toggleModal={toggleModal} />}
      {isNotificationVisible && (
        <NotificationsContainer
          toggleNotificationModal={toggleNotificationModal}
          notifications={notifications}
        />
      )}
      {isProfileModalVisible && (
        <ProfileSidebar
          toggleProfileModal={toggleProfileModal}
          user={authState?.user || null}
        />
      )}
    </>
  );
}

export default HomePage;
