import React from "react";
import Carro from "./Carro";
import Logo from "./Logo";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};

const Navbar = (props) => {
  const { carro, visible, showCarro } = props;

  return (
    <nav style={styles.navbar}>
      <Logo />
      <Carro carro={carro} visible={visible} showCarro={showCarro} />
    </nav>
  );
};

export default Navbar;
