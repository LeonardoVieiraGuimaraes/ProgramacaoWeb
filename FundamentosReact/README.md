# Aula 12 - React: Aplicações Dinâmicas com JSX

---

## 🎯 Tópicos de Estudo

> ### 🎬 Slide: O que vamos estudar?
>
> - ⚡ Aplicações dinâmicas com o React
> - 🛠️ Gerenciamento de estado
> - 💻 Eventos de ciclo de vida
> - 🏗️ Navegação entre telas
> - 📝 **JSX: O que é e por que usar?**

- ⚡ **Aplicações dinâmicas com o React**
- 🛠️ **Gerenciamento de estado**
- 💻 **Eventos de ciclo de vida**
- 🏗️ **Navegação entre telas**
- 📝 **JSX**

---

## 🎓 Objetivos de Aprendizagem

> ### 🎬 Slide: Objetivos da Aula
>
> - Compreender recursos avançados do React.
> - Aprender a navegar entre telas.
> - Trocar informações entre componentes.
> - Entender o ciclo de vida de um componente.
> - **Entender o que é JSX e sua importância no React.**

Apresentar os recursos avançados do React, como:
- 🏗️ Navegação entre telas
- 🔄 Troca de informações entre componentes
- ⏳ Ciclo de vida de um componente
- 📝 **JSX**

---

## 🚀 Iniciando os Estudos

> ### 🎬 Slide: Bem-vindo(a)!
>
> Nesta unidade, você irá explorar conceitos fundamentais e avançados do React para criar aplicações dinâmicas e modernas.  
> Vamos abordar desde o gerenciamento de estado, passando pelo ciclo de vida dos componentes, até a navegação entre telas e o uso do JSX.  
> Prepare-se para aprofundar seus conhecimentos e construir aplicações mais robustas!

> **Bem-vindo(a)!**  
> Nesta unidade, você irá explorar conceitos fundamentais e avançados do React para criar aplicações dinâmicas e modernas.

---

### 📝 O que é JSX?

> ### 🎬 Slide: JSX - JavaScript XML
>
> **JSX** significa **JavaScript XML**.  
> É uma extensão de sintaxe para JavaScript utilizada pelo React para descrever como a interface deve aparecer.
>
> - Permite escrever código semelhante a HTML dentro do JavaScript.
> - Facilita a criação e leitura de componentes de interface.
> - O JSX é convertido em chamadas JavaScript para criar elementos React.
>
> **Exemplo JSX:**
> ```jsx
> const elemento = <h1>Olá, mundo!</h1>;
> ```
>
> **Por que usar JSX?**
> - Torna o código mais legível e próximo do HTML tradicional.
> - Permite misturar lógica JavaScript e marcação de forma intuitiva.
> - Ajuda a visualizar a estrutura da interface diretamente no código.

**Importante:**  
O JSX não é obrigatório, mas é altamente recomendado no desenvolvimento com React, pois torna o processo de criação de componentes mais simples e produtivo.

#### Dica de aprendizagem

- O JSX permite que você escreva componentes de interface de forma mais intuitiva, misturando lógica e visual.
- Ferramentas como o VSCode oferecem realce de sintaxe e autocompletar para JSX, facilitando o desenvolvimento.

---

### 🛠️ Gerenciamento de Estado

> ### 🎬 Slide: O que é Estado em React?
>
> - O estado (state) é a parte dinâmica do componente.
> - Permite controlar dados que mudam ao longo do tempo.
> - Exemplo: campos de formulário, listas, autenticação, resposta de APIs.
> - Sempre que o estado muda, o React atualiza a interface automaticamente.

- Entenda a importância de inicializar corretamente o estado para evitar erros indesejáveis.
- Aprenda como configurar e manipular estados em componentes React.

> **Por que isso é importante?**  
> O gerenciamento de estado é o coração das aplicações React. Ele permite que você controle dados dinâmicos, como campos de formulários, listas, autenticação e muito mais.  
> Inicializar corretamente o estado evita bugs e comportamentos inesperados, garantindo que sua aplicação funcione de forma previsível.  
> Você aprenderá a usar o hook `useState` para criar e atualizar estados, além de boas práticas para organizar e compartilhar estados entre componentes.

#### Dica de aprendizagem

