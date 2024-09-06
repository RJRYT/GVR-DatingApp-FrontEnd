import React from "react";

import Topbar from "./Topbar";
import MatchGrid from "./MatchGrid";
import Upgrade from "./Upgrade";

const ProfileViews = ({
  title = "",
  upgrade = false,
}) => {
  return (
    <div className="min-h-screen p-4 aldrich-regular">
      <Topbar title={title} />
        <div className="text-lg font-bold text-pink-500 mt-4 pl-2">
          68 new profile views
        </div>
      <section className="mt-8">
        <MatchGrid />
        {upgrade && <Upgrade />}
      </section>
    </div>
  );
};

export default ProfileViews;
