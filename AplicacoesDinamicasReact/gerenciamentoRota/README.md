# Gerenciamento de Rotas — Exemplos Didáticos

Esta pasta contém três exemplos progressivos sobre gerenciamento de rotas em React, demonstrando o conceito de **"renderScene(route)"** — onde o navegador/router escolhe qual componente renderizar com base na rota atual.

## 📚 Conceito Didático

Inspirado no padrão antigo do React Native com `<Navigator>` e `renderScene(route, navigator)`, os exemplos mostram como o mesmo conceito é aplicado de forma moderna em:

1. **React Web** com `react-router-dom`
2. **React Native Mobile** com `expo-router`

### Como funciona?

- **Navigator/Router**: gerencia a pilha de rotas (initialRouteStack)
- **renderScene()**: função que decide qual "Scene" (componente) renderizar
- **Rotas modernas**: usam configuração declarativa ou file-based routing

---

## 🗂️ Exemplos Disponíveis

### 📁 Exemplo 01 — React Router Básico

**Plataforma**: Web (React + Vite)  
**Biblioteca**: react-router-dom  
**Conceito**: Rotas básicas com Home e Sobre

```bash
cd exemplo01
npm install
npm run dev
```

**Rotas**:
- `/` → Home
- `/sobre` → Sobre

**Arquivos principais**:
- `src/App.jsx` — Configuração de rotas
- `src/pages/Home.jsx`, `Sobre.jsx` — Componentes de página

---

### 📁 Exemplo 02 — First, Second, Third (Web)

**Plataforma**: Web (React + Vite)  
**Biblioteca**: react-router-dom  
**Conceito**: Navegação sequencial entre três cenas com código comentado

```bash
cd exemplo02
npm install
npm run dev
```

**Rotas**:
- `/` → First (tela inicial)
- `/second` → Second (tela intermediária)
- `/third` → Third (tela final)

**Características**:
- ✅ Código totalmente comentado para ensino
- ✅ Menu de navegação com `<Link>`
- ✅ Redirecionamento automático de rotas inválidas
- ✅ Demonstra conceito de "renderizar cena conforme rota"

**Arquivos principais**:
- `src/main.jsx` — Configura BrowserRouter
- `src/App.jsx` — Define Routes e navegação
- `src/pages/{First,Second,Third}.jsx` — Componentes das cenas

---

### 📁 Exemplo 03 — First, Second, Third (Mobile)

**Plataforma**: React Native (iOS, Android, Web)  
**Biblioteca**: expo-router  
**Conceito**: Navegação em pilha (Stack) com file-based routing

```bash
cd exemplo03
npm install
npm start
```

**Como testar**:
- Pressione `a` para Android
- Pressione `i` para iOS (macOS apenas)
- Pressione `w` para Web
- Escaneie o QR code com **Expo Go** (app mobile)

**Rotas**:
- `/` → First (index.tsx)
- `/second` → Second (second.tsx)
- `/third` → Third (third.tsx)

**Características**:
- ✅ File-based routing (cada `.tsx` em `app/` = uma rota)
- ✅ Stack Navigation nativo
- ✅ Navegação programática com `router.push()`, `router.back()`, `router.replace()`
- ✅ Código comentado explicando conceitos mobile
- ✅ Botões nativos de voltar (Android) funcionam automaticamente

**Arquivos principais**:
- `app/_layout.tsx` — Configura Stack Navigator
- `app/index.tsx` — Primeira tela (First)
- `app/second.tsx` — Segunda tela
- `app/third.tsx` — Terceira tela

---

## 🔄 Comparação entre Exemplos

| Aspecto | Exemplo 01 | Exemplo 02 (Web) | Exemplo 03 (Mobile) |
|---------|------------|------------------|---------------------|
| **Plataforma** | Web | Web | iOS/Android/Web |
| **Biblioteca** | react-router-dom | react-router-dom | expo-router |
| **Tipo de Rotas** | Declarativo | Declarativo | File-based |
| **Navegação** | `<Link>` | `<Link>` | `router.push()` |
| **Pilha** | Histórico do navegador | Histórico do navegador | Stack Navigator nativo |
| **Didática** | Básico | Comentado (First/Second/Third) | Comentado + Mobile |
| **Público-alvo** | Iniciantes | Aula sobre rotas web | Aula sobre rotas mobile |

---

## 🎓 Uso em Sala de Aula

### Ordem Sugerida de Apresentação

1. **Exemplo 01**: Introdução básica a rotas no React
2. **Exemplo 02**: Conceito de "cenas" e navegação sequencial (web)
3. **Exemplo 03**: Mesmos conceitos aplicados ao mobile

### Pontos-chave para Ensinar

#### Exemplo 02 (Web)
```jsx
// main.jsx: envolve app com BrowserRouter
<BrowserRouter>
  <App />
</BrowserRouter>

// App.jsx: define rotas e navegação
<Routes>
  <Route path="/" element={<First />} />
  <Route path="/second" element={<Second />} />
  <Route path="/third" element={<Third />} />
</Routes>

// Navegação: Link componente
<Link to="/second">Ir para Second</Link>
```

#### Exemplo 03 (Mobile)
```tsx
// _layout.tsx: configura Stack Navigator
<Stack>
  <Stack.Screen name="index" options={{ title: 'First' }} />
  <Stack.Screen name="second" options={{ title: 'Second' }} />
  <Stack.Screen name="third" options={{ title: 'Third' }} />
</Stack>

// Navegação: hook programático
const router = useRouter();
router.push('/second');  // avança
router.back();           // volta
router.replace('/');     // substitui
```

---

## 📖 Exemplo de Código Básico

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

- **`<BrowserRouter>`**: habilita o sistema de rotas baseado na URL do navegador
- **`<Link>`**: componentes de navegação (não recarrega a página)
- **`<Routes>`**: define o mapeamento rota → componente
- **`<Route>`**: cada rota individual (path + element)

---

## 🚀 Instalação Rápida

### Para Web (exemplos 01 e 02):

```bash
npm install react-router-dom
```

### Para Mobile (exemplo 03):

```bash
# Dependências instaladas automaticamente pelo Expo
npm install
```

---

## 📝 Recursos Adicionais

- [Documentação React Router](https://reactrouter.com/)
- [Documentação Expo Router](https://docs.expo.dev/router/introduction/)
- [Tutorial React Navigation](https://reactnavigation.org/docs/getting-started)

---

## ✅ Status dos Exemplos

- ✅ **Exemplo 01**: Testado e funcionando
- ✅ **Exemplo 02**: Testado, build ok, código comentado
- ✅ **Exemplo 03**: Testado, Expo rodando, código comentado

Todos os exemplos foram validados e estão prontos para uso em aula! 🎉
