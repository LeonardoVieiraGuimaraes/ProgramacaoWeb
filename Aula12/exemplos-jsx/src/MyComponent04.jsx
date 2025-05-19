// Exemplo funcional de montagem do React com logs do ciclo de vida usando componente de classe
import React, { Component } from "react";

export default class MyComponent04 extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // Inicializa o estado
    // O construtor é chamado primeiro, ideal para inicializar estado e fazer binds
    console.log("Hello from constructor");
  }

  // getDerivedStateFromProps é chamado antes do render, tanto na montagem quanto na atualização
  static getDerivedStateFromProps() {
    // props está disponível, mas não é usada neste exemplo
    console.log("Hello from before rendering (getDerivedStateFromProps)");
    return null;
  }

  // componentDidMount é chamado após o componente ser montado no DOM
  componentDidMount() {
    console.log("Hello from after mounting (componentDidMount)");
  }

  render() {
    // O método render é chamado para desenhar o componente na tela
    console.log("Hello from render");
    return (
      <div>
        <h2>Exemplo de Montagem do React</h2>
        <p>
          Abra o console do navegador para ver a ordem dos métodos do ciclo de
          vida:
        </p>
        <ul>
          <li>constructor</li>
          <li>getDerivedStateFromProps</li>
          <li>render</li>
          <li>componentDidMount</li>
        </ul>
        <strong>Hello!</strong>
      </div>
    );
  }
}
