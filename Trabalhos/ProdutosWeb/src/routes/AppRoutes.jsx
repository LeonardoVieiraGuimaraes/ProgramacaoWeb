// Importa componentes de rotas e as páginas
import { Routes, Route } from "react-router-dom";
import ListaProdutos from "../pages/ListaProdutos";
import FormProduto from "../components/FormProduto";

// Define as rotas da aplicação
export default function AppRoutes() {
  return (
    <Routes>
      {/* Rota para listagem de produtos */}
      <Route path="/" element={<ListaProdutos />} />
      {/* Rota para criar novo produto */}
      <Route path="/novo" element={<FormProduto />} />
      {/* Rota para editar produto existente */}
      <Route path="/editar/:id" element={<FormProduto />} />
      {/* Rota coringa para qualquer caminho não encontrado */}
      <Route path="*" element={<ListaProdutos />} />
    </Routes>
  );
}
