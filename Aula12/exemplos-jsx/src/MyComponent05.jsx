// Exemplo de ciclo de vida: atualização (updating) em componente de classe React
import React, { Component } from "react";

export default class MyComponent05 extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    console.log("constructor");
  }

  // shouldComponentUpdate permite controlar se o componente deve atualizar
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // Só permite atualizar se o contador for menor ou igual a 5
    if (nextState.contador > 5) {
      console.log("Atualização bloqueada: contador > 5");
      return false;
    }
    return true;
  }

  // getSnapshotBeforeUpdate pode capturar informações antes da atualização do DOM
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    // Retorna null se não precisar capturar nada
    return null;
  }

  // componentDidUpdate é chamado após a atualização
  componentDidUpdate() {
    console.log("componentDidUpdate");
    // Exemplo: pode ser usado para buscar dados ou manipular o DOM
  }

  incrementar = () => {
    this.setState((state) => ({ contador: state.contador + 1 }));
  };

  render() {
    console.log("render");
    return (
      <div>
        <h2>Exemplo de Atualização (Updating)</h2>
        <p>
          Valor do contador: <strong>{this.state.contador}</strong>
        </p>
        <button onClick={this.incrementar}>Incrementar</button>
        <p>
          O contador só pode ser incrementado até 5. Veja o console para a ordem
          dos métodos do ciclo de vida.
        </p>
        <ul>
          <li>shouldComponentUpdate</li>
          <li>getSnapshotBeforeUpdate</li>
          <li>componentDidUpdate</li>
        </ul>
      </div>
    );
  }
}
