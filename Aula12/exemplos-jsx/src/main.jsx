// Importa StrictMode para ajudar a identificar problemas no aplicativo
import { StrictMode } from "react";
// Importa createRoot para criar o ponto de entrada da aplicação React
import { createRoot } from "react-dom/client";
// Importa o arquivo de estilos CSS global
import "./index.css";
// Importa o componente principal App
import App from "./App.jsx";

// Log para depuração
console.log("Aplicação iniciada");

// Cria a raiz da aplicação React e renderiza o componente App dentro do elemento com id 'root'
// StrictMode ativa verificações e avisos adicionais em desenvolvimento
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
