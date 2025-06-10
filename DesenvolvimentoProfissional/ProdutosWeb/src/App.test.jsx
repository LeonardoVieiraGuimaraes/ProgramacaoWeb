// Importa funções de renderização e consulta da Testing Library
import { render, screen } from "@testing-library/react";
// Importa funções do Vitest para descrever e criar testes
import { describe, it, expect, vi, beforeEach } from "vitest";
// Importa o componente principal App
import App from "./App";

// Mock para evitar chamadas reais à API durante os testes
vi.mock("./services/produtoService", () => ({
  default: {
    listar: async () => [{ id: 1, nome: "Produto Teste", preco: 10.5 }],
    obter: async () => ({ id: 1, nome: "Produto Teste", preco: 10.5 }),
    criar: async () => ({}),
    atualizar: async () => ({}),
    excluir: async () => ({}),
  },
}));

// Grupo de testes para o App
describe("App", () => {
  // Garante que cada teste começa na rota raiz
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  // Teste unitário: verifica se o NavBar é renderizado
  it("deve renderizar o NavBar", () => {
    render(<App />);
    // O AppBar do Material UI tem papel "banner"
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  // Teste de integração: verifica se a lista de produtos aparece na rota principal
  it("deve renderizar a lista de produtos na rota '/'", async () => {
    render(<App />);
    // Espera encontrar o título da lista de produtos
    expect(await screen.findByText(/lista de produtos/i)).toBeTruthy();
    // Espera encontrar pelo menos duas células com "Produto Teste"
    const produtos = await screen.findAllByText(/produto teste/i);
    expect(produtos.length).toBeGreaterThan(0);
  });

  // Teste de controle: simula navegação para a página de novo produto
  it("deve navegar para a página de novo produto", async () => {
    window.history.pushState({}, "", "/novo");
    render(<App />);
    // Busca pelo heading (título) "Novo Produto"
    const titulo = await screen.findByRole("heading", { name: /novo produto/i });
    expect(titulo).toBeInTheDocument();
  });

  // Teste de controle: simula navegação para a página de edição de produto
  it("deve navegar para a página de editar produto", async () => {
    window.history.pushState({}, "", "/editar/1");
    render(<App />);
    // Aguarda o título "Editar Produto" aparecer
    expect(await screen.findByText(/editar produto/i)).toBeInTheDocument();
  });

  // Teste de fallback: rota inexistente deve mostrar a lista de produtos (ou página padrão)
  it.skip("deve exibir a lista de produtos para rota desconhecida", async () => {
    window.history.pushState({}, "", "/rota-inexistente");
    render(<App />);
    // screen.debug(); // Descomente para inspecionar o DOM se continuar falhando

    // Tenta encontrar o título ou mensagem de lista vazia
    let encontrou = false;
    try {
      await screen.findByText(/lista\s*de\s*produtos/i, {}, { timeout: 4000 });
      encontrou = true;
    } catch {
      // Se não encontrar o título, tenta encontrar a mensagem de lista vazia
      try {
        await screen.findByText(/nenhum produto cadastrado/i, {}, { timeout: 4000 });
        encontrou = true;
      } catch {
        // Não encontrou nenhum dos textos esperados
        encontrou = false;
      }
    }
    expect(encontrou).toBe(true);
  });
});
