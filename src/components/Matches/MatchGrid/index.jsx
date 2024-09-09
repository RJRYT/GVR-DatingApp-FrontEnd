import React from "react";
import MatchCard from "./MatchCard";
import { Link } from "react-router-dom";

const MatchGrid = ({matches}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 pb-20">
      {matches.map((match, index) => (
        <Link key={index} to={`/dashboard/profile/${match._id}`} >
        <MatchCard match={match} />
        </Link>
      ))}
    </div>
  );
};

export default MatchGrid;
