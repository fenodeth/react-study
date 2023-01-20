// Pasar props entre el arbol de componentes sin necesidad de pasar por cada uno de ellos
import React, {
    createContext,
    useContext, // utilizar contextos dentro de componentes funcionales
  } from "react";
  
  // Funcion que recibe un argumento como valor por defecto, cualquier tipo de dato
  const ContextDefault = createContext("valor por defecto");
  const Context2 = createContext("valor por defecto 2");
  
  // Provider es el encargado de pasar el contexto a componentes hijos
  // Es buena práctica pasar el nombre del proveedor al contexto
  const DefaultProvider = ({ children }) => {
    return <ContextDefault.Provider value={"mi valor"}>{children}</ContextDefault.Provider>;
  };
  
  const Contenido = () => {
    const ctx = useContext(ContextDefault); // abreviacion de context
    return (
      <div>
        <p>{ctx}</p>
      </div>
    );
  };
  
  const Contenido2 = () => {
    const ctx = useContext(Context2); // abreviacion de context
    return (
      <div>
        <p>{ctx}</p>
      </div>
    );
  };
  
  const App = () => {
    return (
      <>
        <DefaultProvider>
          <Contenido />
          <Contenido2 />
        </DefaultProvider>
      </>
    );
  };
  
  export default App;
  