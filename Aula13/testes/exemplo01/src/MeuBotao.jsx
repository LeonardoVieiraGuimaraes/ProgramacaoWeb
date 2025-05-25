import React from "react";

export default function MeuBotao({ onClick, children }) {
  return (
    <button onClick={onClick} data-testid="meu-botao">
      {children}
    </button>
  );
}
