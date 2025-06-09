import React from 'react'

export default function Mailbox(props) {

    if (!props.exibeComponent)
      return null

    const mensagensNaoLidas = props.mensagensNaoLidas;
    return (
      <div>
        <h1>Olá!</h1>
        {mensagensNaoLidas.length > 0 && 
          <h2>
            Você tem {mensagensNaoLidas.length} mensagens não lidas.
          </h2>
        }
      </div>
    )
  }