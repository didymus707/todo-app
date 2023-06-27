import React from "react";

type InfoItemProps = {
  label: string;
  count: number;
};

export const InfoItem = ({ label, count }: InfoItemProps) => {
  return (
    <div className="flex flex-col my-4 items-center">
      <p className="text-base">
        {count}
        <span className="text-sm text-gray-400 mt-2">
          {label.includes("Time") && "m"}
        </span>
      </p>
      <p className="text-base">{label}</p>
    </div>
  );
};
