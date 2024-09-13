import React from "react";
import {
  TopBar,
  TopContainer,
  MiddleContainer,
  BottomContainer,
} from "../../components/Admin";

function MainScreen() {
  return (
    <div className="w-[calc(100vw-4rem)] h-full  overflow-auto ">
      <div className="w-full h-24 ">
        <TopBar isSearchAvail={true} />
      </div>
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