import React, { useRef } from "react";

const App = () => {
  // Acceder a elementos DOM tal como document.getItemById
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    console.log(ref);
    ref.current.innerHTML = "Chanchito Feliz";
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div ref={ref} onClick={() => click()}>
        lala
      </div>
      <div>
        <input ref={inputRef} />
        <button onClick={focus}>Focus</button>
        <div onClick={click} ref={ref}>
          lala
        </div>
      </div>
    </>
  );
};

export default App;
