# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Testes com Vitest em Projetos Vite + React

Este exemplo mostra como configurar e rodar testes automatizados em projetos React criados com Vite, utilizando o **Vitest** e a **Testing Library**.

## O que é o Vitest?

Vitest é um framework de testes moderno, rápido e compatível com Jest, feito especialmente para projetos que usam Vite. Ele permite rodar testes unitários e de integração em projetos React/Vite de forma simples e eficiente.

## Instalação das Dependências

Execute no terminal:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

## Configuração do Ambiente de Teste

No arquivo `vite.config.js`, adicione a configuração para o ambiente de testes ser `jsdom` (necessário para testar componentes React):

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

## Script para Rodar os Testes

No seu `package.json`, adicione:

```json
"scripts": {
  "test": "vitest"
}
```

## Exemplo de Componente e Teste

### MeuBotao.jsx

```jsx
import React from "react";
export default function MeuBotao({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
```

### MeuBotao.test.jsx

```jsx
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
```

## Como Executar os Testes

No terminal, rode:

```bash
npm test
```
ou
```bash
npx vitest
```

## Dicas

- Certifique-se de que o ambiente de teste está como `jsdom` no `vite.config.js`.
- Use sempre `vi.fn()` para mocks no Vitest (não use `jest.fn()`).
- Os arquivos de teste devem terminar com `.test.jsx` ou `.spec.jsx`.

## Referências

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library React](https://testing-library.com/docs/react-testing-library/intro/)
