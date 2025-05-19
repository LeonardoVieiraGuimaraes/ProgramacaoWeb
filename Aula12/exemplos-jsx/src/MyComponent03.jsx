// Importa React e Component do pacote 'react'
import React, { Component } from "react";

// Define e exporta a classe MyComponent03
export default class MyComponent03 extends Component {
  // Estado inicial com heading e content
  state = {
    heading: "React Awesomesauce (Busy)",
    content: "Loading...",
  };

  // Após o componente ser montado, agenda uma atualização de estado em 3 segundos
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        heading: "React Awesomesauce",
        content: "Conteúdo carregado!",
      });
    }, 3000);
  }

  render() {
    const { heading, content } = this.state;
    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}
