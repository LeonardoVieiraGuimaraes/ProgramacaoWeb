# Exemplo 02 — Rotas (First, Second, Third)

Este exemplo mostra o conceito de “cenas” trocadas pelo navegador, inspirado no padrão da função `renderScene(route)` do antigo `<Navigator>` do React Native. Aqui usamos `react-router-dom` (web) para declarar rotas:

- `/` → First
- `/second` → Second
- `/third` → Third

Há um pequeno menu de navegação no topo com links para cada rota.

## Como rodar

No PowerShell, dentro desta pasta:

```powershell
npm ci
npm run dev
```

Build de produção e preview:

```powershell
npm run build
npm run preview
```

## Onde estão as rotas

- `src/main.jsx`: envolve a aplicação com `<BrowserRouter>`.
- `src/App.jsx`: define as `<Routes>` e o menu com `<Link>`.
- `src/pages/{First,Second,Third}.jsx`: componentes renderizados por cada rota.

Isso reproduz a ideia de “pegar a Scene da rota atual e renderizá-la”, mas com a API moderna do React Router.
