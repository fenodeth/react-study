import React from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#FFF",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    top: 55,
    right: 50,
  },
  ul: { margin: 0, padding: 0 },
  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

const DetallesCarro = (props) => {
  const { carro } = props;
  return (
    <div style={styles.detallesCarro}>
      <ul style={styles.ul}>
        {carro.map((c) => (
          <li style={styles.producto} key={c.name}>
            <img alt={c.name} src={c.img} width="25" height="16" />
            <p>{c.name}</p>
            <p>{c.cantidad}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetallesCarro;
