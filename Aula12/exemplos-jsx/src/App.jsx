import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import routes from "./routes.jsx";
import NotFound from "./NotFound"; // Importa o componente NotFound

function App() {
  console.log("App renderizado");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* Fallback para rotas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
