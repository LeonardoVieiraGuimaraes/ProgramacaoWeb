// Exemplo completo de uso do React Router no projeto exemplo01

import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import RoutesApp from "./route/RoutesApp";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Menu />
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
