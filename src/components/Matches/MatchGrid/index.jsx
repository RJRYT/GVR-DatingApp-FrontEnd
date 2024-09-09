import React from "react";
import MatchCard from "./MatchCard";
import { Link } from "react-router-dom";

const MatchGrid = ({matches}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 pb-20">
      {Array.isArray(matches) && matches.length > 0 ? (
      matches.map((match, index) => (
        <Link key={index} to={`/dashboard/profile/${match._id}`} >
        <MatchCard match={match} />
        </Link>
      ))
      ) : (
        <p className="flex items-center justify-center px-5 py-16 text-lg">No matches found</p>
      )}
    </div>
  );
};

export default MatchGrid;
