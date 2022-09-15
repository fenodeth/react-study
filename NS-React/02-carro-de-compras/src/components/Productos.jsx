import React from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

const Productos = (props) => {
  const { productos, agregarAlCarro } = props;
  return (
    <div style={styles.productos}>
      {productos.map((p) => (
        <Producto agregarAlCarro={agregarAlCarro} key={p.name} producto={p} />
      ))}
    </div>
  );
};

export default Productos;
