import React from "react";
import { Add } from "./primitives/icons";

type FormProps = {
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TaskInput = ({ value, onchange }: FormProps) => {
  return (
    <div className="w-full relative flex items-center">
      <div className="icon absolute top-[17px] left-3">
        <Add size="1.4em" classNames={["mr-4"]} />
      </div>
      <input
        type="text"
        onChange={onchange}
        value={value}
        placeholder="Add a task then press enter to save"
        className="form-input rounded-lg w-full border-none py-4 pl-12 placeholder:text-slate-400 placeholder:text-sm text-slate-400"
      />
    </div>
  );
};
