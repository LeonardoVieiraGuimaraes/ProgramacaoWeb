import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MeuBotao from "./MeuBotao";

describe("Controle: MeuBotao", () => {
  it("deve estar desabilitado quando prop disabled for true", () => {
    render(<MeuBotao disabled>Botão Desabilitado</MeuBotao>);
    const botao = screen.getByText("Botão Desabilitado");
    expect(botao).toBeDisabled();
  });

  it("deve não chamar onClick quando desabilitado", () => {
    const aoClicar = vi.fn();
    render(<MeuBotao disabled onClick={aoClicar}>Botão Desabilitado</MeuBotao>);
    const botao = screen.getByText("Botão Desabilitado");
    fireEvent.click(botao);
    expect(aoClicar).not.toHaveBeenCalled();
  });
});
