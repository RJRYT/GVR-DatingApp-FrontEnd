import React from "react";
import backgroundImage from "../../../assets/matches/base.svg";
import like from "../../../assets/matches/like.svg";
import chat from "../../../assets/matches/chat.svg";
import more from "../../../assets/matches/more.svg";

const ProfileCard = ({ profile }) => {
  return (
    <div className="relative bg-gray-500 rounded-3xl overflow-hidden shadow-lg">
      <img
        src={profile?.profilePic?.url}
        alt={profile.username}
        className="w-full max-md:h-[200px] md:h-[200px] lg:h-[230px] object-cover"
      />


      {profile.isOnline && (<div className="absolute top-0 left-0 right-0 p-2 text-white">
        <div className="flex justify-between items-top">
          <div className="flex items-center">
            <span className="text-xs uppercase bg-gray-500 border-gray-500 bg-opacity-50 border rounded-xl px-3">Online</span>
          </div>
        </div>
      </div>)}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#876785] to-transparent p-1 flex justify-center">
        <div className="text-white">
          <div className="flex justify-center items-center gap-4">
            <span className="text-md font-bold">{profile.username}</span>
            <span className="text-sm uppercase tracking-widest text-gray-300">
              {profile.gender.charAt(0)}{profile.age}yrs
            </span>
          </div>
          <span className="block text-center text-sm uppercase tracking-widest text-gray-300">
            {profile.designation}, {profile.location?.shortName}
          </span>
        </div>
      </div>

      <div
        className="absolute bottom-0 top-[50%] mt-[-70px] right-0  bg-transparent h-[150px] w-[60px] flex justify-center bg-center gap-2 bg-no-repeat items-center flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <button className=" flex-col items-center justify-center">
          <img src={like} alt="Like" className="lg:w-6 h-6" />
        </button>
        <button className=" flex-col items-center justify-center">
          <img src={chat} alt="Chat" className="w-6 h-6" />
        </button>
        <button className=" flex-col items-center justify-center">
          <img src={more} alt="More" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
