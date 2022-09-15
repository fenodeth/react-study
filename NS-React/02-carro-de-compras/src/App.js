import "./App.css";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  let state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
  };

  const [carro, setCarro] = useState([]);

  const agregarAlCarro = (producto) => {
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((c) =>
        c.name === producto.name ? { ...c, cantidad: c.cantidad + 1 } : c
      );
      setCarro(newCarro);
    } else {
      setCarro([...carro, { ...producto, cantidad: 1 }]);
    }
  };

  const [visible, setVisible] = useState(false);

  const showCarro = () => {
    if (!carro.length) {
      return;
    } else {
      setVisible(!visible);
    }
  };

  return (
    <div>
      <Navbar carro={carro} visible={visible} showCarro={showCarro} />
      <Layout>
        <Title />
        <Productos
          agregarAlCarro={agregarAlCarro}
          productos={state.productos}
        />
      </Layout>
    </div>
  );
};

export default App;
