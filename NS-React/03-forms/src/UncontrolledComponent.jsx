import React from "react";

const App = () => {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    // Toma un arreglo a partir de sus índices y genera labels y values
    console.log(Object.fromEntries(data));
  };

  return (
    <>
      <form onSubmit={submit}>
        <div>
          <span>lala</span>
          <input name="campo" />
          <input name="campo2" />
          <input type="file" name="archivo" />
          <input type="submit" value="enviar" />
        </div>
      </form>
    </>
  );
};

export default App;
