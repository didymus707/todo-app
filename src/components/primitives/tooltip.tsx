import React from "react";

type TooltipProps = {
  description: string;
  children: React.ReactNode;
};

const Tooltip = (props: TooltipProps) => {
  const { description, children } = props;

  return (
    <div className="group relative flex">
      {children}
      <span className="absolute top-10 right-0 scale-0 transition-all rounded bg-stone-500 p-2 text-xs text-white group-hover:scale-100">
        {description}
      </span>
    </div>
  );
};

export default Tooltip;
