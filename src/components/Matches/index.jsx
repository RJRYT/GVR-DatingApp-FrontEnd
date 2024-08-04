import React from "react";

import Topbar from "./Topbar";
import Filter from "./Filter";
import MatchGrid from "./MatchGrid";
import Upgrade from "./Upgrade";

const Matches = ({
  title = "",
  profileView = false,
  views = 40,
  connect = 21,
  likes = 12,
  upgrade = false,
}) => {
  return (
    <div className="min-h-screen p-4 aldrich-regular">
      <Topbar title={title} />
      {!profileView && !upgrade && <Filter connect={connect} likes={likes} />}
      {profileView ? (
        <div className="text-lg font-bold text-pink-500 mt-4 pl-2">
          {views} new profile views
        </div>
      ) : (
        <div className="text-lg font-bold text-[#4b164c] mt-4 pl-2">
          Your Matches <span className="text-pink-500">{views}</span>
        </div>
      )}
      <section className="mt-8">
        <MatchGrid />
        {upgrade && <Upgrade />}
      </section>
    </div>
  );
};

export default Matches;
