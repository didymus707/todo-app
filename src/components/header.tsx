import React from "react";
import { RxAvatar } from "react-icons/rx";

export const Header = (props: any) => {
  const { token, user } = props;
  return (
    <div className="w-full">
      <div className="flex w-full text-red-500">
        <div className="avatar-auth flex items-center w-40 justify-between">
          <div className="avatar">
            <RxAvatar size='2em' />
          </div>
          <div className="auth">
            {token ? user?.email : "Sign In | Sign Up"}
          </div>
        </div>
        <div className="flex ml-auto w-1/5 justify-between">
          <div>Premium</div>
          <div>Report</div>
          <div>Notification</div>
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
};
