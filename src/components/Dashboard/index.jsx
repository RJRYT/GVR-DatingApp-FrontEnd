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
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../Loading/LoadingOverlay";

function HomePage() {
  const {authState} = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState(null);
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

  useEffect(() => {
    apiInstance.get("/matches/preferences")
      .then((res) => {
        if (!res.data.success) {
          navigate("/dashboard/preferences/?redirect=/dashboard")
        } else {
          setPreferences(res.data.preferences);
        }
      })
      .catch(err => console.error("API Error:", err))
      .finally(()=>setLoading(false));
  }, []);

  return (
    <>
      {loading && <LoadingOverlay />}
      <div className='mx-auto'>
        {preferences && !preferences?.Gender && !loading && <Interested preferences={preferences} />}
        <Header
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          toggleNotificationModal={toggleNotificationModal}
          toggleProfileModal={toggleProfileModal}
          user={authState?.user || null}
        />
        <Story />
        <div className="p-[25px]">
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          {!loading && <ProfileGrid activeTab={activeTab} />}
        </div>
      </div>
      {isModalVisible && <HeaderNav toggleModal={toggleModal} />}
      {isNotificationVisible && <NotificationsContainer toggleNotificationModal={toggleNotificationModal} />}
      {isProfileModalVisible && <ProfileSidebar toggleProfileModal={toggleProfileModal} user={authState?.user || null}/>}
    </>
  );
}

export default HomePage;
