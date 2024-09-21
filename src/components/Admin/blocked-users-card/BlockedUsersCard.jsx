import React from "react";
import { ProfileImage } from "../../../constants";

function BlockedUsersCard() {
  return (
    <div className="w-full h-12  flex items-center  justify-evenly">
      <div className="flex gap-5">
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <img
            src={ProfileImage}
            alt="profile image"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold">Name test</h2>
          <p className="text-sm font-medium opacity-60">Reason for block</p>
        </div>
      </div>
      <p>12.00 AM</p>
    </div>
  );
}

export default BlockedUsersCard;