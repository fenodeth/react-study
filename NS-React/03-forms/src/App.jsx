import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: "inicial",
    texto: "por defecto",
    select: "",
    check: false,
    estado: "feliz",
  });

  const handleChange = ({ target }) => {
    const curval = target.type === "checkbox" ? target.checked : target.value;
    setValue({ ...value, [target.name]: curval });
    console.log(value);
  };

  return (
    <div>
      {value.length < 5 && <span>longitud minima de 5</span>}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" value={value.texto} onChange={handleChange} />
      <select name="select" value={value.select} onChange={handleChange}>
        <option value="">-- Seleccione --</option>
        <option value="chanchofeliz">Chancho Feliz</option>
        <option value="chanchitofeliz">Chanchito Feliz</option>
        <option value="chanchitotriste">Chanchito Triste</option>
      </select>
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      /> 
      <div>
        <label>Chancho</label>
        <input
          onChange={handleChange}
          type="radio"
          value="feliz"
          name="estado"
          checked={value.estado === "feliz"}
        /> Feliz
        <input
          onChange={handleChange}
          type="radio"
          value="triste"
          name="estado"
          checked={value.estado === "triste"}
        /> Triste
        <input
          onChange={handleChange}
          type="radio"
          value="otro"
          name="estado"
          checked={value.estado === "otro"}
        /> Otro
      </div>
    </div>
  );
};

export default App;
