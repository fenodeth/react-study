import { useField } from "formik";
import React from "react";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div>
      <label>
        <input type={"checkbox"} {...field} {...props} />
        {children}
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </label>
    </div>
  );
};

export default Checkbox;
