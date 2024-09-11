import React from "react";

const MatchCard = ({ match }) => {
  return (
    <div className="bg-white border-4 border-[#d887ca] rounded-3xl shadow-lg relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
      <img
        src={match.profilePic.url}
        alt={match.username}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 text-sm left-1/2 transform -translate-x-1/2 bg-[#d887ca] text-white p-2 h-7 w-4/5 lg:w-4/6 max-w-full rounded-b-2xl flex items-center justify-center">
        {match.matchPercentage}% Match
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#8d6687] via-transparent to-transparent p-2 text-center">
        <div className="flex justify-center mb-1">
          <div className="w-4/5 lg:w-3/5">
            <div className="rounded-full border border-gray-400 bg-opacity-40 bg-gray-600 p-1 flex items-center justify-center text-sm">
              <div className="text-white">{match.distance} km away</div>
            </div>
          </div>
        </div>
        <div className="flex font-bold gap-1 items-center justify-center text-md text-white">
          {match.username}, {match.age} {match.isOnline && <span className="h-2 w-2 bg-green-500 rounded-full"></span>}
        </div>
        <div className="text-center text-sm uppercase tracking-widest text-gray-300">{match.location?.shortName || ""}</div>
      </div>
    </div>
  );
};

export default MatchCard;