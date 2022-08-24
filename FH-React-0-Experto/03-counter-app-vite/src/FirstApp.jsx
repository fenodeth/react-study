import React from "react";
import PropTypes from "prop-types";

// constantes que no mutan se declaran fuera del componente funcional ya que no es necesario volver a renderizar
const newMessage = "Wena Mundo";

const newMessage2 = {
  message: "Hola Mundo",
  title: "Fernando",
};

const getMessage = () => {
  return newMessage;
};

const FirstApp = ({ title, subtitle, name }) => {
  //states y effects aca (dependencias de renderizado)
  return (
    <>
      <h1>{newMessage}</h1>
      <p>{getMessage()}</p>
      <code> {JSON.stringify(newMessage2)}</code>
      <p>pepe</p>

      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{name}</h3>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "Sin titulo",
  subtitle: 0,
  name: "Fernando",
};

export default FirstApp;
