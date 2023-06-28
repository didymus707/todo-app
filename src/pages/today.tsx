import React from "react";
import { Info } from "../components/view/info";
import { Form } from "../components/task-form";
import { SortIcon } from "../components/primitives/icons";

export const Today = () => {
  return (
    <div className="w-4/5 px-4">
      <div className="flex items-center justify-between mt-6">
        <p className="text-2xl text-gray-600">Today</p>
        <SortIcon
          size="2em"
          classNames={["bg-white rounded-lg"]}
        />
      </div>
      <Info />
      <Form />
    </div>
  );
};
