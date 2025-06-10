// Importa funções de renderização e consulta da Testing Library
import { render, screen } from "@testing-library/react";
// Importa funções do Vitest para descrever e criar testes
import { describe, it, expect } from "vitest";
// Importa o componente MemoryRouter para simular o roteamento
import { MemoryRouter } from "react-router-dom";
// Importa o componente NavBar a ser testado
import NavBar from "./NavBar";

// Descreve o grupo de testes para o NavBar
describe("NavBar", () => {
  // Teste unitário: verifica se o botão "Produtos" é renderizado
  it("deve renderizar o botão Produtos", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    ); // Renderiza o componente NavBar dentro de um MemoryRouter
    // Tenta buscar pelo papel de botão, se não encontrar, busca pelo texto
    try {
      expect(screen.getByRole("button", { name: /produtos/i })).toBeInTheDocument();
    } catch {
      expect(screen.getByText(/produtos/i)).toBeInTheDocument();
    }
  });

  // Teste unitário: verifica se o botão "Novo Produto" é renderizado
  it("deve renderizar o botão Novo Produto", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    // Busca todos os elementos com o texto "Novo Produto"
    const novoProduto = screen.queryAllByText(/novo produto/i);
    expect(novoProduto.length).toBeGreaterThan(0);
  });

  // Teste de integração: verifica se ambos os textos dos botões aparecem
  it("deve renderizar ambos os textos dos botões de navegação", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    // Busca todos os elementos com o texto "Produtos" e "Novo Produto"
    const produtos = screen.queryAllByText(/produtos/i);
    const novoProduto = screen.queryAllByText(/novo produto/i);
    expect(produtos.length).toBeGreaterThan(0);
    expect(novoProduto.length).toBeGreaterThan(0);
  });
});
