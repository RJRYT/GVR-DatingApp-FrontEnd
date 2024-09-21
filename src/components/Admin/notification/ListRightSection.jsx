import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
function ListRightSection() {
  return (
    <div className="flex items-center justify-end gap-3 lg:gap-6">
      <div className="w-2 h-2 bg-customOrange rounded-full"></div>
      <div className="flex gap-3">
        <button className="text-xl">
          <FaRegEdit />
        </button>
        <button className="text-xl">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default ListRightSection;