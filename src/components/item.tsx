import React from "react";
import { Folder, Tags } from "./primitives/icons";

type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
  time: string;
  qty: number;
};

export const SidebarItem = (props: SidebarItemProps) => {
  const { title, time, qty, icon } = props;

  return (
    <div
      className={`flex items-center w-full p-2 justify-between cursor-pointer hover:bg-gray-100 rounded-md h-full ${
        title === "Add Project" &&
        "my-auto hover:bg-transparent border-t border-[#e2e2e2] rounded-none"
      }`}
    >
      <div className="flex items-center w-[70%]">
        {icon}
        <p className="text-sm text-gray-600">{title}</p>
      </div>

      {title !== "Completed" && title !== "Add Project" && (
        <div className="flex text-stone-400">
          <span className="mr-4">{time}</span>
          <span>{qty}</span>
        </div>
      )}

      {title === "Add Project" && (
        <div className="flex ">
          {<Tags classNames={["mr-4"]} size="1.4em" />}
          {<Folder classNames={["mr-[-6px]"]} size="1.4em" />}
        </div>
      )}
    </div>
  );
};
