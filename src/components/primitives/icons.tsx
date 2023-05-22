import React from "react";
import { BsSun, BsWindowStack, BsCalendar2Week, BsSunrise } from "react-icons/bs";
import {
  MdOutlineAdd,
  // MdNavigateNext,
  MdOutlineAddTask,
  MdOutlineNextPlan,
  MdOutlineWatchLater,
  MdOutlineAutoAwesomeMosaic
} from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";
import { AiOutlineTags } from "react-icons/ai";
import { GiClosedDoors } from "react-icons/gi";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { FcHighPriority, FcLowPriority, FcMediumPriority, FcPaid } from "react-icons/fc";

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
    </div>
  );
};

export const Tomorrow = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <BsSunrise size={size} color="#37c559" />
    </div>
  );
};

export const ThisWeek = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <BsCalendar2Week size={size} color="#78716c" />
    </div>
  );
};

export const NextWeek = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <MdOutlineNextPlan size={size} color="#f59e0b" />
    </div>
  );
};

export const HighPriority = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <FcHighPriority size={size} color="#37c559" />
    </div>
  );
};

export const MidPriority = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <FcMediumPriority size={size} color="#37c559" />
    </div>
  );
};

export const LowPriority = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <FcLowPriority size={size} color="#37c559" />
    </div>
  );
};
export const Planned = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      {/* <BsWindowStack size={size} color="#37c559" /> */}
      <BsWindowStack size={size} color="#3b82f6" />
    </div>
  );
};
export const All = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <TiThSmallOutline size={size} color="#22d3ee" />
    </div>
  );
};
export const Someday = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <MdOutlineAutoAwesomeMosaic size={size} color="#c084fc" />
    </div>
  );
};
export const Completed = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <GiClosedDoors size={size} color="#78716c" />
    </div>
  );
};

export const Task = (props: IconProps) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <MdOutlineAddTask size={size} color="#38bdf8" />
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

export const Premium = (props: IconProps) => {
  const {classNames, size} = props;

  return (
    <div className={classNames.join(" ")}>
      <FcPaid size={size} color="#37c559" />
    </div>
  )
}
