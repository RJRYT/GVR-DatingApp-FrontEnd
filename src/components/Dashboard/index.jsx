import React, { useState } from "react";
import Header from "./Header";
import Story from "./Story";
import Tab from "./Tab";
import ProfileGrid from "./ProfileGrid";
import Interested from "./Modal/Gender";
import HeaderNav from "./Header/headerNav/HeaderNav";
import NotificationsContainer from "./Notifications/NotificationContainer";

function HomePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };  
  const toggleNotificationModal = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  return (
    <>
      <div className='mx-auto'>
        <Interested />
      <Header isModalVisible={isModalVisible} toggleModal={toggleModal} toggleNotificationModal={toggleNotificationModal} />
        <Story />
        <div className="p-[25px]">
          <Tab />
          <ProfileGrid />
        </div>
      </div>
      {isModalVisible && <HeaderNav toggleModal={toggleModal} />}
      {isNotificationVisible && <NotificationsContainer toggleNotificationModal={toggleNotificationModal} />}
    </>
  );
}

export default HomePage;
