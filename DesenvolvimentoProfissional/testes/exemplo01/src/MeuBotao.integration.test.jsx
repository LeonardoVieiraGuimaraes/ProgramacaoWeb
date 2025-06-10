import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import OutroComponente from "./OutroComponente";

// Este teste assume que OutroComponente renderiza MeuBotao e atualiza seu estado ao clicar.
describe("Integração: MeuBotao com OutroComponente", () => {
  it("deve atualizar o estado do OutroComponente ao clicar no MeuBotao", () => {
    render(<OutroComponente />);
    const botao = screen.getByText("Clique para atualizar");
    fireEvent.click(botao);
    expect(screen.getByText("Atualizado!")).toBeInTheDocument();
  });
});
