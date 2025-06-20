# Testes em Aplicações React

Testar aplicações React é fundamental para garantir a qualidade, confiabilidade e manutenção do código. Existem diversas bibliotecas e ferramentas para facilitar a criação de testes automatizados.

## Principais Bibliotecas de Teste

### 1. Jest

- **Descrição:** Framework de testes em JavaScript criado pelo Facebook, amplamente utilizado em projetos React.
- **Vantagens:** Simples de configurar, rápido, suporta mocks, snapshots e integração com outras ferramentas.
- **Documentação:** [Jest](https://jestjs.io/)

### 2. React Testing Library

- **Descrição:** Biblioteca focada em testar componentes React de forma semelhante ao uso real pelo usuário.
- **Vantagens:** Incentiva boas práticas, simula interações reais, fácil integração com Jest.
- **Documentação:** [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### 3. Cypress

- **Descrição:** Ferramenta para testes end-to-end (E2E) em aplicações web.
- **Vantagens:** Executa testes no navegador real, ideal para testar fluxos completos de usuário.
- **Documentação:** [Cypress](https://www.cypress.io/)

## Como Instalar

Para instalar Jest e React Testing Library em um projeto React, execute:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Usando Vitest (Recomendado para projetos Vite)

Se seu projeto utiliza Vite, recomenda-se usar o **Vitest** para testes, pois ele é mais rápido e integrado ao ecossistema Vite. Para instalar:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

No arquivo `vite.config.js`, configure o ambiente de teste para `jsdom`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

## Exemplo de Teste com Jest e React Testing Library

```jsx
// Exemplo: src/components/MeuBotao.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import MeuBotao from './MeuBotao';

test('deve exibir o texto e responder ao clique', () => {
  const aoClicar = jest.fn();
  render(<MeuBotao onClick={aoClicar}>Clique aqui</MeuBotao>);
  const botao = screen.getByText('Clique aqui');
  fireEvent.click(botao);
  expect(aoClicar).toHaveBeenCalledTimes(1);
});
```

## Como Executar os Testes

No terminal, execute:

```bash
npm test
```
ou
```bash
npx jest
```

### Como Executar os Testes com Vitest

Para rodar todos os testes do projeto com Vitest:

```bash
npx vitest
```

Para rodar um teste específico (por exemplo, um teste de controle):

```bash
npx vitest run testes/exemplo01/src/MeuBotao.control.test.jsx
```

Você também pode rodar em modo interativo (watch):

```bash
npx vitest --watch
```

> **Importante:** Certifique-se de que o ambiente de teste está configurado para `jsdom` no `vite.config.js` para que os testes de componentes React funcionem corretamente.

## Dicas de Boas Práticas

- Escreva testes que simulem o uso real do componente.
- Prefira selecionar elementos pelo texto visível ou papel (role), não por classes ou IDs.
- Mantenha os testes próximos dos componentes testados (ex: `MeuComponente.test.jsx`).

## Referências

- [Documentação Jest](https://jestjs.io/)
- [Documentação React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Documentação Cypress](https://docs.cypress.io/)

---
