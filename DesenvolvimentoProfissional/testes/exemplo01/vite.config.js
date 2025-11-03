import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração do Vite para projeto React + Vitest
// - plugins: habilita React com Fast Refresh.
// - test.environment: usa jsdom para simular o DOM em testes de componentes.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    // Torna describe/it/expect globais para compatibilidade com jest-dom
    globals: true,
    // Dica: se preferir carregar matchers do jest-dom automaticamente,
    // crie um arquivo de setup (ex.: src/setupTests.js) e descomente:
    // setupFiles: ["./src/setupTests.js"],
  },
});
