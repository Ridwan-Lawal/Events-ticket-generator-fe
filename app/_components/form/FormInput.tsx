import React from "react";

interface formInputProps {
  children: React.ReactNode;
  error: string | boolean;
  label: string;
}

export default function FormInput({ children, error, label }: formInputProps) {
  console.log(error);
  return (
    <fieldset className="form-field ">
      <div>
        <label htmlFor={children?.props?.name} className=" ">
          {label}
        </label>

        {/* error message */}
        <p className="error-msg">Please enter your name</p>
      </div>

      <div>{children}</div>
    </fieldset>
  );
}
