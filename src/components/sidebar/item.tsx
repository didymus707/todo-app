import React from "react";
type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
  time?: string;
  qty?: number;
};

export const SidebarItem = (props: SidebarItemProps) => {
  const { title, time, qty, icon } = props;

  return (
    <>
      <a
        href={`/${title}`}
        className="flex items-center p-2 justify-between cursor-pointer hover:bg-gray-100 rounded-md"
      >
        <div className="flex items-center w-[70%]">
          {icon}
          <p className="text-sm text-gray-500">{title}</p>
        </div>

        {title !== "Completed" && title !== "Add Project" && (
          <div className="flex text-stone-400">
            <span className="mr-4">{time}</span>
            <span>{qty}</span>
          </div>
        )}
      </a>
    </>
  );
};
