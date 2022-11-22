// Recordar la función, en caso de que sea la misma devuelve siempre la misma instancia
import React, { useState, useCallback, useMemo } from "react";
import Title from "./components/Title";
import MyForm from "./components/Forms/MyForm";
import MyList from "./components/Lists/MyList";

const App = () => {
  const [valores, setValores] = useState([]);
  const handleSubmit = useCallback((values) => {
    setValores((data) => [...data, values]);
  }, []);
  // UseCallback recibe 2 argumentos, el primero es la función y el segundo son las reglas de dependencia como array

  const iterador = 50000000;
  console.time("memo");
  // Use memo recibe 2 parametros
  // El primero guarda el resultado siempre y cuando los argumentos no hayan cambiado
  // El segundo son los argumentos que va a recibir la función
  const memoized = useMemo(() => {
    let total = 0;
    for (let i = 0; i < iterador; i++) {
      total = total * iterador;
    }
    return total;
  }, [iterador]);
  console.log(memoized);
  console.timeEnd("memo");

  return (
    <div>
      <Title>Registro</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
};

export default App;
