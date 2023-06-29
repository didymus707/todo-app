import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className=" flex flex-col w-full text-center leading-normal h-screen justify-center">
      <h1>Oops! Sorry</h1>
      <p>
        ruler: Hi there!
        <br />
        to minions: Y'all, they can see us! Come say hi, real quick!
        <br />
        minions: hiya!, hi!, hello!
        <br />
        Report this to Fire Lord Osai ti fix this if you don't wanna see us
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
