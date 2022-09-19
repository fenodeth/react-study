import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef();
  const fileRef = useRef();

  const submit = () => {
    console.log(inputRef.current.value);
    console.log(fileRef.current.files[0]);
    const data = new FormData();
    data.append("archivo", fileRef.current.files[0]);
    data.append("Campo", inputRef.current.value);
    fetch("/lala", { method: "POST", body: data });
  };

  return (
    <div>
      <div>
        <span>lala</span>
        <input type="text" name="campo" ref={inputRef} />
        <input type="file" ref={fileRef} />
      </div>
      <input type="submit" value="enviar" onClick={submit} />
    </div>
  );
};

export default App;
