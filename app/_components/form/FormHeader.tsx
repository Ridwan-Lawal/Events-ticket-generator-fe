import React from "react";

interface FormHeaderProps {
  headerText: string;
  step: number;
  progressWidth: string;
}

export default function FormHeader({
  headerText,
  step,
  progressWidth,
}: FormHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* step name */}
        <h1 className={`text-white font-jeju  capitalize`}>{headerText}</h1>

        {/* step */}
        <p className="text-white leading-[150%]">Step {step}/3</p>
      </div>

      {/* progress bar */}
      <div className="bg-color-green-600 rounded-[5px] h-1">
        <div
          className={`bg-color-green-400 rounded-[5px] ${progressWidth} h-1 `}
        />
      </div>
    </div>
  );
}
