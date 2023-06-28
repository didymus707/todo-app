import React from "react";
import { SidebarItem } from "./item";
import {
  TodayIcon,
  Overdue,
  Task,
  Add,
  Completed,
  Planned,
  ThisWeek,
  NextWeek,
  HighPriority,
  MidPriority,
  LowPriority,
  Tomorrow,
  All,
  Someday,
  Folder,
  Tag,
} from "../primitives/icons";
import Tooltip from "../primitives/tooltip";

export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col w-[19%] drop-shadow-sm">
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
        <div
          className="flex items-center p-2 justify-between cursor-pointer bg-white hover:bg-gray-100 pl-5 hover:bg-transparent border-t drop-shadow-sm rounded-none"
        >
          <div className="flex items-center w-[70%]" onClick={() => {}}>
            <Add size="1.4em" classNames={["mr-4"]} />
            <p className="text-sm text-gray-500">Add project</p>
          </div>

          <div className="flex">
            <>
              <Tooltip
                description="tags"
                position="bottom-8"
                positionH="mx-[-8px]"
              >
                <Tag classNames={["mr-4"]} size="1.4em" />
              </Tooltip>
              <Tooltip description="folder" position="bottom-8">
                <Folder classNames={["mr-2"]} size="1.4em" />
              </Tooltip>
            </>
          </div>
        </div>
      </div>
    </>
  );
};
