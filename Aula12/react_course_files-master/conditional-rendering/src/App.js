import React, { useState } from 'react';
import './App.css';
import Mailbox from './Mailbox'

// if do JavaScript
// Uso do Operador Lógico &&
// If Else inline (condição ? true : false)
// Evitando que um Componente seja Renderizado

export default function App() {

  const [isLogado, setIsLogado] = useState(false)
  const autentica = () => {
    if (isLogado)
      setIsLogado(false)
    else
      setIsLogado(true)
  }

  const mensagensEmail = ["1", "2"]

  return (
    <div>
      <LoginLogoutMessage isLogado={isLogado} autentica={autentica} />
      <Mailbox exibeComponent={isLogado} mensagensNaoLidas={mensagensEmail}/>
    </div>
  );
}

function LoginLogoutMessage(props) {

  return (
    <div>
      {props.isLogado ?
        <div>
          <h3>Seja bem vindo!</h3>
          <button onClick={props.autentica}>Logout</button>
        </div>
      :
        <div>
          <h3>Por favor, autentique</h3>
          <button onClick={props.autentica}>Autenticar</button>
        </div> }
    </div>
  )

}
