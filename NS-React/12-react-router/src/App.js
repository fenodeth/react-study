import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const App = () => {
  // http://localhost:3000/?chanchito=feliz&nombre=felipe
  const query = useQuery();
  const chancho = query.get('chanchito');
  const nombre = query.get('nombre');

  console.log({chancho, nombre});

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
