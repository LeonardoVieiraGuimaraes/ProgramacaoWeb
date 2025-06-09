import React, { Component } from "react";

// Componente que exibe heading e content do estado
export default class MyComponent02 extends Component {
  // Estado inicial com heading e content
  state = {
    heading: "React Awesomesauce (Busy)",
    content: "Loading...",
  };

  render() {
    // Desestruturação do estado para facilitar o uso no JSX
    const { heading, content } = this.state;
    // O JSX exibe o heading e o content
    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}
