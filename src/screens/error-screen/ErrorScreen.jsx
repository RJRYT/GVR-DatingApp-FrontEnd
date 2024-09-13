import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorScreen() {
  const error = useRouteError();
  console.log(error);
  
  return (
    <div className="absolute top-10 left-36 grid gap-5 ">
      <h1 className="text:xl lg:text-2xl">Oops!</h1>
      <p className="text-lg lg:text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg lg:text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorScreen;