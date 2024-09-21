import React from "react";
import  BarChart  from "../../charts/bar-chart/BarChart";
import { Settings } from "lucide-react";
import { BlockedUsersCard } from "../../index";

function BottomContainer() {
  return (
    <div className="w-full h-full  grid place-items-center">
      <div className="w-[90%]  h-full flex gap-5 items-center justify-start">
        <div className="w-[72%] h-[90%] bg-white rounded-xl flex flex-col items-center">
          <div className="w-[90%] h-20  flex items-center justify-between">
            <h1 className="text-2xl font-bold">Income & Expenses</h1>
            <Settings className="cursor-pointer" />
          </div>
          <div className="w-4/5 h-[70%] grid place-items-center">
            <BarChart />
          </div>
          <div className="w-4/5 flex items-center justify-evenly">
            <div className="text-center font-thin">
              <h1>$75,000</h1>
              <p className="text-xs opacity-65">Income</p>
            </div>
            <div className="text-center font-thin">
              <h1>$45,000</h1>
              <p className="text-xs opacity-65">Expenses</p>
            </div>
            <div className="text-center font-thin">
              <h1>$50,000</h1>
              <p className="text-xs opacity-65">Profit</p>
            </div>
          </div>
          <div>
            <p className="text-xs opacity-55 p-2">
              click here to get more details
            </p>
          </div>
        </div>
        <div className="w-[25%] h-[90%]  ">
          <div className="w-[90%] h-[4.5rem]  flex items-center justify-between">
            <h1 className=" font-bold">Blocked users</h1>
            <p className="text-sm opacity-60">see more</p>
          </div>
          <div className="w-full h-4/5 bg-white p-3 grid gap-2 rounded-xl overflow-auto">
            {Array.from({ length: 5 }).map((data, index) => (
              <BlockedUsersCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomContainer;