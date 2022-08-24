import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
// import FirstApp from "./FirstApp";
// import HelloWorldApp from "./HelloWolrdApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <CounterApp value={5}/>

    {/* <HelloWorldApp />
    <FirstApp /> */}
    {/* <FirstApp title="Hola, soy Goku" subtitle={123}/> */}
  </React.StrictMode>
);
