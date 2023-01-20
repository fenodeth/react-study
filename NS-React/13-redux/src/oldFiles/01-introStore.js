import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

const store = createStore((state = 0, action) => {
  // reducer -> acumulador seguido de un elemento / siempre retorna un estado
  // action = {type: 'tipo de accion', payload: any}
  // console.log({ state, action });
  // return state.payload;

  switch (action.type) {
    case "action": {
      return action.payload;
    }
    case "increment": {
      return state + 1;
    }
    case "decrement": {
      return state - 1;
    }
    case "set": {
      return action.payload;
    }
    default:
      return state;
  }
});

// va a devolver el estado completo cuando se llama desde el store
// console.log(store.getState());

// ejecutara el reducer que se haya pasado a la funcion de createStore
// todas las acciones que despachemos en redux siempre deben llevar la propiedad de type
console.log(store.getState());

store.dispatch({ type: "action", payload: 2 });
console.log(store.getState());

// no esta definida, por lo tanto solo se ejecuta 'action'
store.dispatch({ type: "undefinedAction", payload: 15 });
console.log(store.getState());

store.dispatch({ type: "increment" });
console.log(store.getState());

store.dispatch({ type: "decrement" });
console.log(store.getState());

store.dispatch({ type: "set", payload: 15 });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
