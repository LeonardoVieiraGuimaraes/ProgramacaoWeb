// Entrada alternativa (não utilizada pelo Vite por padrão)
// Mantido apenas como exemplo isolado do componente MeuBotao
// A aplicação principal usa src/main.jsx como ponto de entrada
import React from "react";
import ReactDOM from "react-dom/client";
import MeuBotao from "./MeuBotao";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MeuBotao onClick={() => alert("Botão clicado!")}>Clique aqui</MeuBotao>
);
