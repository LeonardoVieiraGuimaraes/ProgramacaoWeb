# Tutorial React 2025: Vite + React e Next.js

Este tutorial apresenta um guia atualizado e detalhado para iniciar projetos com **Vite + React** e **Next.js** em 2025, cobrindo desde a instalação até conceitos modernos como rotas, hooks, SSR, API routes, consumo de dados e boas práticas.

---

## 1. O que são Vite + React e Next.js?

- **Vite + React**: Ferramenta moderna para criar projetos React rapidamente, ideal para aprender os fundamentos do React puro.
- **Next.js**: Framework React para produção, com recursos avançados como rotas automáticas, SSR, SSG, API routes e otimização.

---

## 2. Links para documentação

- [Documentação Oficial React](https://react.dev/)
- [Documentação Vite](https://vitejs.dev/guide/)
- [Documentação Next.js](https://nextjs.org/docs)

---

## 3. Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

---

## 4. Criando um novo projeto com Vite + React

```bash
npm create vite@latest meu-projeto-react -- --template react
cd meu-projeto-react
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Estrutura de Pastas (Vite + React)

```
meu-projeto-react/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   └── assets/
├── package.json
└── ...
```

### Exemplo de componente React

```jsx
// src/components/OlaMundo.jsx
import React from "react";
export default function OlaMundo() {
  return <h2>Olá, React 2025!</h2>;
}
```

```jsx
// src/App.jsx
import OlaMundo from "./components/OlaMundo";
function App() {
  return (
    <div>
      <h1>Meu Projeto React</h1>
      <OlaMundo />
    </div>
  );
}
export default App;
```

### Hooks (useState/useEffect) no Vite + React

```jsx
import { useState, useEffect } from "react";
export default function Contador() {
  const [contagem, setContagem] = useState(0);
  useEffect(() => {
    document.title = `Contagem: ${contagem}`;
  }, [contagem]);
  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>Clique aqui</button>
    </div>
  );
}
```

### Roteamento no Vite + React

Instale o React Router:

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
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

---

## 5. Criando um novo projeto Next.js

```bash
npx create-next-app@latest meu-projeto-next
cd meu-projeto-next
npm run dev
```

Acesse `http://localhost:3000` no navegador.

### Estrutura de Pastas (Next.js)

```
meu-projeto-next/
│
├── app/                # Nova estrutura de rotas (Next 13+)
│   └── page.jsx        # Página principal
├── public/             # Arquivos estáticos
├── styles/             # CSS global e módulos
├── package.json
└── ...
```

### Criando páginas e rotas automáticas

```jsx
// app/page.jsx
export default function Home() {
  return <h1>Bem-vindo ao Next.js 2025!</h1>;
}
```

```jsx
// app/sobre/page.jsx
export default function Sobre() {
  return <h2>Sobre o projeto Next.js</h2>;
}
```

### Navegação entre páginas no Next.js

```jsx
import Link from "next/link";
export default function Menu() {
  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/sobre">Sobre</Link>
    </nav>
  );
}
```

### Fetch de dados (SSR/SSG) no Next.js

```jsx
// app/usuarios/page.jsx
async function getUsuarios() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  return resp.json();
}
export default async function Usuarios() {
  const usuarios = await getUsuarios();
  return (
    <ul>
      {usuarios.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

### API Routes no Next.js

```jsx
// app/api/hello/route.js
export async function GET() {
  return Response.json({ message: "Olá da API Next.js!" });
}
```
Acesse em `/api/hello`.

---

## 6. Qual a melhor opção para estudos?

- **Vite + React**  
  - Ideal para aprender os fundamentos do React puro, componentes, hooks e estado.
  - Estrutura simples, fácil de entender para iniciantes.
  - Não possui recursos avançados como rotas automáticas, SSR ou API routes nativamente.

- **Next.js**  
  - Indicado para aprender React já com recursos modernos de mercado: rotas automáticas, SSR (Server Side Rendering), SSG (Static Site Generation), API routes, otimização de imagens, etc.
  - Excelente para projetos profissionais e para quem quer aprender como funcionam aplicações React em produção.
  - Estrutura um pouco mais complexa, mas muito poderosa.

**Recomendação para estudos:**
- Se você está começando do zero, inicie com Vite + React para dominar o básico.
- Se já entende o básico de React, avance para Next.js para aprender recursos avançados e práticas de mercado.

Ambos são ótimas escolhas e você pode migrar de um para o outro facilmente conforme evolui nos estudos.

---

Desenvolvido para estudos de React e Next.js em 2025.