import React from "react";
import ReactDOM from "react-dom/client";
import MeuBotao from "./MeuBotao";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MeuBotao onClick={() => alert("Botão clicado!")}>Clique aqui</MeuBotao>
);
