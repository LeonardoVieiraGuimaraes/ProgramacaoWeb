// Teste de integração: valida o MeuBotao integrado ao App (estado e UI juntos)
// - Importa jest-dom para matchers estendidos (toBeInTheDocument)
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

describe("Integração: MeuBotao com App", () => {
  it("deve incrementar o contador ao clicar no MeuBotao", () => {
    render(<App />);
    const botao = screen.getByText("Clique aqui");
    fireEvent.click(botao);
    expect(screen.getByText("Quantidade de cliques: 1")).toBeInTheDocument();
  });
});
