import React from "react";

function ErrorScreen() {
  return (
    <div className="absolute top-10 left-36 grid gap-5 ">
      <h1 className="text:xl lg:text-2xl">Oops!</h1>
      <p className="text-lg lg:text-xl">Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default ErrorScreen;