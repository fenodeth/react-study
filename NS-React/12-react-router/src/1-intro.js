import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* captura el evento de click por defecto y almacena el estado (historial) */}
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/portafolio"}>Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" exact element={<h1>Inicio</h1>}></Route>
          <Route path="/Portafolio/*" element={<h1>Portafolio</h1>}></Route>
        </Routes>
      </section>
    </div>
  );
};

export default App;
