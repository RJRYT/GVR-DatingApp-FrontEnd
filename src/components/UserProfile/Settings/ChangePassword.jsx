import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="items-center justify-center min-h-screen bg-fuchsia-950 ">
      <div className="flex p-6">
        <button className="rounded-full border border-white border-2 p-2 bg-[#DD88CF] ml-4">
          <FaArrowLeft className="text-white" />
        </button>
        <h3 className="flex-1 text-center text-white text-2xl font-semibold text-lg">
          Change Password
        </h3>
      </div>
      <div className="bg-white rounded-t-3xl min-h-screen p-6 h-96 mt-4 font-sans">
        <div className="p-6">
          <p className="font-sm text-medium border-b pb-4 ">
            Feeling worried about your account been easily preyed on? Then
            change that password now!
          </p>
        </div>
        <div className="flex items-center px-6 py-4 border-b">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Current Password"
            className="flex-1 p-2 focus:outline-none bg-transparent text-medium"
          />
          <div
            className="ml-4 cursor-pointer"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <AiFillEye size={24} />
            ) : (
              <AiFillEyeInvisible size={24} />
            )}
          </div>
        </div>

        <div className="flex items-center px-6 py-4 border-b">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Change Password"
            className="flex-1 p-2 focus:outline-none bg-transparent text-medium"
          />
          <div
            className="ml-4 cursor-pointer"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <AiFillEye size={24} />
            ) : (
              <AiFillEyeInvisible size={24} />
            )}
          </div>
        </div>
        <div className="flex items-center px-6 py-4 border-b">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Conform Password"
            className="flex-1 p-2 focus:outline-none bg-transparent text-medium"
          />
          <div
            className="ml-4 cursor-pointer"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <AiFillEye size={24} />
            ) : (
              <AiFillEyeInvisible size={24} />
            )}
          </div>
        </div> 

        <div className="text-center">
          <button className="bg-fuchsia-950 text-white rounded-full py-4 px-24 mt-48 ">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
