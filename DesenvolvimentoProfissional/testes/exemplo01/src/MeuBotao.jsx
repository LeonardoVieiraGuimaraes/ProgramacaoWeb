import React from "react";

/**
 * MeuBotao
 * Componente de botão simples e reutilizável.
 *
 * Contrato (props):
 * - onClick?: função chamada ao clicar (não é chamada quando disabled=true)
 * - disabled?: booleano que desabilita o botão
 * - children: conteúdo exibido dentro do botão (texto/elementos)
 * - ...rest: quaisquer outras props HTML válidas para <button>
 */
export default function MeuBotao({ onClick, children, disabled = false, ...rest }) {
  return (
    <button
      // Encaminha o atributo disabled para o botão nativo
      disabled={disabled}
      // O navegador não dispara clique em <button disabled>, mas manter o handler é ok
      onClick={onClick}
      data-testid="meu-botao"
      {...rest}
    >
      {children}
    </button>
  );
}
