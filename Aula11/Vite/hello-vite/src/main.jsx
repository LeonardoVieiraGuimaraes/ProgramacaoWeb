import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Hello.jsx'
import MeuComponente from './MeuComponente.jsx'
import Greeting from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
)

createRoot(document.getElementById('root2')).render(
  <StrictMode>
    <MeuComponente />
  </StrictMode>,
)

createRoot(document.getElementById('root3')).render(
  <StrictMode>
    <Greeting isLoggedIn={true} />
  </StrictMode>,
)
