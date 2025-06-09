// Importa o BrowserRouter para controle de rotas, NavBar e as rotas da aplicação
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

// Componente principal da aplicação
function App() {
  return (
    // Envolve toda a aplicação com o BrowserRouter para habilitar navegação por rotas
    <BrowserRouter>
      {/* Barra de navegação no topo */}
      <NavBar />
      {/* Espaço para as rotas renderizarem suas páginas */}
      <div style={{ marginTop: 32 }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
