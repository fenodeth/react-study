import React from "react";
import FormikComponent from "./FormikComponent";
import UseFormik from "./UseFormik";

const App = () => {
  return (
    <>
      <p>useFormik Hook</p>
      <UseFormik />
      <hr />
      <p>Formik Component</p>
      <FormikComponent />
    </>
  );
};

export default App;