- Sempre inicialize o estado no construtor (ou diretamente na propriedade `state` em classes) para evitar erros de acesso a propriedades indefinidas.
- Use o método `setState` para atualizar o estado e nunca altere o estado diretamente.

#### Exemplo prático de estado em componente funcional (moderno):

```jsx
import { useState } from "react";
export default function ExemploFuncional() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## 1️⃣ GERENCIAMENTO DE ESTADO

O estado (state) pode ser entendido como sendo todo dado que varia com o tempo, sendo as mudanças de valor fruto ou não da interação do usuário com a aplicação que ele está utilizando (MEDIUM, 2019).

A alteração do estado (state) pode ser desde algo simples, como a alteração de um endereço de e-mail que o usuário digita em um formulário, até algo mais complexo, como o resultado de uma requisição http que deve ser mostrada em tela.

### Exemplo prático de estado em componente de classe

```jsx
import React, { Component } from "react";
export default class Contador extends Component {
  state = { valor: 0 };
  incrementar = () => this.setState({ valor: this.state.valor + 1 });
  render() {
    return (
      <div>
        <p>Valor: {this.state.valor}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}
```

#### Exercício sugerido

- Crie um componente que permita ao usuário digitar seu nome em um campo de texto e exiba uma saudação personalizada abaixo.

---

## 2️⃣ EVENTOS DE CICLO DE VIDA

Um dos conceitos mais importantes em React é compreender o ciclo de vida de um componente, que essencialmente consiste em cada um dos estágios de vida de um componente, que são: montagem (mounting), atualização (updating) e desmontando (unmounting). A figura a seguir ilustra cada um dos estágios do ciclo de vida de um componente.

### Resumo visual do ciclo de vida

- **Montagem:** O componente é criado e inserido no DOM.
- **Atualização:** O componente é atualizado devido a mudanças de estado ou props.
- **Desmontagem:** O componente é removido do DOM.

---

### 2.1 🟢 MONTAGEM (MOUNTING)

Os componentes que possuem um ciclo de vida são classes, portanto, o primeiro método a ser executado é o constructor. O constructor é onde você inicializa o estado do componente (MEDIUM, 2018).

Imediatamente após a execução do constructor e antes da chamada do método render, o componente executa o getDerivedStateFromProp. De acordo com a documentação React, esse método existe para casos raros em que o state depende de mudança nas props no decorrer do tempo.

No passo seguinte, chega-se ao método render, que retorna seu JSX e, então, o método React monta o DOM. Por fim, é executado o método componentDidMount (MEDIUM, 2018). Nesse momento, você pode realizar qualquer chamada assíncrona para o banco de dados ou manipular diretamente o DOM.

#### Dica de aprendizagem

- Use `componentDidMount` para buscar dados de APIs, iniciar timers ou integrar bibliotecas externas.
- Em componentes funcionais, use o hook `useEffect` para simular o comportamento de montagem.

---

### 2.2 🟡 ATUALIZAÇÃO (UPDATING)

Esta etapa é executada toda vez que há alguma alteração no estado (state) ou em alguma outra propriedade. Diferentemente do momento em que ocorre a montagem (mounting), durante a atualização o construtor não é executado dessa vez.

Em seguida é executado o shouldComponentUpdate e, nesse momento, você pode comparar propriedades/estados antigos com o novo conjunto de propriedades/estados (MEDIUM, 2018).

#### Exemplo prático de atualização com hooks:

```jsx
import { useState, useEffect } from "react";
export default function AtualizacaoExemplo() {
  const [valor, setValor] = useState(0);
  useEffect(() => {
    document.title = `Valor atual: ${valor}`;
  }, [valor]);
  return (
    <button onClick={() => setValor(valor + 1)}>
      Clique para atualizar: {valor}
    </button>
  );
}
```

#### Dica de aprendizagem

- O método `shouldComponentUpdate` pode ser usado para otimizar componentes de classe, evitando renderizações desnecessárias.
- Em componentes funcionais, use `React.memo` para otimização semelhante.

---

### 2.3 🔴 DESMONTANDO (UNMOUNTING)

A etapa de desmontagem é o último estágio do ciclo de vida de um componente. Quando você remove um componente do DOM, o React executa o componentWillUnmount antes do componente ser removido (MEDIUM, 2018). Esse método deve ser utilizado para limpar qualquer conexão aberta com o WebSockets ou os temporizadores.

#### Exemplo prático de limpeza com hooks:

```jsx
import { useEffect } from "react";
export default function TimerExemplo() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Executando...");
    }, 1000);
    return () => clearInterval(timer); // Limpeza ao desmontar
  }, []);
  return <p>Veja o console!</p>;
}
```

#### Dica de aprendizagem

- Sempre limpe timers, listeners ou conexões abertas em `componentWillUnmount` (classe) ou no retorno do `useEffect` (função).

---

## 3️⃣ NAVEGAÇÃO ENTRE TELAS

Quando você pensa em aplicações desenvolvidas para as páginas web, é relativamente fácil pensar na navegação entre telas, uma vez que você tem um URL que aponta para cada tela. Nesse sentido, os URLs tornam natural e fácil pensar na organização em telas. No entanto, é um pouco mais difícil pensar na navegação em telas sem esse recurso.

Considere agora o contexto dos aplicativos móveis, mas sem a abstração de páginas que se tem na interface web. Nessas condições, você teria que criar uma abstração lógica de modo a garantir que cada componente de tela fosse renderizado e, posteriormente, removido assim que o usuário deixasse a tela, o que não seria o ideal.

Apesar de todas as dificuldades apresentadas, é comum você estar em contato com inúmeros aplicativos que utilizam o recurso da navegação em telas. Nesse sentido, você deve estar se perguntando como estas dificuldades são superadas, e é nesse ponto que vou lhe ensinar como superá-las, utilizando o React Native.

---

### 3.1 🌐 NAVEGADORES, CENAS, ROTAS E PILHAS

Em um aplicativo desenvolvido em React Native, a principal ferramenta que você irá utilizar para navegar entre telas é o componente React Navigation, que pode ser obtido junto ao site do desenvolvedor no endereço a seguir.

> **Aprofunde-se**  
> Título: React Navigation  
> Acesso em: 29/05/2020.  
> Disponível em: https://reactnavigation.org/

O componente React Navigation é empregado para controlar rotas, pilhas e cenas na navegação. A seguir apresentarei a você cada uma delas.

---

### 3.2 🛣️ ROTAS

A fim de você compreender o conceito de rotas, considere uma implementação simples com três cenas, em que cada uma será vinculada a outras duas cenas, de modo que você possa navegar pelo aplicativo.

Assim, considere o módulo principal do aplicativo criado por Boduch (2017), o qual tem o código mostrado pela figura 9 logo abaixo.

O componente apresentado pela figura 9 não renderiza nenhum tipo de aplicativo, o `<Navigator>` é o responsável em gerenciar as cenas que são renderizadas. Por inspeção, é fácil compreender que a função renderScene () é responsável por pegar o componente Scene de uma rota e o renderizar. Portanto, o navegador usa a função renderScene () para renderizar o conteúdo conforme a rota atual é alterada.

Após a leitura atenta do código mostrado pela figura 9, você pôde perceber que o navegador recebe uma rota inicial e uma pilha de rotas em que ambos vêm do módulo de rotas. Nesse ponto, observe o código mostrado pela figura 10 abaixo, que implementa o módulo de rotas. De maneira simples, ele cria uma variedade de cenas que o navegador pode utilizar como pilha de rotas iniciais.

> **Reflita**  
> Talvez você esteja se perguntando porque é necessário este passo intermediário desenvolvido no módulo de rotas, não faria mais sentido construir a matriz no módulo principal?  
> De acordo com Boduch (2017), as boas práticas mostram que é recomendável aumentar os dados das rotas, e manter todas elas em um só lugar longe de todo o resto do código no desenvolvimento de aplicações.

Agora que você já conhece um pouco mais sobre as rotas, as cenas e o módulo de rotas, observe a figura 11 a seguir, que mostra a primeira página deste aplicativo. Veja como é fácil de perceber que há dois links de textos que levam a outras duas páginas.

Agora que você já conhece a interface da aplicação, bem como o módulo de rotas, convido a conhecer um dos módulos de cena, o qual é mostrado pela figura 12 mais abaixo. Os outros dois são praticamente idênticos.

Como você pode observar a partir da leitura atenta do código, os dois links renderizados pelo componente Scene são renderizados por meio dos componentes `<Text>` que respondem aos eventos do Press.

Como observa Boduch (2017), em vez de apontar para um URL, como seria feito em um aplicativo web, neste caso você deve informar explicitamente ao navegador onde deseja ir. É por esse motivo que o módulo principal passa a instância do navegador para os componentes da cena como uma propriedade.

Ainda de acordo com Boduch (2017), o método de navegação utilizado no módulo de cenas é o `jumpTo()`, que aceita um objeto de rota como argumento. Essa rota é pesquisada na pilha de rotas e o método renderScene () do navegador é chamado.

É importante observar que você não pode pular para uma rota que não esteja na pilha de rotas, pois estes componentes já foram renderizados e o navegador está simplesmente gerenciando sua exibição.

Neste ponto, você deve ter observado que o componente cena (scene) é exportado como propriedade de um objeto, em vez de exportar o componente diretamente. Na realidade, é possível utilizar apenas um componente como uma rota, mas o navigator do React iria “reclamar”, pois espera objetos e não funções.

Agora que você conhece os principais conceitos envolvendo a navegação entre telas em React, separei este vídeo para que aprofunde os seus conhecimentos nesse tema.

> **Aprofunde-se**  
> Título: Navegação entre telas  
> Acesso em: 28/05/2020.  
> Disponível em: https://tinyurl.com/y87yxmqx  
> O material em vídeo a seguir irá ensinar a você alguns dos principais conceitos envolvendo a navegação por barras em React.

---

## ▶️ Como executar os exemplos React/JSX desta aula

> ### 🎬 Slide: Rodando o exemplo JSX/React

1. **Abra o terminal na pasta `Aula12`.**
2. Instale o Vite (caso não tenha) e as dependências do projeto:
   ```bash
   npm create vite@latest exemplos-jsx -- --template react
   cd exemplos-jsx
   npm install
   ```
3. Substitua os arquivos do projeto pelos exemplos fornecidos (como `App.jsx`, `main.jsx`, `index.html`, `MyComponent01.jsx`, `MyComponent02.jsx`, `MyComponent03.jsx`).
4. Execute o projeto:
   ```bash
   npm run dev
   ```
5. Acesse o navegador em `http://localhost:5173` para ver o exemplo funcionando.

