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
            <Link to={"/perfil"}>Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>}></Route>
          <Route exact path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="*" element={<h1>404: No encontrado</h1>}></Route>
        </Routes>
      </section>
    </div>
  );
};

export default App;
