import { useField } from "formik";
import React from "react";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  console.log(field);
  return (
    <div>
      <label>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
};

export default Select;
