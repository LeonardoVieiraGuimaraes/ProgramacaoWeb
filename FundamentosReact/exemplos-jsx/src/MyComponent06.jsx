import React, { Component } from "react";

export default class MyComponent06 extends Component {
  constructor(props) {
    super(props);
    this.state = { segundos: 0 };
    this.timer = null;
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // Inicia um timer que incrementa o estado a cada segundo
    this.timer = setInterval(() => {
      this.setState((state) => ({ segundos: state.segundos + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // Limpa o timer ao desmontar o componente
    clearInterval(this.timer);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>Exemplo de Desmontagem (Unmounting)</h2>
        <p>
          Segundos desde que o componente foi montado:{" "}
          <strong>{this.state.segundos}</strong>
        </p>
        <p>
          Remova este componente da tela para ver o método{" "}
          <code>componentWillUnmount</code> no console.
        </p>
      </div>
    );
  }
}
