import React, { Component } from "react";
import { useContador } from "./hooks/useContador";

class AppClass extends Component {
  state = { contador: 0 };
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        contador: {this.state.contador}
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0);
  return (
    <div>
      <AppClass />
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;
