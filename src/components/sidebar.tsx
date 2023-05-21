import React from "react";
import { SidebarItem } from "./item";
import { TodayIcon, Overdue, Task, Add } from "./primitives/icons";

export const Sidebar = () => {
  return (
    <>
      <div className="bg-white w-1/5 px-4 py-4 border-r-2 border-r-neutral-500 h-[94.3vh]">
        <div className="flex flex-col last:mt-auto">
          <SidebarItem
            qty={0}
            time="0m"
            title="Today"
            icon={<TodayIcon size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Overdue"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Tomorrow"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="This Week"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Next 7 Days"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="High Priority"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Medium Priority"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Low Priority"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Planned"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="All"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Someday"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Completed"
            icon={<Overdue size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Tasks"
            icon={<Task size="1.4em" classNames={["mr-4"]} />}
          />
          <SidebarItem
            qty={0}
            time="0m"
            title="Add Project"
            icon={<Add size="1.4em" classNames={["mr-4"]} />}
          />
        </div>
      </div>
    </>
  );
};
