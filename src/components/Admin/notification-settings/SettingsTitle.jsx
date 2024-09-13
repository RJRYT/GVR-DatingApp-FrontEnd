import React from "react";

function SettingsTitle({title}) {
  return (
    <div className="w-fit flex gap-4 items-center">
      <div className="w-1 h-6 bg-blue-500"></div>
      <h3>{title}</h3>
    </div>
  );
}

export default SettingsTitle;