# Requisições HTTP - CRUD de Produtos

Esta pasta contém exemplos de aplicações que fazem requisições HTTP para realizar operações CRUD (Create, Read, Update, Delete) de produtos em Web (React) e Mobile (Expo).

## 📚 Conteúdo

- exemplo01 — Aplicação Web com React + Vite
- exemplo02 — Aplicação Mobile com React Native + Expo

## 🌐 API Utilizada

Base URL: `https://proweb.leoproti.com.br/produtos`

Swagger: https://proweb.leoproti.com.br/swagger-ui/index.html

### Endpoints

- GET /produtos — lista todos os produtos
- GET /produtos/{id} — obtém um produto
- POST /produtos — cria um produto
- PUT /produtos/{id} — atualiza um produto
- DELETE /produtos/{id} — remove um produto

### Estrutura do Produto

```json
{
  "id": 1,
  "nome": "Notebook",
  "preco": 3500.00
}
```

## 📱 Exemplo 01 - Web (React + Vite)

Tecnologias: React 19, Vite 7, Axios, CSS

Estrutura:

```
exemplo01/
├─ src/
│  ├─ components/
│  │  ├─ ProdutoForm.jsx / .css
│  │  └─ ProdutoLista.jsx / .css
│  ├─ services/produtoService.js
│  ├─ App.jsx / App.css
│  └─ main.jsx
└─ package.json
```

Como executar:

```
cd exemplo01
npm install
npm run dev
```

Build de produção:

```
npm run build
npm run preview
```

## 📲 Exemplo 02 - Mobile (Expo + React Native)

Tecnologias: React Native 0.81, Expo 54, Expo Router 6, React Native Paper, Axios, TypeScript

Estrutura:

```
exemplo02/
├─ app/
│  ├─ _layout.tsx
│  ├─ index.tsx
│  ├─ create.tsx
│  └─ edit/[id].tsx
├─ services/produtoService.ts
└─ package.json
```

Como executar:

```
cd exemplo02
npm install
npm start
```

No terminal: pressione `a` (Android), `i` (iOS/macOS), `w` (Web) ou escaneie o QR Code com o app Expo Go.

Build/Export:

```
npm run build
npx expo export
```

## 🔌 Exemplo de Requisição com Axios

```js
// GET todos os produtos
axios.get("https://proweb.leoproti.com.br/produtos")

// POST novo produto
axios.post("https://proweb.leoproti.com.br/produtos", { nome: "Produto", preco: 10 })

// PUT atualizar produto
axios.put("https://proweb.leoproti.com.br/produtos/1", { nome: "Produto Atualizado", preco: 20 })

// DELETE remover produto
axios.delete("https://proweb.leoproti.com.br/produtos/1")
```

## 📝 Observações

- A API é pública e os dados são compartilhados; evite dados sensíveis.
- Para produção, implemente autenticação/autorização e validações no backend.
- Código comentado com foco didático, ideal para estudos e aulas.

---

## 🔗 Recursos

- React: https://react.dev/
- Vite: https://vite.dev/
- Expo: https://docs.expo.dev/
- React Native: https://reactnative.dev/
- Axios: https://axios-http.com/
- React Native Paper: https://reactnativepaper.com/
- Expo Router: https://docs.expo.dev/router/introduction/
