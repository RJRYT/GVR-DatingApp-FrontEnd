import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AccessDenied from "../AccessDenied";
import Loading from "../Loading";
import Header from "./Header";
import Story from "./Story";
import Tab from "./Tab";
import ProfileGrid from "./ProfileGrid";
import HeaderNav from "./Header/headerNav/HeaderNav";

function HomePage() {
  const { authState, loading } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  if (loading) return <Loading />;

  //if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      <div className={`mx-auto ${isModalVisible ? "blur-sm" : ""}`}>
        <Header isModalVisible={isModalVisible} toggleModal={toggleModal} />
        <Story />
        <div className="p-[25px]">
          <Tab />
          <ProfileGrid />
        </div>
      </div>
      {isModalVisible && <HeaderNav toggleModal={toggleModal} />}
    </>
  );
}

export default HomePage;
