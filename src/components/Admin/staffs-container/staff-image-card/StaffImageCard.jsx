import React from "react";
import { UserProfile } from "../../../../constants";

function StaffImageCard({ image, name }) {
  return (
    <div className="w-max h-max  flex flex-col gap-2 ">
      <div className="w-20 h-20 border-2 border-zinc-300 rounded-md overflow-hidden">
        <img
          src={image || UserProfile}
          alt="user image"
          className=" object-cover"
        />
      </div>
      <p className=" text-sm text-textLg text-center mt-1  cursor-pointer">
        {name || "test"}
      </p>
    </div>
  );
}

export default StaffImageCard;