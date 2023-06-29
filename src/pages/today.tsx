import React, { useState } from "react";
import { Info } from "../components/view/info";
import { TaskInput } from "../components/task-input";
import { SortIcon } from "../components/primitives/icons";
import { useParams } from "react-router-dom";

export const Today = () => {
  const { page } = useParams();
  console.log("page", page);
  const [task, setTask] = useState("");

  const handletask = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTask(e.target.value);

  return (
    <div className="w-4/5 px-4">
      <div className="flex items-center justify-between my-6">
        <p className="text-2xl text-gray-600">{page}</p>
        <SortIcon size="2em" classNames={["bg-white rounded-lg"]} />
      </div>
      {page !== "Completed" && <Info page={page} />}
      <TaskInput value={task} onchange={handletask} />
    </div>
  );
};
