import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  console.log({ field, meta });

  return (
    <div className="control">
      <label className="label">{label}</label>
      <input className="input" {...field} />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default TextInput;
