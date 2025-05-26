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
   npm install react-native-paper
   ```

4. Instale o Material Design para React Native (react-native-paper):

   ```bash
   npm install react-native-paper
   npx expo install react-native-vector-icons
   ```

   > **Atenção:**  
   > A biblioteca `react-native-paper` é usada para os componentes de formulário (TextInput, Button, Text).
   > Se não instalar, o projeto não irá rodar corretamente.

   Se estiver usando TypeScript, instale também os tipos do React (caso ainda não tenha):

   ```bash
   npm install --save-dev @types/react
   ```

5. Após instalar, reinicie o projeto Expo:

   ```bash
   npx expo start
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
- `src/navigation` — Definição das rotas de navegação

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

import axios from "axios";

export interface Produto {
  id?: number;
  nome: string;
  preco: number;
}

const API_URL = "http://leoproti.com.br:8004/produtos";

const listar = async (): Promise<Produto[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};

const obter = async (id: number): Promise<Produto> => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

const criar = async (produto: Produto): Promise<Produto> => {
  const { data } = await axios.post(API_URL, produto);
  return data;
};

const atualizar = async (id: number, produto: Produto): Promise<Produto> => {
  const { data } = await axios.put(`${API_URL}/${id}`, produto);
  return data;
};

const excluir = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export default {
  listar,
  obter,
  criar,
  atualizar,
  excluir,
};

## Bibliotecas para Formulários no React Native

Para facilitar o gerenciamento e validação de formulários, recomenda-se o uso do [react-hook-form](https://react-hook-form.com/):

### Instalação

```bash
npm install react-hook-form
```

### Exemplo de uso com React Native Paper

```tsx
import { useForm, Controller } from "react-hook-form";
import { TextInput, Button } from "react-native-paper";

function MeuForm() {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Nome"
            value={value}
            onChangeText={onChange}
            mode="outlined"
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>Salvar</Button>
    </>
  );
}
```

### Outras opções

- [Formik](https://formik.org/) — Muito usado em projetos React e React Native.
- [react-native-form-validator](https://github.com/g6ling/react-native-form-validator) — Validação simples.
- [yup](https://github.com/jquense/yup) — Schema validation, pode ser usado junto com react-hook-form ou Formik.

---

**Resumo:**  
Para projetos modernos, recomendo `react-hook-form` para simplicidade e performance.
