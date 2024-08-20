import React from "react";

const CombinedProfile = ({ images }) => {
  return (
    <div className="relative w-20 h-20 rounded-full overflow-hidden">
      {/* First image (left side, vertically centered) */}
      <img
        src={images[0]}
        alt="profile 1"
        className="absolute object-cover w-1/2 h-full left-0 top-0"
      />

      {/* Second image (right side, top 50%) */}
      <img
        src={images[1]}
        alt="profile 2"
        className="absolute object-cover w-1/2 h-1/2 right-0 top-0"
      />

      {/* Third image (right side, bottom 50%) */}
      <img
        src={images[2]}
        alt="profile 3"
        className="absolute object-cover w-1/2 h-1/2 right-0 bottom-0"
      />
    </div>
  );
};

export default CombinedProfile;
