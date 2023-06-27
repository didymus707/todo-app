import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div>
      <h1>Oops! Sorry</h1>
      <p>
        this doesn't happen, report to fire lord Osai, that we want to leave!
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
