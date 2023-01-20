import React from "react";
import { Routes, Route, useParams, NavLink } from "react-router-dom";

const Project = () => {
  const params = useParams();
  const { projectId } = params;
  return <h2>Proyecto {projectId}</h2>;
};

const Portafolio = () => {
  return (
    <>
      <div>
        <h1>Portafolio</h1>
        <ul>
          <li>
            {/* NavLink calcula internamente si está activo/renderiza o no */}
            <NavLink
              activeClassname="activado"
              activeStyle={{ fontSize: 20 }}
              exact
              to={`/portafolio/proyecto-1`}
            >
              Proyecto 1
            </NavLink>
          </li>
          <li>
            <NavLink exact to={"/portafolio/proyecto-2"}>
              Proyecto 2
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path=":projectId" element={<Project />} />
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
            <NavLink exact to={"/"}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              isActive={(match, location) => {
                console.log( match, location );
              }}
              exact
              to={"/portafolio"}
            >
              Portafolio
            </NavLink>
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
