import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FormProduto from "./FormProduto";

describe("FormProduto", () => {
  const produto = { nome: "Teste", preco: "10.00" };

  it("deve renderizar campos e botões", () => {
    render(
      <FormProduto
        produto={produto}
        loading={false}
        onChange={() => {}}
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    );
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preço/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /salvar/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancelar/i })).toBeInTheDocument();
  });

  it("deve chamar onChange ao digitar nos campos", async () => {
    const onChange = vi.fn();
    render(
      <FormProduto
        produto={produto}
        loading={false}
        onChange={onChange}
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    );
    // Se houver múltiplos inputs, use o primeiro (form principal)
    const nomeInputs = screen.getAllByRole("textbox");
    fireEvent.change(nomeInputs[0], { target: { value: "Novo Nome" } });
    expect(onChange).toHaveBeenCalled();

    const precoInputs = screen.getAllByRole("spinbutton");
    fireEvent.change(precoInputs[0], { target: { value: "20.00" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("deve chamar onSubmit ao submeter o formulário", () => {
    const onSubmit = vi.fn((e) => e.preventDefault());
    const { container } = render(
      <FormProduto
        produto={produto}
        loading={false}
        onChange={() => {}}
        onSubmit={onSubmit}
        onCancel={() => {}}
      />
    );
    // Seleciona o elemento <form> diretamente
    const form = container.querySelector("form");
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalled();
  });

  it("deve mostrar loading quando loading=true", () => {
    render(
      <FormProduto
        produto={produto}
        loading={true}
        onChange={() => {}}
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
