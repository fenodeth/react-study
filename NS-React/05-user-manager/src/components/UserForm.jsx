import React from "react";
import { useForm } from "../hooks/useForm";
import Input from "./Input";
import Button from "./Button";

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        value={form.name}
        onChange={handleChange}
        name="name"
        placeholder="Nombre"
      />
      <Input
        label="Apellido"
        value={form.lastname}
        onChange={handleChange}
        name="lastname"
        placeholder="Apellido"
      />
      <Input
        label="Correo"
        value={form.email}
        onChange={handleChange}
        name="email"
        placeholder="Correo"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
