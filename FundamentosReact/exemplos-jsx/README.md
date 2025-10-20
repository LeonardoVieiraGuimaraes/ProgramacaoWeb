# Fundamentos React — exemplos-jsx

Material didático para aula sobre JSX, componentes de classe e funcionais, rotas com React Router e uso do Vite como bundler/servidor de desenvolvimento.

Este projeto já está configurado com Vite + React e contém vários exemplos (MyComponent01..07) mostrando ciclos de vida, estado, roteamento e técnicas básicas de desenvolvimento React.

Link rápido do Vite (documentação usada na aula): https://vite.dev/guide/

## Objetivo da aula

- Apresentar JSX e a diferença entre componentes de classe e funcionais.
- Demonstrar ciclo de vida (montagem, atualização, desmontagem) com componentes de classe.
- Mostrar roteamento com `react-router-dom` (navegação entre componentes/"scenes").
- Ensinar como iniciar um projeto com Vite, rodar em modo dev e gerar build.

## Comandos principais (Vite)

Requisitos: Node.js (versão LTS recomendada) e npm.

Instalar dependências:

```powershell
cd FundamentosReact/exemplos-jsx
npm install
```

Rodar servidor de desenvolvimento (Vite):

```powershell
npm run dev
# abre http://localhost:5173 por padrão
```

Gerar build de produção:

```powershell
npm run build
```

Pré-visualizar build localmente:

```powershell
npm run preview
```

## Estrutura do projeto (resumo)

```
exemplos-jsx/
├── index.html           # ponto de entrada HTML (Vite injeta /src/main.jsx)
├── package.json        # scripts e dependências (vite, react, react-router-dom)
├── vite.config.js      # configuração mínima do Vite com plugin React
├── src/
│   ├── main.jsx        # bootstrapping da app (createRoot)
│   ├── App.jsx         # Router + rotas dinâmicas
│   ├── Home.jsx        # Página inicial com navegação para exemplos
│   ├── routes.jsx      # array de rotas usadas pelo App
│   ├── MyComponent01.jsx .. MyComponent07.jsx   # exemplos (classe e funcional)
│   └── scenes/         # exemplos de "scenes" para navegação
└── public/             # assets estáticos servidos pelo Vite
```

Arquivos importantes para a aula:

- `src/main.jsx`: mostra como inicializar uma app React com `createRoot` e `StrictMode`.
- `src/App.jsx`: configuração do `BrowserRouter`, `Routes` e fallback `NotFound`.
- `src/routes.jsx`: padrão simples para mapear rotas a componentes — bom para introduzir programação declarativa.
- `src/MyComponent*.jsx`: vários exemplos com comentários — use-os para explicar estado, props e ciclo de vida.

## O que explicar em aula (sequência sugerida)

1. JSX e por que usamos (diferença entre HTML e JSX: className, expressão JS dentro de chaves).
2. Componentes funcionais x componentes de classe (quando usar cada um, vantagens e exemplos práticos).
3. Estado (this.state e useState), atualização de estado, eventos (onClick, onSubmit).
4. Ciclo de vida (componentDidMount, componentDidUpdate, componentWillUnmount) — use MyComponent03/04/05/06.
5. Roteamento com `react-router-dom` — mostrar `Home`, navegação programática (`useNavigate`) e rotas dinâmicas.
6. Ferramenta de desenvolvimento: Vite — por que ele é rápido, commando `npm run dev` e live reload.

## Exercícios práticos (sugeridos)

1. Criar um novo componente `MyComponent08.jsx` que recebe props e renderiza uma lista a partir de um array passado como prop.
2. Adicionar uma rota ao `routes.jsx` e garantiro botão de navegação na `Home.jsx`.
3. Converter um dos componentes de classe para componente funcional usando hooks (`useState`, `useEffect`).
4. Experimentar o `build` e `preview` e observar diferenças de console e tempo de carregamento.

## Dicas de depuração e erros comuns

- Se `npm run dev` falhar: verifique a versão do Node (use LTS), remova `node_modules` e rode `npm install` novamente.
- Problemas com ESLint: o projeto inclui configuração básica; use `npm run lint` para checar avisos.
- Rotas retornando 404 no deploy estático: lembre-se de configurar o servidor para reescrever todas as rotas para `index.html` (SPA rewrite) quando fizer deploy.

## Referências e leitura adicional

- Vite (guia oficial): https://vite.dev/guide/
- React docs: https://react.dev/
- React Router: https://reactrouter.com/

---

Se quiser, eu também posso:

- Gerar um roteiro de aula minuto-a-minuto (45–90min) usando este projeto.
- Criar material de slides com os pontos principais.
- Adicionar scripts `npm` extras (ex.: `start:class` que usa os scripts mínimos) para facilitar a demonstração.
