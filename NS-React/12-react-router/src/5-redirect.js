import React from "react";
import { Routes, Route, Link, Redirect } from "react-router-dom";

const Portafolio = () => {
  const loggedIn = false;

  if (!loggedIn) {
    return <Redirect push to="/" />;
  }

  return <h1>Portafolio</h1>;
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
            <Link to={"/perfil"}>Perfil</Link>
          </li>
          <li>
            <Link to={"/portafolio"}>
              <Portafolio />
            </Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Redirect exact from="/" to="/inicio" />
          <Route exact path="/inicio" element={<h1>Inicio</h1>}></Route>
          <Route exact path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route
            exact
            path="/Portafolio/*"
            element={<h1>Portafolio</h1>}
          ></Route>
        </Routes>
      </section>
    </div>
  );
};

export default App;
