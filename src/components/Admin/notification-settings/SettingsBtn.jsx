import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
function SettingsBtn() {
  return (
    <div className="w-fit mt-5">
      <button className="px-5 py-3 flex justify-center gap-3 items-center bg-[#1DE9B6] text-white tracking-wide rounded-lg">
        <span className="text-xl font-bold">
          <IoCheckmarkSharp />
        </span>
        Update
      </button>
    </div>
  );
}

export default SettingsBtn;