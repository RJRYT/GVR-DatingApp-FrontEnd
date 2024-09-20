import React from "react";

function LoadingScreen() {
  return (
    <div className="absolute top-10 left-36 grid gap-5 ">
      <h1 className="text:xl lg:text-2xl">Loading...</h1>
      <p className="text-lg lg:text-xl">Wait a bit...</p>
    </div>
  );
}

export default LoadingScreen;