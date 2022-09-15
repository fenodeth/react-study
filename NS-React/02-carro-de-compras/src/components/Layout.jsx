import React from "react";

const styles = {
  layout: {
    backgroundColor: "#FFF",
    color: "#0A283E",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  container: { width: "1200px" },
};

const Layout = (props) => {
  return (
    <div style={styles.layout}>
      <div style={styles.container}>{props.children}</div>
    </div>
  );
};

export default Layout;
