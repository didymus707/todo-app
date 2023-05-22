import React from "react";
import { SidebarItem } from "./item";
import { TodayIcon, Overdue, Task, Add, Completed, Planned, ThisWeek, NextWeek, HighPriority, MidPriority, LowPriority, Tomorrow, All, Someday } from "./primitives/icons";

export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col w-1/5 border-r-2 border-r-[#e2e2e2]">
        <div className="bg-white px-4 pt-4 min-h-[calc(100vh-5.6rem)]">
          <div className="flex flex-col">
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
              icon={<Tomorrow size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="This Week"
              icon={<ThisWeek size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="Next Week"
              icon={<NextWeek size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="High Priority"
              icon={<HighPriority size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="Medium Priority"
              icon={<MidPriority size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="Low Priority"
              icon={<LowPriority size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="Planned"
              icon={<Planned size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="All"
              icon={<All size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="Someday"
              icon={<Someday size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="Completed"
              icon={<Completed size="1.4em" classNames={["mr-4"]} />}
            />
            <SidebarItem
              qty={0}
              time="0m"
              title="Tasks"
              icon={<Task size="1.4em" classNames={["mr-4"]} />}
            />
          </div>
        </div>
        <SidebarItem
          qty={0}
          time="0m"
          title="Add Project"
          icon={<Add size="1.4em" classNames={["mr-4"]} />}
        />
      </div>
    </>
  );
};
