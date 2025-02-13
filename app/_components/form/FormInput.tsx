import React from "react";

export default function FormInput({ children, error, label }) {
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
