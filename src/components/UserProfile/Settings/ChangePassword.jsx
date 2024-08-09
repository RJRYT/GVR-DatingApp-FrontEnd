import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ChangePassword = () => {
  return (
    <div className="items-center justify-center min-h-screen bg-fuchsia-950 ">
      <div className="flex p-6">
        <button className="rounded-full border-white border-2 p-2 bg-[#DD88CF] ml-4">
          <FaArrowLeft className="text-white" />
        </button>
        <h3 className="flex-1 text-center text-white text-2xl font-bold">
          Change Password
        </h3>
      </div>
      <div className="bg-white rounded-t-3xl min-h-screen p-6 mt-4 font-sans">
        <div className="p-6">
          <p className="font-sm text-medium border-b pb-4">
            Feeling worried about your account been easily preyed on? Then
            change that password now!
          </p>
        </div>
        <div className="flex px-6 pb-4 py-4 border-b">
          <label className="font-sm text-medium">Current Password</label>
          <div className="ml-auto">
            <AiFillEyeInvisible size={24} className="" />
          </div>
        </div>
        <div className="flex px-6 py-4 border-b">
          <label className="font-sm text-medium">New Password</label>
          <div className="ml-auto">
            <AiFillEyeInvisible size={24} className="" />
          </div>
        </div>
        <div className="flex px-6 py-4 border-b">
          <label className="font-sm text-medium">Confirm Password</label>
          <div className="ml-auto">
            <AiFillEyeInvisible size={24} className="" />
          </div>
        </div>

        <div className="text-center">
          <button className="bg-fuchsia-950 text-white rounded-full py-4 px-24 mt-64 md:mt-36">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
