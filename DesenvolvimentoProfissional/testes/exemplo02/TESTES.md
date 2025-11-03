# Exemplo 02 - Testes com Vitest e React + TypeScript

Este projeto demonstra como configurar e usar o **Vitest** para realizar testes em uma aplicação React com TypeScript.

## 📦 Dependências Instaladas

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

## ⚙️ Configuração

### 1. `package.json`
Adicione o script de teste:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

### 2. `vite.config.ts`
Configure o Vitest:

```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
```

### 3. `tsconfig.app.json`
Adicione os tipos do Vitest:

```json
{
  "compilerOptions": {
    "types": ["vite/client", "vitest/globals"]
  }
}
```

### 4. `src/setupTests.ts`
Arquivo de configuração inicial para os testes:

```typescript
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})
```

## 🧪 Exemplos de Testes

### Teste Unitário - Função `sum`

**Arquivo:** `src/sum.ts`
```typescript
export function sum(a: number, b: number): number {
  return a + b
}
```

**Arquivo de Teste:** `src/sum.test.ts`
```typescript
import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

### Teste de Componente React - `App`

**Arquivo de Teste:** `src/App.test.tsx`
```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import App from './App'

describe('App Component', () => {
  test('renders Vite + React heading', () => {
    render(<App />)
    const heading = screen.getByText(/Vite \+ React/i)
    expect(heading).toBeDefined()
  })

  test('increments counter when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    
    // Clica no botão
    fireEvent.click(button)
    
    // Verifica se o contador incrementou
    expect(button.textContent).toContain('count is 1')
  })
})
```

## 🚀 Executando os Testes

### Modo Watch (desenvolvimento)
```bash
npm test
```

### Executar uma vez
```bash
npx vitest run
```

### Com relatório detalhado
```bash
npx vitest run --reporter=verbose
```

## ✅ Resultados dos Testes

```
✓ src/sum.test.ts > adds 1 + 2 to equal 3
✓ src/App.test.tsx > App Component > renders Vite + React heading
✓ src/App.test.tsx > App Component > increments counter when button is clicked

Test Files  2 passed (2)
Tests       3 passed (3)
```

## 📚 Recursos

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library React](https://testing-library.com/react)
- [Testing Library Jest DOM](https://testing-library.com/docs/ecosystem-jest-dom/)

## 💡 Dicas

1. **Globals**: Com `globals: true` no `vite.config.ts`, você não precisa importar `describe`, `test`, `expect` em cada arquivo
2. **Environment**: `jsdom` simula um navegador para testar componentes React
3. **Setup Files**: Use para configurações globais que devem rodar antes de cada teste
4. **Watch Mode**: Útil durante desenvolvimento, reexecuta testes automaticamente
