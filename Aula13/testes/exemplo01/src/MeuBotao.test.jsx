import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MeuBotao from "./MeuBotao";

describe("MeuBotao", () => {
  it("deve exibir o texto e responder ao clique", () => {
    const aoClicar = vi.fn();
    render(<MeuBotao onClick={aoClicar}>Clique aqui</MeuBotao>);
    const botao = screen.getByText("Clique aqui");
    fireEvent.click(botao);
    expect(aoClicar).toHaveBeenCalledTimes(1);
  });
});

// Possíveis motivos para o teste ter falhado:
//
// 1. O teste ainda está usando `jest.fn()` ao invés de `vi.fn()` do Vitest.
//    - No Vitest, use `vi.fn()` para mocks.
//
// 2. O arquivo de teste pode estar misturando sintaxe do Jest e do Vitest.
//    - Certifique-se de importar e usar `describe`, `it` e `vi` do Vitest.
//
// 3. O componente MeuBotao pode não estar exportando corretamente ou não está sendo importado corretamente.
//
// 4. Alguma dependência pode estar faltando ou incompatível.
//
// 5. O ambiente de teste pode não estar configurado para `jsdom` no vite.config.js.
//
// Para corrigir, garanta que seu teste está assim:
//
// import { render, screen, fireEvent } from "@testing-library/react";
// import { describe, it, expect, vi } from "vitest";
// import MeuBotao from "./MeuBotao";
//
// describe("MeuBotao", () => {
//   it("deve exibir o texto e responder ao clique", () => {
//     const aoClicar = vi.fn();
//     render(<MeuBotao onClick={aoClicar}>Clique aqui</MeuBotao>);
//     const botao = screen.getByText("Clique aqui");
//     fireEvent.click(botao);
//     expect(aoClicar).toHaveBeenCalledTimes(1);
//   });
// });
//
// E rode com: npx vitest
//
// O erro "ReferenceError: document is not defined" ocorre porque o ambiente de teste não está configurado para simular o DOM.
// Para testes de componentes React, é necessário que o ambiente seja 'jsdom'.
//
// Como corrigir:
// 1. No arquivo vite.config.js do seu projeto, adicione (ou ajuste) a configuração de teste:
//
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: 'jsdom'
//   }
// })
//
// 2. Salve o arquivo e rode novamente: npx vitest
//
// Assim, o ambiente de testes terá acesso ao objeto 'document' e o erro será resolvido.
