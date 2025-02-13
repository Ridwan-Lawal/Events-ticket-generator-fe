import React from "react";

interface formInputProps {
  children: React.ReactNode;
  error: string | boolean;
  label: string;
}

export default function FormInput({ children, error, label }: formInputProps) {
  return (
    <fieldset className="form-field ">
      <div>
        <label htmlFor={children?.props?.name} className=" ">
          {label}
        </label>

        {/* error message */}
        {error && <p className="error-msg">{error}</p>}
      </div>

      <div>{children}</div>
    </fieldset>
  );
}
