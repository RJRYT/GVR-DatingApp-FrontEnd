import React from 'react';
import { FaArrowLeft, FaPhone } from 'react-icons/fa';
import { BsCameraVideoFill } from "react-icons/bs";
import sender from "../../../../assets/story/profile1.png";

const Header = () => {
  return (
    <div className="bg-fuchsia-950 text-white rounded-none p-4 flex justify-between items-center">
      <div className="flex items-center gap-4 mr-auto">
        <FaArrowLeft className="text-xl" />
        <img src={sender} alt="Sender" className="w-10 h-10 rounded-full object-cover" />
        <h1 className="text-xl">Fathima</h1>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <FaPhone className="text-white text-xl" />
        <BsCameraVideoFill className="text-white text-xl" />
      </div>
    </div>
  );
};

export default Header;
