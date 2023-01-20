import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// importar reducer desde app no es buena practica, por el momento es conceptual
import App from "./App";
import { reducer } from "./features/todos";
import { asyncMiddleware } from "./middlewares/async";
import { createStore, applyMiddleware } from "redux";
// Componente de alto orden que utiliza la render prop para manejar el estado de la app
// va a contener el store de redux
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(asyncMiddleware));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
