# Exemplo de Gerenciamento de Rotas com React Router

Este exemplo mostra como configurar rotas em uma aplicação React utilizando a biblioteca **React Router**.

## Instalação

No terminal, execute:

```bash
npm install react-router-dom
```

## Exemplo de Código

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Página Inicial</h2>;
}

function Sobre() {
  return <h2>Sobre</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Funcionamento

- A navegação é feita pelos componentes `<Link>`.
- O componente `<Routes>` define as rotas e qual componente será exibido para cada caminho.
- Ao acessar `/`, a página inicial é exibida.
- Ao acessar `/sobre`, a página Sobre é exibida.

---
