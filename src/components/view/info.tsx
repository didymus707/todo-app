import React from "react";
import { InfoItem } from "./item";

export const Info = () => {
  return (
    <div className="pt-2 bg-white w-full rounded">
      <div className="flex justify-around">
        <InfoItem count={0} label="Estimated Time" />
        <InfoItem count={0} label="Tasks to be Completed" />
        <InfoItem count={0} label="Elapsed Time" />
        <InfoItem count={0} label="Completed Tasks" />
      </div>
    </div>
  );
};
