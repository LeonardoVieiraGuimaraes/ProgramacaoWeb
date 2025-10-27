// Ponto de entrada da aplicação React.
// Aqui nós montamos o componente raiz (<App />) dentro da div#root do index.html
// e envolvemos tudo com o BrowserRouter para habilitar o sistema de rotas no navegador.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// createRoot: cria a "raiz" da aplicação React a partir do elemento #root do HTML.
// StrictMode: ativa verificações adicionais em desenvolvimento para ajudar a achar problemas.
// BrowserRouter: responsável por observar a URL do navegador e renderizar as rotas adequadas.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* App conterá as definições de rotas e o layout da aplicação */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
