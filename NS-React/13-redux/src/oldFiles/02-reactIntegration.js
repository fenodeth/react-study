import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const reducer = (state = 0, action) => {
  console.log({ action, state });
  switch (action.type) {
    case "incrementar":
      return state + 1;
    case "decrementar":
      return state - 1;
    case "set":
      return action.payload;
    default:
      return state;
  }
};

// No es necesario guardar formularios en redux, ya que estan en constante cambio
// Conlleva un sobre-renderizado, por lo tanto, mala practica

const App = () => {
  const [valor, setValor] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const set = () => {
    dispatch({ type: "set", payload: valor });
    setValor("");
  };

  return (
    <div>
      <p>Contador: {state}</p>
      <button onClick={() => dispatch({ type: "incrementar" })}>
        INCREMENTAR
      </button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        DECREMENTAR
      </button>
      <button onClick={set}>SET</button>
      <input
        type={"number"}
        value={valor}
        onChange={(e) => {
          setValor(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default App;
