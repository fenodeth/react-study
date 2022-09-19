import React from "react";

// Cada vez que la llamo trae un valor diferente
// Llamados a API o BBDD
const impura = () => new Date().toLocaleString();
console.log(impura());

// (Pura) Funcion que nunca cambia el valor de retorno
const MiComponente = ({ miProp }) => {
  return <div>Nombre: {miProp}</div>;
};

const App = () => {
  return (
    <div>
      <MiComponente miProp={"Chanchito feliz"} />
    </div>
  );
};

export default App;
