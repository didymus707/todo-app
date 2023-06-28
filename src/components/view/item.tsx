import React from "react";

type InfoItemProps = {
  label: string;
  count: number;
};

export const InfoItem = ({ label, count }: InfoItemProps) => {
  return (
    <div className="flex flex-col my-3 items-center">
      <p className="font-sil text-4xl text-red-500">
        {count}
        <span className="font-sans text-sm text-gray-400 ml-px">
          {label.includes("Time") && "m"}
        </span>
      </p>
      <p className="text-xs text-gray-400 mt-px">{label}</p>
    </div>
  );
};
