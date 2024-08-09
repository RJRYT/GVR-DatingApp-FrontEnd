import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-fuchsia-950">
      <div className="flex p-6 w-full">
        <button className="rounded-full border border-white border-2 p-2 bg-[#DD88CF] ml-4">
          <FaArrowLeft className="text-white" />
        </button>
        <h3 className="flex-1 text-center text-white text-2xl font-semibold">Change Password</h3>
      </div>
      <div className="bg-white rounded-t-3xl w-full p-6 mt-4 font-sans">
        <div className="p-6">
          <p className="text-medium border-b pb-4">
            Feeling worried about your account being easily preyed on? Then change that password now!
          </p>
        </div>
        <div className="flex flex-col px-6 pb-4 py-4 border-b">
          <label className="text-medium">Current Password</label>
          <div className="flex items-center">
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              className="flex-1 p-2 border border-gray-300 rounded mt-2"
            />
            <div className="ml-4 cursor-pointer" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
              {showCurrentPassword ? <AiFillEye size={24} /> : <AiFillEyeInvisible size={24} />}
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 py-4 border-b">
          <label className="text-medium">New Password</label>
          <div className="flex items-center">
            <input
              type={showNewPassword ? 'text' : 'password'}
              className="flex-1 p-2 border border-gray-300 rounded mt-2"
            />
            <div className="ml-4 cursor-pointer" onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <AiFillEye size={24} /> : <AiFillEyeInvisible size={24} />}
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 py-4 border-b">
          <label className="text-medium">Confirm Password</label>
          <div className="flex items-center">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="flex-1 p-2 border border-gray-300 rounded mt-2"
            />
            <div className="ml-4 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <AiFillEye size={24} /> : <AiFillEyeInvisible size={24} />}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-fuchsia-950 text-white rounded-full py-4 px-24">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
