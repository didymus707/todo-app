import React from "react";
import { InfoItem } from "./item";

export const Info = () => {
  return (
    <div className="mt-5 bg-white w-full rounded-lg drop-shadow-none">
      <div className="flex justify-around">
        <InfoItem count={0} label="Estimated Time" />
        <InfoItem count={0} label="Tasks to be Completed" />
        <InfoItem count={0} label="Elapsed Time" />
        <InfoItem count={25} label="Completed Tasks" />
      </div>
    </div>
  );
};
