// Ponto de entrada do aplicativo React.
// - createRoot monta a aplicação no elemento #root (ver index.html)
// - StrictMode ajuda a identificar problemas de ciclo de vida e efeitos
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
