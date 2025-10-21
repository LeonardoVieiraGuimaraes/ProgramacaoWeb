// Importa React e Component do pacote 'react'
import React, { Component } from "react";

// Componente que controla o estado de dois botões
export default class MyComponent01 extends Component {
  // O estado inicial é definido como propriedades booleanas
  state = {
    first: true,
    second: false,
  };

  // O método render() é obrigatório em componentes de classe
  // Ele retorna o JSX que será exibido na tela
  render() {
    // Desestruturação do estado para facilitar o uso no JSX
    const { first, second } = this.state;
    // O JSX usa os valores do estado como a propriedade 'disabled' dos botões
    return (
      // O JSX abaixo define a estrutura visual do componente
      <main>
        <section>
          {/* O botão será desabilitado se 'first' for true */}
          <button disabled={first}>Primeiro botão</button>
        </section>
        <section>
          {/* O botão será desabilitado se 'second' for true */}
          <button disabled={second}>Segundo botão</button>
        </section>
      </main>
    );
  }
}
