import React, { useState } from "react";
import MeuBotao from "./MeuBotao";

function App() {
  const [cliques, setCliques] = useState(0);

  return (
    <div style={{ padding: 32, textAlign: "center" }}>
      <h1>Exemplo de Teste com MeuBotao</h1>
      <MeuBotao onClick={() => setCliques((c) => c + 1)}>Clique aqui</MeuBotao>
      <p>Quantidade de cliques: {cliques}</p>
    </div>
  );
}

export default App;
