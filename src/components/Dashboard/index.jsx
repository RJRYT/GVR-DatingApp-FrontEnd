import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AccessDenied from "../AccessDenied";
import Loading from "../Loading";
import Header from "./Header";
import Story from "./Story";
import Tab from "./Tab";

function HomePage() {
  const { authState, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  //if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      <Header />
      <Story />
      <Tab />
    </>
  );
}

export default HomePage;
