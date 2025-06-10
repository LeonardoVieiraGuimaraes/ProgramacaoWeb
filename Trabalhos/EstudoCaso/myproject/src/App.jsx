// Importa o React para usar JSX
import React from "react";
// Importa o componente ShoppingList
import ShoppingList from "./ShoppingList";

// Função principal do aplicativo
function App() {
  return (
    // Renderiza o componente ShoppingList passando a prop "name"
    <div>
      <ShoppingList name="Maria" />
    </div>
  );
}

// Exporta o componente App para ser usado no ponto de entrada da aplicação
export default App;
