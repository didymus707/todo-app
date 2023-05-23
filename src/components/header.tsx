import React from "react";
import { RxAvatar } from "react-icons/rx";
import { Analytics, Notification, Premium, Settings } from "./primitives/icons";


export const Header = (props: any) => {
  const { token, user } = props;
  return (
    <div className="w-full px-6 py-2 border-b-2">
      <div className="flex w-full text-red-500">
        <div className="avatar-auth flex items-center w-40 justify-between">
          <div className="avatar">
            <RxAvatar size="2em" />
          </div>
          <div className="auth">
            {token ? user?.email : "Sign In | Sign Up"}
          </div>
        </div>
        <div className="flex ml-auto w-[10%] justify-between items-center">
          <div>
            <Premium classNames={["cursor-pointer"]} size="1.4em" />
          </div>
          <div>
            <Analytics classNames={["cursor-pointer"]} size="1.6em" />
          </div>
          <div>
            <Notification classNames={["cursor-pointer"]} size="1.6em" />
          </div>
          <div>
            <Settings classNames={["cursor-pointer"]} size="1.6em" />
          </div>
        </div>
      </div>
    </div>
  );
};
