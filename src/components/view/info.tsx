import React from "react";
import { InfoItem } from "./item";

export const Info = ({ page }: { page: any }) => {
  const arr: string[] = ['Overdue', 'Tomorrow', 'Next Week', 'Planned', 'Someday'];
  return (
    <div className="bg-white w-full rounded-lg drop-shadow-none mb-4">
      <div className="flex justify-around">
        <InfoItem count={0} label="Estimated Time" />
        {!arr.includes(page) && (
          <>
            <InfoItem count={0} label="Tasks to be Completed" />
            <InfoItem count={0} label="Elapsed Time" />
          </>
        )}
        <InfoItem count={25} label="Completed Tasks" />
      </div>
    </div>
  );
};