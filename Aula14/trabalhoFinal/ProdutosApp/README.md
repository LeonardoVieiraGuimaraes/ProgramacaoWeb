# Trabalho Final - React Native CRUD Produtos (Expo)

Este projeto é uma aplicação **React Native** criada com **Expo** que realiza operações de CRUD (Create, Read, Update, Delete) para produtos, utilizando a mesma API pública: [http://leoproti.com.br:8004/produtos](http://leoproti.com.br:8004/produtos).

## Funcionalidades

- Listagem de produtos
- Cadastro de novo produto
- Edição de produto existente
- Exclusão de produto
- Interface mobile moderna e responsiva
- Navegação entre telas com React Navigation

## Estrutura esperada do produto

```json
{
  "id": 0,
  "nome": "string",
  "preco": 0
}
```

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (facilita o desenvolvimento e testes)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)

## Instalação do Projeto

1. Instale o Expo CLI globalmente (caso ainda não tenha):

   ```bash
   npm install -g expo-cli
   ```

2. Crie o projeto com Expo (caso ainda não tenha):

   ```bash
   npx create-expo-app@latest app
   cd app
   ```

3. Instale as dependências principais:

   ```bash
   npm install @react-navigation/native @react-navigation/native-stack
   npm install axios
   npx expo install react-native-screens react-native-safe-area-context
   ```

## Como rodar o projeto

```bash
expo start
```

Abra o app no seu emulador ou dispositivo usando o QR Code exibido no terminal.

## Estrutura de Pastas Sugerida

- `src/screens` — Telas principais (Listar, Criar, Editar)
- `src/components` — Componentes reutilizáveis (Formulário, Lista, etc)
- `src/services` — Serviços para requisições HTTP (Axios)
- `src/router` — Definição das rotas de navegação

## Rotas da Aplicação

- `Produtos` — Lista todos os produtos
- `NovoProduto` — Tela para cadastrar novo produto
- `EditarProduto` — Tela para editar produto existente

## Exemplo de Requisição para a API

```js
// GET todos os produtos
axios.get("http://leoproti.com.br:8004/produtos")

// POST novo produto
axios.post("http://leoproti.com.br:8004/produtos", { nome: "Produto", preco: 10 })

// PUT atualizar produto
axios.put("http://leoproti.com.br:8004/produtos/1", { nome: "Produto Atualizado", preco: 20 })

// DELETE remover produto
axios.delete("http://leoproti.com.br:8004/produtos/1")
```

## Observações

- O projeto utiliza React Navigation para navegação entre telas.
- Todas as operações de CRUD são realizadas diretamente na API fornecida.
- Para rodar no dispositivo físico, use o app Expo Go.

---

Siga as instruções acima para rodar e explorar o projeto no seu celular ou emulador!

# Expo Router - Navegação no React Native com Expo

O **Expo Router** é uma solução moderna de navegação para projetos React Native criados com Expo. Ele permite criar rotas e navegação de forma semelhante ao Next.js, usando a estrutura de pastas e arquivos para definir as telas do app.

## Como funciona o Expo Router?

- **Arquivos e pastas dentro da pasta `app/` representam rotas.**
  - `app/index.tsx` → rota inicial `/`
  - `app/produtos.tsx` → rota `/produtos`
  - `app/produtos/[id].tsx` → rota dinâmica `/produtos/123`
- **Não é necessário configurar stacks manualmente.**
- **A navegação é feita usando hooks e componentes do próprio Expo Router.**

## Exemplo de Estrutura

```
app/
  index.tsx           // Tela inicial
  produtos.tsx        // Lista de produtos
  produtos/
    [id].tsx          // Tela de detalhes/edição de produto
```

## Como navegar entre telas

Use o hook `useRouter` do Expo Router:

```tsx
import { useRouter } from "expo-router";

const router = useRouter();

router.push("/produtos"); // Navega para a lista de produtos
router.push("/produtos/1"); // Navega para o produto de id 1
router.back(); // Volta para a tela anterior
```

## Como rodar um projeto com Expo Router

1. Crie o projeto com Expo:
   ```bash
   npx create-expo-app@latest app
   cd app
   ```

2. Instale o Expo Router:
   ```bash
   npm install expo-router
   ```

3. No arquivo `app.json` ou `app.config.js`, defina o entryPoint:
   ```json
   {
     "expo": {
       "entryPoint": "./node_modules/expo-router/entry"
     }
   }
   ```

4. Estruture suas telas dentro da pasta `app/` conforme mostrado acima.

5. Rode o projeto normalmente:
   ```bash
   npx expo start
   ```

## Observações

- O arquivo `app/index.tsx` é a tela inicial.
- Não use `App.tsx` junto com Expo Router, pois o roteamento é feito a partir da pasta `app/`.
- Para rotas aninhadas e dinâmicas, use subpastas e colchetes (ex: `[id].tsx`).

## Referências

- [Documentação Expo Router](https://expo.github.io/router/docs)
- [Exemplo oficial](https://github.com/expo/router/tree/main/example)

---
