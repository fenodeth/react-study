import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./componets/TextInput";
import Checkbox from "./componets/Checkbox";
import Select from "./componets/Select";
import Radio from "./componets/Radio";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }
  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }
  if (!values.email) {
    errors.email = "Requerido";
  } else if (values.email.length < 5) {
    errors.email = "El email es muy corto";
  }

  if (!values.chancho) {
    errors.chancho = "Requerido";
  }
  if (!values.accept) {
    errors.accept = "Requerido";
  }
  if (!values.radio) {
    errors.radio = "Requerido";
  }
  return errors;
};

const FormikComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        chancho: "",
        accept: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      {/* API Context pasa las propiedades de Formik a los diversos componentes */}
      <Form>
        <TextInput name="name" label="Nombre" />
        {/* <label>Nombre</label>
        <Field name="name" type="text" className="input" />
        <ErrorMessage name="name" /> */}
        <br />
        <TextInput name="lastname" label="Apellido" />
        <br />
        <TextInput name="email" label="Email" />
        <br />
        <Select label="Tipo de Chancho" name="chancho">
          <option value="">Seleccione Chancho</option>
          <option value="felipe">Felipe</option>
          <option value="chanchitofeliz">Chanchito Feliz</option>
          <option value="chanchitotriste">Chanchito Triste</option>
        </Select>
        <Checkbox name="accept">Aceptar Términos y Condiciones</Checkbox>
        <br />
        <Radio name="radio" value="chanchito1" label="chanchito 1" />
        <Radio name="radio" value="chanchito2" label="chanchito 2" />
        <Radio name="radio" value="chanchito3" label="chanchito 3" />
        <ErrorMessage name="radio" />
        <br />
        <button type="submit">Enviar</button>
        <hr />
        {/* Textarea */}
        <Field name="textarea" as="textarea" className="input" />
        {/* Select */}
        <Field name="select" as="select" className="input">
          <option value={"chanchito feliz"}>Chanchito Feliz</option>
          <option value={"chanchito triste"}>Chanchito Triste</option>
        </Field>
      </Form>
    </Formik>
  );
};

export default FormikComponent;
