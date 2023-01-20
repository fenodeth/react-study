import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const App = () => {
  const history = useNavigate();
  console.log({ history });

  const forward = () => {
    history(1);
  };

  const back = () => {
    history(-1);
  };

  const push = (url) => {
    history(url);
  };

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
        <button onClick={() => back()}>Back</button>
        <button onClick={() => forward()}>Forward</button>
        <button onClick={() => push("/perfil")}>Push</button>
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
