import React, { useState } from "react";

const Badge = ({ name }) => {
  const [close, setClose] = useState(false);
  return (
    <div
      className={`flex items-center ${
        close ? "hidden" : "block"
      } px-3 py-1 rounded-xl text-sm font-medium cursor-pointer bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200`}
    >
      {name}
      <span className="ml-2" aria-hidden={true} onClick={() => setClose(true)}>
        &times;
      </span>
    </div>
  );
};

export default Badge;
