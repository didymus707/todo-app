import React from "react";
import { Add } from "./primitives/icons";

export const Form = () => {
  return (
    <div className="w-full mt-6 relative">
      <div className="icon absolute">
        <Add size="1.4em" classNames={["mr-4"]} />
      </div>
      <input
        type="text"
        placeholder="Add a task then press enter to save"
        className="form-input rounded-lg w-full border-none py-4"
      />
    </div>
  );
};
