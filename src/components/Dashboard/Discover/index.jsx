import React from "react";
import Topbar from "./Topbar";
import Interest from "./Interest";
import Card from "./Card";

const Discover = () => {
  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <Card />
      <Interest />
    </div>
  );
};

export default Discover;
