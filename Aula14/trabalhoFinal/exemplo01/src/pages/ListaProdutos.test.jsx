import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ListaProdutos from "./ListaProdutos";
import produtoService from "../services/produtoService";

// Mock do serviço de produtos
vi.mock("../services/produtoService", () => ({
  default: {
    listar: vi.fn(async () => [
      { id: 1, nome: "Produto 1", preco: 10.5 },
      { id: 2, nome: "Produto 2", preco: 20.0 }
    ]),
    excluir: vi.fn(),
  }
}));

describe("ListaProdutos", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve renderizar a tabela com produtos", async () => {
    render(
      <MemoryRouter>
        <ListaProdutos />
      </MemoryRouter>
    );
    expect(await screen.findByText(/lista de produtos/i)).toBeInTheDocument();
    expect(await screen.findByText(/produto 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/produto 2/i)).toBeInTheDocument();
  });

  it("deve mostrar mensagem se não houver produtos", async () => {
    // sobrescreve o mock para este teste
    produtoService.listar.mockResolvedValueOnce([]);
    render(
      <MemoryRouter>
        <ListaProdutos />
      </MemoryRouter>
    );
    expect(await screen.findByText(/nenhum produto cadastrado/i)).toBeInTheDocument();
  });

  it("deve chamar excluir ao clicar no botão de deletar", async () => {
    window.confirm = vi.fn(() => true);
    render(
      <MemoryRouter>
        <ListaProdutos />
      </MemoryRouter>
    );
    const deleteButtons = await screen.findAllByRole("button", { name: /delete/i });
    fireEvent.click(deleteButtons[0]);
    expect(produtoService.excluir).toHaveBeenCalled();
  });
});
