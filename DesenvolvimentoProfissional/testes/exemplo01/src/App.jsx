import React, { useState } from "react";
import MeuBotao from "./MeuBotao";

// Componente raiz da aplicação de exemplo
// Demonstra o uso do MeuBotao atualizando o contador de cliques no estado local
function App() {
  // Estado simples para contar cliques no botão
  const [cliques, setCliques] = useState(0);

  return (
    <div style={{ padding: 32, textAlign: "center" }}>
      <h1>Exemplo de Teste com MeuBotao</h1>
      {/* Ao clicar, incrementa o contador */}
      <MeuBotao onClick={() => setCliques((c) => c + 1)}>Clique aqui</MeuBotao>
      <p>Quantidade de cliques: {cliques}</p>
    </div>
  );
}

export default App;
