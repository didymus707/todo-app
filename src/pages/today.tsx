import React from "react";
import { Info } from "../components/view/info";

export const Today = () => {
  return (
    <div className="w-4/5 px-6">
      <div className="flex mt-6">
        <p className="text-2xl text-gray-600">Today</p>
        <div className="icon"></div>
      </div>
      <Info />
    </div>
  );
};
