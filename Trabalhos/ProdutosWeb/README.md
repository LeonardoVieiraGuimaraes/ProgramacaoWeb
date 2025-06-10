# Trabalho Final - Frontend React CRUD Produtos

Este projeto é um frontend em React (Vite) que realiza operações de CRUD (Create, Read, Update, Delete) para produtos, utilizando a API pública disponível em [http://leoproti.com.br:8004/produtos](http://leoproti.com.br:8004/produtos).

## Funcionalidades

- Listagem de produtos
- Cadastro de novo produto
- Edição de produto existente
- Exclusão de produto
- Interface moderna com Material-UI
- Controle de rotas com React Router

## Estrutura esperada do produto

```json
{
  "id": 0,
  "nome": "string",
  "preco": 0
}
```

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material-UI (MUI)](https://mui.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## Instalação do Projeto

1. Instale as dependências principais (execute na pasta do projeto):

   ```bash
   npm install
   ```

2. Se for iniciar do zero ou faltar dependências, instale:

   ```bash
   npm install react react-dom
   npm install react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled axios
   npm install --save-dev vite @vitejs/plugin-react
   ```

## Como rodar o projeto

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Estrutura de Pastas Sugerida

- `src/pages` — Páginas principais (Listar, Criar, Editar)
- `src/components` — Componentes reutilizáveis (Formulário, Tabela, etc)
- `src/services` — Serviços para requisições HTTP (Axios)
- `src/routes` — Definição das rotas da aplicação

## Rotas da Aplicação

- `/` — Lista todos os produtos
- `/novo` — Formulário para cadastrar novo produto
- `/editar/:id` — Formulário para editar produto existente

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

## Solução de Problemas de Dependências

Se aparecer erro de importação para alguma biblioteca, execute o comando correspondente:

- **react-router-dom**  
  ```bash
  npm install react-router-dom
  ```

- **Material-UI**  
  ```bash
  npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
  ```

- **axios**  
  ```bash
  npm install axios
  ```

Depois, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

---

## Erro comum: "Failed to resolve import 'react-router-dom'"

Esse erro indica que a dependência `react-router-dom` não está instalada.  
Execute:

```bash
npm install react-router-dom
```

Repita o comando para outras dependências se necessário, conforme mostrado acima.

---

# Testes com Vite Teste (Vitest)

## Como rodar os testes

### Pré-requisitos

- Ter o Node.js instalado.
- Ter as dependências do projeto instaladas (`npm install`).

### Rodando os testes com Vitest

1. No terminal, navegue até a pasta do projeto.
2. Execute o comando abaixo para rodar todos os testes:
   ```
   npm run test
   ```
   Ou, para rodar em modo observador (watch):
   ```
   npm run test:watch
   ```

## Sobre os testes

- Os testes estão localizados em arquivos com extensão `.test.jsx`.
- Exemplo de teste unitário: `src/components/NavBar.test.jsx`
- Exemplo de teste de integração: `src/App.test.jsx`
- Os testes utilizam [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/).

## O que é testado?

- **Unitário:** Testa componentes isolados, como o NavBar.
- **Integração:** Testa a interação entre componentes, como o App renderizando NavBar e rotas.

## Exemplo de execução

Ao rodar `npm run test`, você verá no terminal o resultado dos testes, indicando se passaram ou falharam.

---

Siga as instruções acima para rodar e explorar o projeto!
