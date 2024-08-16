import React from "react";
import backgroundImage from "../../../assets/matches/base.svg";
import like from "../../../assets/matches/like.svg";
import chat from "../../../assets/matches/chat.svg";
import more from "../../../assets/matches/more.svg";

const ProfileCard = ({ profile }) => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full max-md:h-[200px] md:h-[200px] lg:h-[230px] object-cover"
      />

      <div className="absolute top-0 left-0 right-0   p-2 text-white">
        <div className="flex justify-between items-top">
          <div className="flex items-center">
            <span className="text-xs uppercase">Online</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-1 flex ">
        <div className="text-white ">
          <span className="block text-xs font-bold ">{profile.name}</span>
          <span className="block text-xs uppercase">
            {profile.gender} {profile.age}
          </span>
          <span className="block text-xs uppercase">
            {profile.occupation}, {profile.location}
          </span>
        </div>
      </div>
      {/* Interaction Icons */}

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
