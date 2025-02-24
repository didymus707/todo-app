import React from "react";
import { RxAvatar } from "react-icons/rx";
import { Analytics, Notification, Premium, Settings } from "./primitives/icons";
import Tooltip from "./primitives/tooltip";


export const Header = (props: any) => {
  const { token, user } = props;
  return (
    <div className="w-full px-6 py-2 border-b-2">
      <div className="flex w-full text-blue-500">
        <div className="avatar-auth flex items-center w-40 justify-between">
          <div className="avatar">
            <RxAvatar size="2em" />
          </div>
          <div className="auth">
            {token ? user?.email : "Sign In | Sign Up"}
          </div>
        </div>
        <div className="flex ml-auto w-[12%] justify-between items-center">
          <Tooltip description="Premium" position="top-8">
            <Premium classNames={["cursor-pointer"]} size="1.4em" />
          </Tooltip>
          <Tooltip description="Report" position="top-8">
            <Analytics classNames={["cursor-pointer"]} size="1.6em" />
          </Tooltip>
          <Tooltip description="Notifications" position="top-8">
            <Notification classNames={["cursor-pointer"]} size="1.6em" />
          </Tooltip>
          <Tooltip description="Settings" position="top-8">
            <Settings classNames={["cursor-pointer"]} size="1.6em" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
