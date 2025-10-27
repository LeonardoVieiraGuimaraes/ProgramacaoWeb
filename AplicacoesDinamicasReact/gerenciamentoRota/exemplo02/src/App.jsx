// Componente raiz com a configuração de rotas.
// Este arquivo materializa a ideia do exemplo da figura:
// "o navegador usa a função renderScene() para escolher a cena (Scene)
// conforme a rota atual". No React Router, essa lógica é declarativa via
// <Routes> e <Route>: a URL atual determina qual componente é renderizado.
import './App.css'
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import First from './pages/First.jsx'
import Second from './pages/Second.jsx'
import Third from './pages/Third.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Exemplo de Rotas: First, Second, Third</h1>

        {/* Menu de navegação — muda a URL sem recarregar a página */}
        <nav style={{ display: 'flex', gap: 12 }}>
          {/* Link to="/": rota inicial, renderiza o componente <First /> */}
          <Link to="/">First</Link>
          {/* Link to="/second": rota secundária, renderiza <Second /> */}
          <Link to="/second">Second</Link>
          {/* Link to="/third": rota terciária, renderiza <Third /> */}
          <Link to="/third">Third</Link>
        </nav>
        <hr />
      </header>

      <main>
        {/*
          <Routes> avalia a URL atual e escolhe a primeira <Route> que casar.
          Cada <Route path="..." element={<Componente />} /> é o mapeamento
          "rota → cena" (equivalente ao route.Scene do exemplo apresentado).
        */}
        <Routes>
          {/* Rota "/" (inicial): exibe a cena First */}
          <Route path="/" element={<First />} />

          {/* Rota "/second": exibe a cena Second */}
          <Route path="/second" element={<Second />} />

          {/* Rota "/third": exibe a cena Third */}
          <Route path="/third" element={<Third />} />

          {/*
            Rota "coringa" (qualquer caminho não mapeado):
            redireciona de volta para a inicial. O "replace" evita
            inserir a URL inválida no histórico do navegador.
          */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
