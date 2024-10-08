import React from "react";
import {
  TopContainer,
  MiddleContainer,
  BottomContainer,
} from "../../components/Admin";

function MainScreen () {
  return (
    <div className="w-[calc(100vw-4rem)] h-screen  overflow-auto ">
      <div className="w-full h-full  flex flex-col items-center">
        <TopContainer />
        <MiddleContainer />
      </div>
      <div className="w-full h-[60%] mt-10">
        <BottomContainer />
      </div>
    </div>
  );
}

export default MainScreen;