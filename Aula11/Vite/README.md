# Como criar um projeto Hello World com Vite

## 1. Pré-requisitos

- Node.js instalado (https://nodejs.org)
- npm ou yarn instalado

## 2. Criando o projeto

Abra o terminal na pasta desejada e execute:

```bash
npm create vite@latest hello-vite
```

**Quando solicitado pelo Vite, selecione a opção:**

```
◉ JavaScript
```

## 3. Instalando as dependências e rodando o projeto

Entre na pasta do projeto e execute os comandos abaixo:

```bash
cd hello-vite
npm install
npm run dev
```

O terminal mostrará um endereço (ex: http://localhost:5173) para acessar no navegador.

## 4. Editando o Hello World

Abra o arquivo `index.html` ou `src/App.jsx` (dependendo do template escolhido) e altere o conteúdo para:

```html
<h1>Hello World!</h1>
```

Salve e veja a alteração no navegador.

## O que é "JavaScript + SWC"?

Ao criar um projeto com Vite, você pode ver a opção **JavaScript + SWC**.
**SWC** é um compilador super rápido escrito em Rust, usado para transformar e otimizar código JavaScript e TypeScript.
Selecionando "JavaScript + SWC", o Vite usará o SWC para processar seu código, tornando a build e o desenvolvimento mais rápidos em comparação ao Babel.

Se você quer apenas um projeto simples, pode escolher "JavaScript".
Se quiser builds mais rápidas, pode escolher "JavaScript + SWC".

---

**Pronto! Seu projeto Hello World com Vite está funcionando.**
