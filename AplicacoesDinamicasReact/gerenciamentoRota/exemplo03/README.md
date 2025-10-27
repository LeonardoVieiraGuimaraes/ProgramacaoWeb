# Exemplo 03 — Rotas com Expo Router (React Native)

Este exemplo demonstra o conceito de **navegação por pilha** (Stack Navigation) no React Native usando Expo Router, equivalente ao padrão `renderScene(route, navigator)` mostrado na figura didática.

## Estrutura de Rotas

- `/` → redireciona para `/first`
- `/first` → First (tela inicial)
- `/second` → Second (tela intermediária)
- `/third` → Third (tela final)

## File-based Routing

No Expo Router, cada arquivo `.tsx` dentro de `app/` vira uma rota automaticamente:

- `app/first.tsx` → rota `/first`
- `app/second.tsx` → rota `/second`
- `app/third.tsx` → rota `/third`
- `app/index.tsx` → rota `/` (redireciona para first)

## Navegação Programática

Usamos o hook `useRouter()` para navegar entre telas:

```tsx
import { useRouter } from 'expo-router';

const router = useRouter();

// Adiciona tela na pilha
router.push('/second');

// Volta uma tela
router.back();

// Substitui tela atual (limpa histórico)
router.replace('/first');
```

## Conceito Didático

Este exemplo reproduz a ideia da figura do `<Navigator>`:

1. **Navigator** → `<Stack>` no `_layout.tsx`
2. **initialRoute** → redirect em `index.tsx` para `/first`
3. **initialRouteStack** → pilha gerenciada automaticamente pelo Stack Navigator
4. **renderScene(route)** → Expo Router renderiza automaticamente o componente da rota ativa

## Como Rodar

### Pré-requisitos

- Node.js 18+
- Expo CLI (será instalado automaticamente)
- Para testar em dispositivo físico: app Expo Go (iOS/Android)
- Para testar em emulador: Android Studio (Android) ou Xcode (iOS/Mac)

### Comandos (PowerShell)

```powershell
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Rodar no Android
npm run android

# Rodar no iOS (apenas macOS)
npm run ios

# Rodar no navegador (web)
npm run web
```

### Testar no dispositivo

1. Execute `npm start`
2. Abra o app **Expo Go** no seu celular
3. Escaneie o QR code que aparece no terminal

## Arquivos Importantes

- `app/_layout.tsx` — Configura o Stack Navigator com as três rotas
- `app/first.tsx` — Primeira tela (ponto de entrada)
- `app/second.tsx` — Segunda tela (demonstra navegação bidirecional)
- `app/third.tsx` — Terceira tela (demonstra replace e back)

## Diferenças vs Exemplo 02 (Web)

| Aspecto | Exemplo 02 (Web) | Exemplo 03 (Expo) |
|---------|------------------|-------------------|
| Biblioteca | `react-router-dom` | `expo-router` |
| Tipo de routing | Declarativo (`<Routes>`) | File-based (`app/*.tsx`) |
| Navegação | `<Link>` componente | `router.push()` programático |
| Pilha | Histórico do navegador | Stack Navigator nativo |
| Plataforma | Navegador web | iOS, Android, Web |

Ambos implementam o mesmo conceito de "renderizar a cena conforme a rota atual", mas adaptados para suas plataformas.
