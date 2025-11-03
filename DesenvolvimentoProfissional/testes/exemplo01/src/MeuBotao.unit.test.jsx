// Teste unitário: valida o comportamento isolado do componente MeuBotao
// - Usa Testing Library para renderizar e interagir
// - Importa jest-dom para matchers como toBeInTheDocument, toBeDisabled, etc.
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MeuBotao from "./MeuBotao";

describe("MeuBotao (unitário)", () => {
  it("deve exibir o texto e responder ao clique", () => {
    const aoClicar = vi.fn();
    render(<MeuBotao onClick={aoClicar}>Clique aqui</MeuBotao>);
    const botao = screen.getByText("Clique aqui");
    fireEvent.click(botao);
    expect(aoClicar).toHaveBeenCalledTimes(1);
  });
});
