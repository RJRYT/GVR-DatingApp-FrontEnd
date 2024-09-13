import React from "react";

import { FaFile } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";

function NotificationIconType({ value }) {
  return (
    <>
      {value === 0 ? (
        <span className="absolute -right-2 w-5 h-5 flex items-center justify-center bg-[#FFDB4D] text-xs text-white rounded-full">
          <FaFile />
        </span>
      ) : value === 6 ? (
        <span className="absolute -right-2 w-5 h-5 flex items-center justify-center bg-[#5856D6] text-xs text-white rounded-full">
          <TfiAnnouncement />
        </span>
      ) : (
        <span className="absolute -right-2 w-5 h-5 flex items-center justify-center bg-[#5856D6] text-xs text-white rounded-full">
          <IoIosNotificationsOutline />
        </span>
      )}
    </>
  );
}

export default NotificationIconType;