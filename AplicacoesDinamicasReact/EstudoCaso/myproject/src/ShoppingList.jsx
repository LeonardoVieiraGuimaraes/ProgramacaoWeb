// Importa o React para poder criar componentes de classe
import React from "react";

// Define o componente ShoppingList como uma subclasse de React.Component
class ShoppingList extends React.Component {
  // O método render retorna o que será exibido na tela
  render() {
    return (
      // Um elemento div que contém todo o conteúdo do componente
      <div>
        {/* Título que mostra o nome passado via props */}
        <h1>Lista de compras para {this.props.name}</h1>
        {/* Lista de itens fixos */}
        <ul>
          <li>Maçãs</li>
          <li>Pão</li>
          <li>Leite</li>
        </ul>
      </div>
    );
  }
}

// Exporta o componente para ser usado em outros arquivos
export default ShoppingList;
