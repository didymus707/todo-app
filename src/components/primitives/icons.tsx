import React from "react";
import { BsSun } from "react-icons/bs";
import {
  MdOutlineWatchLater,
  MdOutlineAdd,
  MdOutlineAddTask,
} from "react-icons/md";
import { WiSunrise } from "react-icons/wi";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { AiOutlineTags } from "react-icons/ai";

type IconProps = {
  classNames: string[];
  size: string;
};

export const TodayIcon = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <BsSun size={size} color="#37c559" />
    </div>
  );
};

export const Overdue = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <MdOutlineWatchLater size={size} color="#f87171" />
      {/* <MdOutlineWatchLater size={size} color='#ef4444' /> */}
    </div>
  );
};

export const Tomorrow = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};

export const ThisWeek = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};

export const NextWeek = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};

export const HighPriority = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};

export const MidPriority = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};

export const LowPriority = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};
export const Planned = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};
export const All = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};
export const Someday = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};
export const Completed = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <WiSunrise size={size} color="#37c559" />
    </div>
  );
};

export const Task = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <MdOutlineAddTask size={size} color="#37c559" />
    </div>
  );
};

export const Add = (props: IconProps) => {
  const { classNames, size } = props;
  return (
    <div className={classNames.join(" ")}>
      <MdOutlineAdd size={size} color="#37c559" />
    </div>
  );
};

export const Tag = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <AiOutlineTags size={size} color="#37c559" />
    </div>
  );
};

export const Folder = (props: IconProps) => {
  const { classNames, size } = props;
  return (
    <div className={classNames.join(" ")}>
      <HiOutlineFolderOpen size={size} color="#37c559" />
    </div>
  );
};