**Observação:**  
- Certifique-se de que o Node.js está instalado em sua máquina.
- O JSX é convertido automaticamente pelo Vite/React, não sendo necessário configuração manual.

---

## 📦 Exemplos de Componentes Utilizados

### MyComponent01.jsx

Demonstra como controlar o estado de dois botões usando propriedades booleanas no state.

```jsx
import React, { Component } from "react";
export default class MyComponent01 extends Component {
  state = { first: false, second: true };
  render() {
    const { first, second } = this.state;
    return (
      <main>
        <section>
          <button disabled={first}>Primeiro botão</button>
        </section>
        <section>
          <button disabled={second}>Segundo botão</button>
        </section>
      </main>
    );
  }
}
```

### MyComponent02.jsx

Exibe informações do estado (`heading` e `content`), útil para mostrar dados dinâmicos.

```jsx
import React, { Component } from "react";
export default class MyComponent02 extends Component {
  state = { heading: "React Awesomesauce (Busy)", content: "Loading..." };
  render() {
    const { heading, content } = this.state;
    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}
```

### MyComponent03.jsx

Demonstra atualização automática do estado após 3 segundos usando o ciclo de vida do componente.

```jsx
import React, { Component } from "react";
export default class MyComponent03 extends Component {
  state = { heading: "React Awesomesauce (Busy)", content: "Loading..." };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        heading: "React Awesomesauce",
        content: "Conteúdo carregado!",
      });
    }, 3000);
  }
  render() {
    const { heading, content } = this.state;
    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}
```

