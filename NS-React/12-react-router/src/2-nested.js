import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Portafolio = () => {
  return (
    <>
      <div>
        <h1>Portafolio</h1>
        <ul>
          <li>
            <Link to={"/portafolio/proyecto-1"}>Proyecto 1</Link>
          </li>
          <li>
            <Link to={"/portafolio/proyecto-2"}>Proyecto 2</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="proyecto-1" element={<h2>Proyecto 1</h2>} />
        </Routes>
        <Routes>
          <Route path="proyecto-2" element={<h2>Proyecto 2</h2>} />
        </Routes>
      </div>
    </>
  );
};

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
          <Route path="/" exact element={<h1>Inicio</h1>} />
          <Route path="/Portafolio/*" element={<Portafolio />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
