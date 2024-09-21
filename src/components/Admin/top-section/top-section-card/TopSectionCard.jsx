import { Wallet } from "lucide-react";
import React from "react";

function TopSectionCard({ icon, title, rate, percentage, bgColor }) {
  return (
    <div className="w-full h-36 bg-white rounded-2xl flex items-center justify-start px-4 relative ">
      <div className="w-max">
        <div
          style={{ backgroundColor: bgColor }}
          className="w-12 h-12 text-white bg-violet-700 grid place-items-center  rounded-full"
        >
          <Wallet />
        </div>
      </div>
      <div className="w-max  h-full  px-5 grid items-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold ">{rate}</span>
          <span className=" w-max text-sm relative left-5   opacity-50">
            {title}
          </span>
        </div>
      </div>
      <div className="h-4/5 text-center truncate absolute right-3">
        <span className="text-green-600  ">+{percentage}%</span>
      </div>
    </div>
  );
}

export default TopSectionCard;