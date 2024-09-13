import React from "react";
import StaffImageCard from "./staff-image-card/StaffImageCard";

function StaffsContainer() {
  return (
    <div className="w-full h-max bg-white py-3 rounded-2xl  flex flex-col items-center justify-start">
      <div className="w-4/5 h-12 flex items-center justify-between">
        <h1 className="font-medium">Staffs</h1>
        <a className=" font-medium text-pink-600 cursor-pointer">View all</a>
      </div>
      <div className="w-4/5 h-max mt-5 grid  gap-2 grid-cols-3 place-items-center ">
        <StaffImageCard />
        <StaffImageCard />
        <StaffImageCard />
        <StaffImageCard />
        <StaffImageCard />
        <StaffImageCard />
      </div>

    </div>
  );
}

export default StaffsContainer;