---

## 🧑‍💻 Estrutura do Projeto

- `src/App.jsx`: Componente principal que importa e exibe os exemplos.
- `src/MyComponent01.jsx`: Exemplo de controle de estado com botões.
- `src/MyComponent02.jsx`: Exemplo de exibição de dados do estado.
- `src/MyComponent03.jsx`: Exemplo de ciclo de vida e atualização automática.
- `src/main.jsx`: Ponto de entrada da aplicação React.
- `index.html`: Arquivo HTML principal.

---

## 📚 Dicas e Links Úteis

- [Documentação oficial do React](https://react.dev/)
- [JSX no React](https://react.dev/learn/writing-markup-with-jsx)
- [Ciclo de vida dos componentes](https://react.dev/reference/react/Component)
- [React State e setState](https://react.dev/learn/state-a-components-memory)
- [Exemplo de hooks modernos (useState/useEffect)](https://react.dev/reference/react/useState)
- [Exemplo de React Router](https://reactrouter.com/en/main/start/tutorial)
- [React DevTools (ferramenta de inspeção)](https://react.dev/learn/react-developer-tools)
- [Guia de Componentes Funcionais](https://react.dev/learn/your-first-component)
- [Exercícios práticos de React (em inglês)](https://www.freecodecamp.org/news/learn-react-by-building-a-simple-app-e8b3b47edb39/)

---

## 💡 Dicas para o Professor

- Use os exemplos para demonstrar como o estado afeta a interface.
- Mostre como o ciclo de vida permite atualizar dados automaticamente.
- Peça aos alunos para modificar os componentes e observar o comportamento.
- Mostre exemplos de componentes funcionais com hooks para comparação.
- Incentive os alunos a criar seus próprios componentes e experimentar o React DevTools.
- Proponha desafios incrementais, como adicionar validação de formulário ou feedback visual.

---

## 📝 Exemplos de Uso no App.jsx

```jsx
import MyComponent01 from "./MyComponent01";
import MyComponent02 from "./MyComponent02";
import MyComponent03 from "./MyComponent03";

function App() {
  return (
    <>
      <div>
        <MyComponent01 />
      </div>
      <div>
        <MyComponent02 />
      </div>
      <div>
        <MyComponent03 />
      </div>
    </>
  );
}
export default App;
```

---

## 🛠️ Personalize e Experimente

- Altere os valores iniciais do estado e veja como a interface muda.
- Adicione novos botões ou campos e controle seu estado.
- Experimente adicionar eventos (onClick, onChange) para manipular o estado dinamicamente.
- Experimente criar um componente funcional com hooks:
```jsx
import { useState } from "react";
export default function ContadorFuncional() {
  const [valor, setValor] = useState(0);
  return (
    <div>
      <p>Valor: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Incrementar</button>
    </div>
  );
}
```
- Experimente criar um componente que busque dados de uma API pública e exiba na tela.
- Adicione validação de campos e mensagens de erro para melhorar a experiência do usuário.

---
...existing code...

---

### 2.2 🟡 ATUALIZAÇÃO (UPDATING)

Esta etapa é executada toda vez que há alguma alteração no estado (state) ou em alguma outra propriedade. Diferentemente do momento em que ocorre a montagem (mounting), durante a atualização o construtor não é executado dessa vez.

Em seguida é executado o shouldComponentUpdate e, nesse momento, você pode comparar propriedades/estados antigos com o novo conjunto de propriedades/estados (MEDIUM, 2018).

#### Principais métodos do ciclo de vida de atualização em componentes de classe

1. **shouldComponentUpdate(nextProps, nextState)**
   - **nextProps:** Próximas propriedades que o componente receberá.
   - **nextState:** Próximo estado que o componente terá.
   - Permite controlar se o componente deve atualizar ou não, otimizando a renderização.

2. **getSnapshotBeforeUpdate(prevProps, prevState)**
   - **prevProps:** Propriedades anteriores, antes da atualização.
   - **prevState:** Estado anterior, antes da atualização.
   - Permite capturar informações do DOM antes da atualização, como posição de rolagem.

3. **componentDidUpdate(prevProps, prevState, snapshot)**
   - **prevProps:** Propriedades anteriores.
   - **prevState:** Estado anterior.
   - **snapshot:** Valor retornado por `getSnapshotBeforeUpdate`.
   - Executado após a atualização do componente, ideal para buscar dados ou manipular o DOM.

4. **componentDidMount()**
   - Não recebe parâmetros.
   - Chamado uma vez após o componente ser montado no DOM.

5. **componentWillUnmount()**
   - Não recebe parâmetros.
   - Chamado antes do componente ser removido do DOM, ideal para limpar timers, listeners, etc.

Esses métodos permitem um controle detalhado sobre o comportamento do componente durante seu ciclo de vida, possibilitando otimizações, integrações com APIs externas, manipulação do DOM e limpeza de recursos.

Além desses métodos, o React oferece outros recursos modernos, como os **Hooks** (`useEffect`, `useState`, etc.), que permitem gerenciar o ciclo de vida e o estado em componentes funcionais de forma mais simples e concisa.

...existing code...