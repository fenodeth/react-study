import React from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
  button: {
    backgroundColor: "#359A2C",
    color: "#FFF",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    top: 50,
    left: -15,
  },
};

const Carro = (props) => {
  const { carro, visible, showCarro } = props;
  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <>
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 && <BubbleAlert value={cantidad} />}
        </span>
        <button style={styles.button} onClick={() => showCarro()}>
          Carro
        </button>
      </div>
      {visible && <DetallesCarro carro={carro} />}
    </>
  );
};

export default Carro;
