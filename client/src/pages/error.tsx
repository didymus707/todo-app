import React from "react";
import { useRouteError } from "react-router";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className=" flex flex-col w-full text-center leading-normal h-screen justify-center">
      <h1>Oops! Sorry</h1>
      <p>
        ruler: Hi there!
        <br />
        to minions: maka vay'all, vuga buga mekecee us! toma voga heloo!
        <br />
        minions: hiya!, hi!, hello!
        <br />
        Report this to the Avatar to fix this if you don't wanna see us
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
